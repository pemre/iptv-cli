import { getCategoriesFromFile, getChannelsFromFile, writeFile } from '../lib/helpers';

export const filterCategories = (args) => {
  let channels = [];

  if (args['from-file']) {
    channels = getChannelsFromFile(args['from-file']);
  } else {
    console.error(`Error: Missing argument "from-file", example: --from-file example.m3u`);
    return;
  }

  if (args['allowed-categories']) {
    const allowedCategories = getCategoriesFromFile(args['allowed-categories']);
    channels = channels.filter((channel) => allowedCategories.includes(channel.inf.groupTitle.trim()))
  } else {
    console.error(`Error: Missing argument "allowed-categories", example: --allowed-categories allowed-categories.js`);
    return;
  }

  const formattedChannels = channels.map((channel) => formatChannelInfo(channel));

  writeCategoriesToFile(formattedChannels, args.out);
};

const formatChannelInfo = (ch) => `#EXTINF:-1` +
  ` tvg-id="${ch.inf.tvgId}"` +
  ` tvg-name="${ch.inf.title}"` +
  ` tvg-logo="${ch.inf.tvgLogo}"` +
  ` group-title="${ch.inf.groupTitle}",` +
  `${ch.inf.title}\n` +
  `${ch.url}`;

const writeCategoriesToFile = (channels, filename = 'iptv-list.m3u') => {
  let data = `#EXTM3U\n`;
  data += channels.join(`\n`);
  data += `\n`;

  writeFile(filename, data);
};

