#!/usr/bin/env node
require = require('esm')(module);
require('./src/cli.js').cli(process.argv);
