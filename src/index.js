/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/12.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
const {
  getTwitterFeed,
  displayTwitterFeed,
} = require('./modules/user-tweet/user-tweet.index');
const {
  getAllUniqueUsers,
  getListOfUsersAndFollows,
  getUsersAndFollowers,
} = require('./modules/user/user.index');
const {
  getTweets,
  convertTweetsIntoList,
} = require('./modules/tweet/tweet.index');

module.exports = {
  getTwitterFeed,
  displayTwitterFeed,
  getAllUniqueUsers,
  getListOfUsersAndFollows,
  getUsersAndFollowers,
  getTweets,
  convertTweetsIntoList,
};
