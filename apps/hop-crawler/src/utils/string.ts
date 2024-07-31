import Decimal from 'decimal.js';
import { toDec } from './decimal';
import { logger } from './logger';

const getFromToValues = (text: string): [string, string] => {
  // eslint-disable-next-line prefer-const
  let [from, to] = text.replaceAll(' ', '').replaceAll('%', '').split('-');
  if (Number.isNaN(Number(from)) || from === '') {
    logger.error(`Invalid from value: ${from}`);
  }
  if (!to || Number.isNaN(Number(to)) || to === '') {
    to = from;
  }
  return [from, to];
};

export const getFromToDecimalValues = (text: string): [Decimal, Decimal] => {
  const [from, to] = getFromToValues(text).map(toDec);
  return [from, to];
};

export const getFromToIntValues = (text: string): [Number, Number] => {
  const [from, to] = getFromToValues(text).map(Number);
  return [from, to];
};

// eslint-disable-next-line no-confusing-arrow
export const emptyToNull = (text: string | null): string | null =>
  text === '' ? null : text;
