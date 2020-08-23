export const getAbsolutePath = (relativePath) => require('path').resolve(process.cwd(), relativePath);

export const getCategoriesFromFile = (filename) => {
  const absolutePath = getAbsolutePath(filename);
  const { categories } = require(absolutePath);
  return categories;
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
