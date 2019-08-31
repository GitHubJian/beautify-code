const eslint = require('eslint');
const path = require('path');
const pkg = require('./package.json');

module.exports = {
    cmd: 'beautify',
    eslint,
    eslintConfig: {
        configFile: path.join(__dirname, 'eslintrc.js')
    },
    tagline: 'Use JavaScript Beautify Style',
    version: pkg.version
};
