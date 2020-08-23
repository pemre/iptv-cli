import chalk from 'chalk';

const menus = {
  main: `
${chalk.greenBright('iptv-cli [command] <options>')}
  ${chalk.blueBright('filter')} ............. generate an iptv list filtered by at least one allowed-*.js file 
  ${chalk.blueBright('get-categories')} ..... generate categories file (allowed-categories.js) from an iptv list file
  ${chalk.blueBright('get-channels')} ....... generate channels file (allowed-channels.js) from an iptv list file
  ${chalk.blueBright('version')} ............ show cli version
  ${chalk.blueBright('help')} ............... show help menu for a command
`,

  filter: `
${chalk.greenBright('iptv-cli filter <options> (at least one --allowed-* argument is required)')}
  --from-file ........... (required) set the source iptv file. e.g. --from-file example.m3u
  --allowed-categories .. filter by category file. You can generate the file with get-categories command.
  --allowed-channels .... filter by channel ids file. You can generate one with get-channels command.
  --out ................. set the filename for filtered iptv file. default: iptv-list.m3u
`,

  'get-categories': `
${chalk.greenBright('iptv-cli get-categories <options>')}
  --from-file ........... (required) set the source iptv file. e.g. --from-file example.m3u
`,

  'get-channels': `
${chalk.greenBright('iptv-cli get-channels <options>')}
  --from-file ........... (required) set the source iptv file. e.g. --from-file example.m3u
`,
};

export const help = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]
  console.log(menus[subCmd] || menus.main)
};
