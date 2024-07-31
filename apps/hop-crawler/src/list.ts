import { JSDOM } from 'jsdom';
import { logger } from './utils/logger';
import { api } from './utils/api';

export interface UrlRes {
  name: string;
  url: string;
}

export const getListUrls = async (): Promise<UrlRes[]> => {
  logger.info('Fetching URL list of hops...');
  try {
    const { data } = await api.get('/hops');
    const dom = new JSDOM(data);
    const links = dom.window.document.querySelectorAll(
      'ul.display-posts-listing li.listing-item a',
    );
    const res = Array.from(links).map<UrlRes>((link) => ({
      name: link.innerHTML,
      url:
        link.getAttribute('href')?.replace('https://www.hopslist.com', '') ||
        '',
    }));

    logger.success(`Fetched ${res.length} hops`);
    return res || [];
  } catch (error) {
    logger.error(error);
    throw new Error('Failed to fetch list of hops');
  }
};

export interface HopListDom {
  name: string;
  url: string;
  dom: Element;
}

export const getListDom = async (urls: UrlRes[]): Promise<HopListDom[]> => {
  logger.info('Fetching dom of hops...');
  try {
    const res: HopListDom[] = [];
    for (const url of urls) {
      logger.info(`Fetching dom of ${url.name}`);
      const { data } = await api.get(url.url);
      const dom = new JSDOM(data);
      const tableRes = dom.window.document.querySelector(
        'table:not([bgcolor])',
      );
      if (!tableRes) {
        throw new Error('Failed to fetch table');
      }
      res.push({ name: url.name, url: url.url, dom: tableRes });
      logger.success(`Fetched dom of ${url.name}`);
    }
    logger.success(`Fetched dom of ${res.length} hops`);
    return res;
  } catch (error) {
    logger.error(error);
    throw new Error('Failed to fetch dom of hops');
  }
};
