import _ from 'lodash';
import { readHopsFromLocal } from '../localHops';
import { Purpose } from '../hop.type';
import { emptyToNull } from '../utils/string';

export const getValueByText = (dom: Element, text: string): string | null => {
  const trs = dom.querySelectorAll('tr');
  let value = null;

  trs.forEach((t) => {
    if (
      t.firstElementChild?.textContent
        ?.toLowerCase()
        .includes(text.toLowerCase())
    ) {
      value = emptyToNull(t.children[1].textContent);
    }
  });

  return value;
};

export const getProperties = async (): Promise<void> => {
  const hopList = await readHopsFromLocal();
  const properties: string[] = [];
  hopList.forEach((hop) => {
    hop.dom.querySelectorAll('tr td:first-child').forEach((td) => {
      const text = td.textContent;
      if (text && !properties.includes(_.camelCase(text))) {
        properties.push(_.camelCase(text));
      }
    });
  });
  console.log(properties, properties.length);
};

export const getPurposes = async (): Promise<string[]> => {
  const hopList = await readHopsFromLocal();
  const purposes: string[] = [];
  hopList.forEach((hop) => {
    hop.dom.querySelectorAll('tr td:first-child').forEach((td) => {
      if (td.textContent?.includes('Purpose')) {
        const value = td.nextElementSibling?.textContent;
        if (value && !purposes.includes(value)) {
          purposes.push(value);
        }
      }
    });
  });
  return purposes;
};

export const getPurposeByString = (purposeString: string): Purpose | null => {
  switch (purposeString) {
    case 'Bittering':
      return Purpose.BITTERING;
    case 'Bittering & Aroma':
    case 'Bittering & Aroma':
    case 'Bittering &a Aroma':
    case 'Aroma, Breeding':
      return Purpose.BITTERING_AND_AROMA;
    case 'Fruity aroma':
    case 'Aroma':
      return Purpose.AROMA;
    default:
      return Purpose.BITTERING_AND_AROMA;
  }
};
