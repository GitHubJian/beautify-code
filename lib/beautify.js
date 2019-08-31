const Linter = require('./linter').linter;
const opts = require('./options');

module.exports = new Linter(opts);
