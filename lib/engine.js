module.exports.cli = Engine;

var minimist = require('minimist');
var getStdin = require('get-stdin');

function Engine(opts) {
    var Linter = require('./linter').linter;
    var engine = new Linter(opts);

    opts = Object.assign(
        {
            cmd: 'engine',
            tagline: 'JavaScript Custom Style',
            version: '0.0.0'
        },
        opts
    );

    var argv = minimist(process.argv.slice(2), {
        alias: {
            global: 'globals',
            plugin: 'plugins',
            env: 'envs',
            help: 'h',
            verbose: 'v'
        },
        boolean: ['fix', 'help', 'stdin', 'verbose', 'version'],
        string: ['global', 'plugin', 'parser', 'env']
    });

    if (argv._[0] === '-') {
        argv.stdin = true;
        argv._.shift();
    }

    var lintOpts = {
        fix: argv.fix
    };

    var stdinText;

    if (argv.stdin) {
        getStdin().then(function(text) {
            stdinText = text;
            engine.lintText(text, lintOpts, onResult);
        });
    } else {
        engine.lintFiles(argv._, lintOpts, onResult);
    }

    function onResult(err, result) {
        if (err) return onError(err);

        if (argv.stdin && argv.fix) {
            if (result.results[0].output) {
                process.stdout.write(result.results[0].output);
            } else {
                process.stdout.write(stdinText);
            }
        }

        if (!result.errorCount && !result.warningCount) {
            process.exitCode = 0;
            return;
        }

        console.error('%s: %s (%s)', opts.cmd, opts.tagline, opts.homepage);

        var isFixable = result.results.some(function(result) {
            return result.messages.some(function(message) {
                return !!message.fix;
            });
        });

        if (isFixable) {
            console.error(
                '%s: %s',
                opts.cmd,
                'Run `' +
                    opts.cmd +
                    ' --fix` to automatically fix some problems.'
            );
        }

        result.results.forEach(function(result) {
            result.messages.forEach(function(message) {
                log(
                    '  %s:%d:%d: %s%s',
                    result.filePath,
                    message.line || 0,
                    message.column || 0,
                    message.message,
                    argv.verbose ? ' (' + message.ruleId + ')' : ''
                );
            });
        });

        process.exitCode = result.errorCount ? 1 : 0;
    }

    function onError(err) {
        console.error(opts.cmd + ': Unexpected linter output:\n');
        console.error(err.stack || err.message || err);
        console.error(
            '\nIf you think this is a bug in `%s`, open an issue: %s',
            opts.cmd,
            opts.bugs
        );
        process.exitCode = 1;
    }

    function log() {
        if (argv.stdin && argv.fix) {
            arguments[0] = opts.cmd + ': ' + arguments[0];
            console.error.apply(console, arguments);
        } else {
            console.log.apply(console, arguments);
        }
    }
}
