/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/12.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
const {
  getUsersAndFollowers,
  getTweets,
  getAllUniqueUsers,
  getListOfUsersAndFollows,
  convertTweetsIntoList,
  getTwitterFeed,
  displayTwitterFeed,
} = require('./../../index');

const run = async (userFilePath, tweetFilePath) => {
  try {
    const userData = await getUsersAndFollowers(userFilePath);
    const tweetData = await getTweets(tweetFilePath);

    const listOfUniqueUser = getAllUniqueUsers(userData);
    const listOfUsersAndFollows = getListOfUsersAndFollows(userData);
    const listOfUserTweets = convertTweetsIntoList(tweetData);

    const twitterFeed = getTwitterFeed(
      listOfUniqueUser,
      listOfUsersAndFollows,
      listOfUserTweets,
    );
    displayTwitterFeed(twitterFeed);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  run,
};
