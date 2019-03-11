/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/11.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
const { readFileData } = require('../../shared/utils/read-file-data');

const getTweets = async filePath => {
  return await readFileData(filePath);
};

const convertTweetsIntoList = tweetData => {
  return tweetData.split('\n').map(tweet => {
    const tweetArr = tweet.split('>');
    if (tweetArr.length > 1) {
      const tweetObj = {};
      tweetObj[tweetArr[0].trim()] = tweetArr[1].trim();
      return tweetObj;
    }
    return { '': '' };
  });
};

module.exports = {
  getTweets,
  convertTweetsIntoList,
};
