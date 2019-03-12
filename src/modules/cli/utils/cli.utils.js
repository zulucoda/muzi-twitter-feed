/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/12.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict';

const path = require('path');

const USER_FILE_NAME = 'user.txt';
const TWEET_FILE_NAME = 'tweet.txt';

const checkIfCorrectParams = args => {
  const userFileName = path.basename(args[0]);
  const tweetFileName = path.basename(args[1]);
  return (
    userFileName.toLowerCase() === USER_FILE_NAME &&
    tweetFileName.toLowerCase() === TWEET_FILE_NAME
  );
};

module.exports = {
  checkIfCorrectParams,
};
