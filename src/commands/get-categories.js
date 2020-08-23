import { getChannelsFromFile, writeFile } from '../lib/helpers';

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

  writeCategoriesToFile(categories, 'allowed-categories.js');
};

const writeCategoriesToFile = (categories, filename) => {
  let data = `export const categories = [\n  '`;
  data += categories.join(`',\n  '`);
  data += `',\n];\n`;

  writeFile(filename, data);
};
