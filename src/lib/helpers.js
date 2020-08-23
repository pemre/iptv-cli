export const getAbsolutePath = (relativePath) => require('path').resolve(process.cwd(), relativePath);

export const getListFromFile = (filename) => {
  const absolutePath = getAbsolutePath(filename);
  const { list } = require(absolutePath);
  return list;
};

export const getChannelsFromFile = (filename) => {
  const fs = require('fs');
  const content = fs.readFileSync(getAbsolutePath(filename), { encoding: 'utf-8'});
  const parser = require('m3u8-file-parser');
  const reader = new parser();
  reader.read(content);
  return reader.getResult().segments;
};

export const writeFile = (filename, data) => {
  const fs = require('fs');
  fs.writeFile(filename, data, function (err) {
    if (err) return console.log(err);
    console.log(`File has been created: ${filename}`);
  });
};

export const writeListToFile = (filename, list) => {
  let data = `export const list = [\n  '`;
  data += list.join(`',\n  '`);
  data += `',\n];\n`;

  writeFile(filename, data);
};
