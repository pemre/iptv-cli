import { getChannelsFromFile, getListFromFile, writeFile } from '../lib/helpers';

export const filter = (args) => {
  let channels = [];

  if (args['from-file']) {
    channels = getChannelsFromFile(args['from-file']);
  } else {
    console.error(`Error: Missing argument "from-file", example: --from-file example.m3u`);
    return;
  }

  let allowedCategories = [];
  let allowedChannels = [];

  if (!args['allowed-channels'] && !args['allowed-categories']) {
    console.error(`Error: Missing arguments. At least one allowed argument must be used.`);
    return;
  }

  if (args['allowed-categories']) {
    allowedCategories = getListFromFile(args['allowed-categories']);
  }

  if (args['allowed-channels']) {
    allowedChannels = getListFromFile(args['allowed-channels']);
  }

  channels = channels.filter((channel) => {
    if (
      allowedCategories.length > 0 &&
      allowedCategories.includes(channel.inf.groupTitle.trim())
    ) {
      return true;
    }

    if (
      allowedChannels.length > 0 &&
      allowedChannels.includes(channel.inf.tvgId)
    ) {
      return true;
    }

    return false;
  });

  const formattedChannels = channels.map((channel) => formatChannelInfo(channel));

  writeChannelsToFile(formattedChannels, args.out);
};

const formatChannelInfo = (ch) => `#EXTINF:-1` +
  ` tvg-id="${ch.inf.tvgId}"` +
  ` tvg-name="${ch.inf.title}"` +
  ` tvg-logo="${ch.inf.tvgLogo}"` +
  ` group-title="${ch.inf.groupTitle}",` +
  `${ch.inf.title}\n` +
  `${ch.url}`;

const writeChannelsToFile = (channels, filename = 'iptv-list.m3u') => {
  let data = `#EXTM3U\n`;
  data += channels.join(`\n`);
  data += `\n`;

  writeFile(filename, data);
};

