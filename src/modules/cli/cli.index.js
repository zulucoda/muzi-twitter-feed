/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/12.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict';

const {
  getUsersAndFollowers,
  getTweets,
  getAllUniqueUsers,
  getListOfUsersAndFollows,
  convertTweetsIntoList,
  getTwitterFeed,
  displayTwitterFeed,
} = require('./../../index');
const chalk = require('chalk');

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
    console.log(chalk.bold.underline.green('CLI: Muzi twitter feed \n'));
    console.log(chalk.bold.underline.red('An error occurred'));
    console.log(chalk.bold.red(err));
  }
};

module.exports = {
  run,
};
