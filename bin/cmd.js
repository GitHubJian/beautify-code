#!/usr/bin/env node

if (process.version.match(/v(\d+)\./)[1] < 8) {
    console.error(
        'beautify: Node 8 or greater is required. `beautify` did not run.'
    );
} else {
    require('../lib/engine').cli(require('../options'));
}
