import { getChannelsFromFile, writeListToFile } from '../lib/helpers';

export const getCategories = (args) => {
  let channels = [];

  if (args['from-file']) {
    channels = getChannelsFromFile(args['from-file']);
  } else {
    console.error(`Error: Missing argument "from-file", example: --from-file example.m3u`);
    return;
  }

  const allCategories = channels.map((channel) => channel.inf.groupTitle.trim());
  const categories = [...new Set(allCategories)] // Get unique list
    .filter((channel) => channel !== '') // Remove empty ones
    .sort();

  writeListToFile('allowed-categories.js', categories);
};
