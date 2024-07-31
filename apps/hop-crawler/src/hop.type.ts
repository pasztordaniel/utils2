/*
'Bittering',
'Bittering & Aroma',
'Bittering & Aroma',
'Fruity aroma',
'Aroma',
'Aroma, Breeding',
'Bittering &a Aroma'
*/

export enum Purpose {
  BITTERING = 'BITTERING',
  BITTERING_AND_AROMA = 'BITTERING_AND_AROMA',
  AROMA = 'BITTERING_AND_AROMA',
}

export interface Hop {
  alsoKnownAs: string;
  characteristics: string;
  purpose: Purpose;
  alphaAcidComposition: string;
  betaAcidComposition: string;
  coHumuloneComposition: string;
  country: string;
  lineage: string;
  proprietary: string;
  coneSize: string;
  coneDensity: string;
  seasonalMaturity: string;
  yieldAmount: string;
  growthRate: string;
  resistantTo: string;
  susceptibleTo: string;
  storability: string;
  hopStorageIndexHsi: string;
  harvestDifficulty: string;
  totalOilComposition: string;
  myrcene: string;
  humulene: string;
  caryophyllene: string;
  farnesene: string;
  βPinene: string;
  geraniol: string;
  linalool: string;
  xanthohumolX: string;
  substitutes: string;
  styleGuide: string;
  colupulone: string;
  easeOfHarvest: string;
  myrceneOilComposition: string;
  humuleneOilComposition: string;
  selinene: string;
  '2Undecanone': string;
  totalPolyphenols: string;
  caryophylleneOil: string;
  farneseneOil: string;
  eastOfHarvest: string;
  totalOil: string;
  myrceneOil: string;
  humuleneOil: string;
}
