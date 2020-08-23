import minimist from 'minimist';
import { filterCategories } from './commands/filter-categories';
import { getCategories } from './commands/get-categories';
import { help } from './commands/help';
import { version } from './commands/version';

export function cli(argsArray) {
  const args = minimist(argsArray.slice(2));
  let cmd = args._[0] || 'help';

  if (args.version || args.v) {
    cmd = 'version';
  }

  if (args.help || args.h) {
    cmd = 'help';
  }

  switch (cmd) {
    case 'version':
      version(args);
      break;
    case 'help':
      help(args);
      break;
    case 'filter-categories':
      filterCategories(args);
      break;
    case 'get-categories':
      getCategories(args);
      break;
    default:
      console.error(`"${cmd}" is not a valid command!`);
      break;
  }
}
