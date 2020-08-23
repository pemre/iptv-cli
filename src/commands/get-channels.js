import { getChannelsFromFile, writeListToFile } from '../lib/helpers';

export const getChannels = (args) => {
  let channels = [];

  if (args['from-file']) {
    channels = getChannelsFromFile(args['from-file']);
  } else {
    console.error(`Error: Missing argument "from-file", example: --from-file example.m3u`);
    return;
  }

  channels = channels.map((channel) => channel.inf.tvgId);
  channels = [...new Set(channels)] // Get unique list
    .filter((channel) => channel !== '') // Remove empty ones
    // .sort();

  writeListToFile('allowed-channels.js', channels);
};
