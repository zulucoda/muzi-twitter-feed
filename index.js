#!/usr/bin/env node

/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/12.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */

'use strict';

const program = require('commander');
const chalk = require('chalk');
const { checkIfCorrectParams } = require('./src/modules/cli/utils/cli.utils');

program
  .description(chalk.bold.underline.cyan('CLI: Muzi twitter feed'))
  .command(
    chalk.bold.red('[user.txt] [tweet.txt]'),
    chalk.bold.red(
      'Please provide user.txt and tweet.txt files (e.g full/path/to/user.txt full/path/to/tweet.txt)',
    ),
  )
  .parse(process.argv);

const args = program.args;

if (args.length < 2) {
  program.help();
  process.exit(1);
} else if (!checkIfCorrectParams(args)) {
  program.help();
  process.exit(1);
} else {
  require('./src/modules/cli/cli.index').run(args[0], args[1]);
}
