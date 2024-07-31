import { getPurposeByString, getValueByText } from './helpers/hops';
import { readHopsFromLocal } from './localHops';

export const mapHops = async () => {
  const hopList = await readHopsFromLocal();
  const mapped = hopList.map((hop) =>
    // if (getPurposeByString(getValueByText(hop.dom, "purpose") || "") === null) {
    //   console.log(hop.name);
    // }
    ({
      name: hop.name,
      alsoKnownAs: getValueByText(hop.dom, 'also known as'),
      characteristics: getValueByText(hop.dom, 'characteristics'),
      purpose: getPurposeByString(getValueByText(hop.dom, 'purpose') || ''),
    }),
  );
  console.log(mapped.slice(0, 24));
};
