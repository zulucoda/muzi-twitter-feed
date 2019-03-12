/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/12.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict';

const {
  getTwitterFeed,
  displayTwitterFeed,
} = require('./modules/user-tweet/user-tweet.index');
const {
  getAllUniqueUsers,
  getListOfUsersAndFollows,
} = require('./modules/user/user.index');
const { convertTweetsIntoList } = require('./modules/tweet/tweet.index');
const { getData } = require('./shared/utils/read-file-data');

module.exports = {
  getTwitterFeed,
  displayTwitterFeed,
  getAllUniqueUsers,
  getListOfUsersAndFollows,
  getUsersAndFollowers: getData,
  getTweets: getData,
  convertTweetsIntoList,
};
