import { mapHops } from './hops';
import { logger } from './utils/logger';

const main = async () => {
  logger.info('Starting...');
  // const urls = await getListUrls();
  // const list = await getListDom(urls);
  // await saveHopsToLocal(list);
  await mapHops();
  logger.success('Done');
};

main().catch((error) => {
  logger.error(error);
});
