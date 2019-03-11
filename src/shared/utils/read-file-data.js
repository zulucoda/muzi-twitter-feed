/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/11.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
const fs = require('fs');

const readFileData = filename => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(new Error(`Unable to process ${filename}: ${err.message}`));
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = {
  readFileData,
};
