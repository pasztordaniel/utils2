/* eslint-disable no-console */
import chalk from 'chalk';

const info = (...args: unknown[]) => {
  console.log(chalk.bgCyanBright.bold(' INFO: '), ...args);
};

const warn = (...args: unknown[]) => {
  console.log(chalk.bgHex('#FF8800').bold(' WARN: '), ...args);
};

const success = (...args: unknown[]) => {
  console.log(chalk.bgGreenBright.bold(' SUCCESS: '), ...args);
};

const error = (...args: unknown[]) => {
  console.log(chalk.bgRedBright.bold(' ERROR: '), ...args);
};

export const logger = { info, warn, success, error };
