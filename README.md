# iptv-cli

[![npm](https://img.shields.io/npm/v/iptv-cli.svg?style=flat-square)](https://www.npmjs.com/package/iptv-cli)
[![npm](https://img.shields.io/npm/dt/iptv-cli.svg?style=flat-square)](https://www.npmjs.com/package/iptv-cli)
[![npm](https://img.shields.io/npm/l/iptv-cli.svg?style=flat-square)](https://www.npmjs.com/package/iptv-cli)
![](https://img.shields.io/badge/awesome%3F-yes-green.svg?style=flat-square)

iptv-cli is a command line tool to parse, filter iptv lists (m3u/m3u8 files).

## Install

`npm install -g iptv-cli`

## Usage

You can start by generating an allowed-categories.js file from your iptv list:

```bash
iptv-cli get-categories --from-file iptv-list.m3u
> File has been created: allowed-categories.js
```

Now you have a list of categories in `allowed-categories.js` file. You can edit it to filter out the categories that you
don't want to see. After editing that file, use it as an argument in `filter` command:

```bash
iptv-cli filter --from-file iptv-list.m3u --allowed-categories allowed-categories.js --out new.m3u
> File has been created: new.m3u
```

Enjoy your filtered `new.m3u` file. You can use your favorite IpTv client to watch your channels!

**Tip:** If you also want to filter by channel ids, you can add another argument. See Commands section below.

## Commands

```bash
iptv-cli [command] <options>
  filter ............. generate an iptv list filtered by at least one allowed-*.js file
  get-categories ..... generate categories file (allowed-categories.js) from an iptv list file
  get-channels ....... generate channels file (allowed-channels.js) from an iptv list file
  version ............ show cli version
  help ............... show help menu for a command
```

### filter

```bash
iptv-cli filter <options> (at least one --allowed-* argument is required)
  --from-file ........... (required) set the source iptv file. e.g. --from-file example.m3u
  --allowed-categories .. filter by category file. You can generate the file with get-categories command.
  --allowed-channels .... filter by channel ids file. You can generate one with get-channels command.
  --out ................. set the filename for filtered iptv file. default: iptv-list.m3u
```

### get-categories

```bash
iptv-cli get-categories <options>
  --from-file ........... (required) set the source iptv channel list file. e.g. --from-file example.m3u
```

### get-channels

```bash
iptv-cli get-channels <options>
  --from-file ........... (required) set the source iptv channel list file. e.g. --from-file example.m3u
```

## Example files

You can find all example files to parse/generate in the root folder of the project, starting with `example-` prefix.
