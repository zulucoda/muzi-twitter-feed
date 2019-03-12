/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/11.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict';
const fs = require('fs');

const _readFileData = filename => {
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

/**
 * Get file contents
 * @param {string} filePath
 * @return {Promise<String>}
 */
const getData = async filePath => {
  try {
    return await _readFileData(filePath);
  } catch (err) {
    throw err.message;
  }
};

module.exports = {
  getData,
};
