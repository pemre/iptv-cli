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
don't want to see. After editing that file, use it as an argument in `filter-categories` command:

```bash
iptv-cli filter-categories --from-file iptv-list.m3u --allowed-categories allowed-categories.js --out new.m3u
> File has been created: new.m3u
```

Enjoy your filtered `new.m3u` file. You can use your favorite IpTv client to watch your channels!

## Commands

```bash
iptv-cli [command] <options>
  filter-categories .. generate an iptv list filtered by allowed-categories.js file 
  get-categories ..... generate categories file (allowed-categories.js) from an iptv list file
  version ............ show cli version
  help ............... show help menu for a command
```

### filter-categories

```bash
iptv-cli filter-categories <options>
  --from-file ........... (required) set the source iptv channel list file. e.g. --from-file example.m3u
  --allowed-categories .. (required) set the filter list. You can generate one with get-categories command.
  --out ................. set the filename for filtered iptv list. default: iptv-list.m3u
```

### get-categories

```bash
iptv-cli get-categories <options>
  --from-file ........... (required) set the source iptv channel list file. e.g. --from-file example.m3u
```

## Example IpTv file (m3u) to parse

You can see the full [example file here](./example-iptv-list.m3u).

```m3u
#EXTM3U
#EXTINF:-1 tvg-id=""    tvg-name="TR:--- YEREL ---"    tvg-logo=""                    group-title="TR Yerel",TR:--- YEREL ---
http://channel.com/2
#EXTINF:-1 tvg-id="ysl" tvg-name="TR3:YESILCAM TV"     tvg-logo="http://l.com/3.png"  group-title="TR Yerel",TR3:YESILCAM TV
http://channel.com/3
#EXTINF:-1 tvg-id="kem" tvg-name="TR4:KEMAL SUNAL"     tvg-logo="http://l.com/4.png"  group-title="TR Yerel",TR4:KEMAL SUNAL
http://channel.com/4
```

## Example `allowed-categories.js` file

An `allowed-categories.js` file is required for `filter-categories` command. If you want to generate one from your own
iptv file, use `get-categories` command.

You can see the full [example file here](./example-allowed-categories.js). As it's a plain JavaScript file, you can
comment out lines (categories) that you don't want:

```javascript
export const allowedCategories = [
  // '24/7',
  // 'English', =====> Use '//' to comment out categories you don't want
  'TR Belgesel',
  'TR Haber',
  // 'Vietnam',
];
```
