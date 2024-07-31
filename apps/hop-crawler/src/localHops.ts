import { readFile, writeFile } from 'fs/promises';
import { JSDOM } from 'jsdom';
import type { HopListDom } from './list';
import { logger } from './utils/logger';

const skippedHops = ['Bate’s Brewer', 'Canterbury Whitebine'];

export const saveHopsToLocal = async (doms: HopListDom[]): Promise<void> => {
  try {
    logger.info('Saving hops to local...');
    const mapped = doms.map((d) => ({ ...d, dom: d.dom.outerHTML }));
    await writeFile(
      `${__dirname}/../data/hops.json`,
      JSON.stringify(mapped, null, 2),
    );
    logger.success('Saved hops to local');
  } catch (error) {
    logger.error(error);
    throw new Error('Failed to save hops to local');
  }
};

type HopListDomJson = Omit<HopListDom, 'dom'> & { dom: string };
export const readHopsFromLocal = async (): Promise<HopListDom[]> => {
  try {
    const data = await readFile(`${__dirname}/../data/hops.json`, 'utf-8');
    const parsed = JSON.parse(data);
    return parsed.map((d: HopListDomJson) => ({
      ...d,
      dom: new JSDOM(d.dom).window.document.documentElement,
    }));
  } catch (error) {
    logger.error(error);
    throw new Error('Failed to read hops from local');
  }
};
