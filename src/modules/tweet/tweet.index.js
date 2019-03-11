/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/11.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
const { readFileData } = require('../../shared/utils/read-file-data');

const getTweets = async filePath => {
  return await readFileData(filePath);
};

module.exports = {
  getTweets,
};
