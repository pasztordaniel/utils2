import Decimal from 'decimal.js';

export const toDec = (value: string | number | Decimal): Decimal =>
  new Decimal(value);

export const decOne = new Decimal(1);

export const decZero = new Decimal(0);
