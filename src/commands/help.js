import chalk from 'chalk';

const menus = {
  main: `
${chalk.greenBright('iptv-cli [command] <options>')}
  ${chalk.blueBright('filter-categories')} .. generate an iptv list filtered by allowed-categories.js file 
  ${chalk.blueBright('get-categories')} ..... generate categories file (allowed-categories.js) from an iptv list file
  ${chalk.blueBright('version')} ............ show cli version
  ${chalk.blueBright('help')} ............... show help menu for a command
`,

  'filter-categories': `
${chalk.greenBright('iptv-cli filter-categories <options>')}
  --from-file ........... (required) set the source iptv channel list file. e.g. --from-file example.m3u
  --allowed-categories .. (required) set the filter list. You can generate one with get-categories command.
  --out ................. set the filename for filtered iptv list. default: iptv-list.m3u
`,

  'get-categories': `
${chalk.greenBright('iptv-cli get-categories <options>')}
  --from-file ........... (required) set the source iptv channel list file. e.g. --from-file example.m3u
`,
};

export const help = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]
  console.log(menus[subCmd] || menus.main)
};
