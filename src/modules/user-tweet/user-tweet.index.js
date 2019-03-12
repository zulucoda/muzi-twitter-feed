/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/11.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict';

const _getFollowsTweet = (listOfFollows, currentUserFollowsTweet) => {
  for (let i = 0; i < listOfFollows.length; i++) {
    const follows = listOfFollows[i];
    const followsTweet = currentUserFollowsTweet[follows];
    if (followsTweet) {
      return [`@${follows}: ${followsTweet}`];
    }
  }
  return null;
};

const _flattenMapArr = mapArr => {
  return mapArr.reduce((arrMap, arrMapFlatter) => {
    return arrMap.concat(
      Array.isArray(arrMapFlatter)
        ? _flattenMapArr(arrMapFlatter)
        : arrMapFlatter,
    );
  }, []);
};

const _filterOutUndefined = arr => {
  return arr.filter(a => a);
};

const _getUserFollowsArr = (listOfUsersAndFollows, user) => {
  const userFollowsMap = listOfUsersAndFollows
    .filter(userAndFollows => userAndFollows[user])
    .map(userAndFollows => userAndFollows[user]);
  return _flattenMapArr(userFollowsMap);
};

/**
 * Get twitter feed using, list of unique user, list of users and follows and user tweets
 * @param {Array<String>} listOfUniqueUser
 * @param {Array<{key:Array<String>}>} listOfUsersAndFollows
 * @param {Array<{key:String}>} listOfUserTweets
 * @return {Array<{key:Array<String>}>} twitter feed
 */
const getTwitterFeed = (
  listOfUniqueUser,
  listOfUsersAndFollows,
  listOfUserTweets,
) => {
  return listOfUniqueUser.map(user => {
    const userAndFollowsTweets = listOfUserTweets.map(userAndFollowsTweet => {
      const userFollowsArr = _getUserFollowsArr(listOfUsersAndFollows, user);
      const followsTweet = _getFollowsTweet(
        userFollowsArr,
        userAndFollowsTweet,
      );

      if (userAndFollowsTweet[user]) {
        return [`@${user}: ${userAndFollowsTweet[user]}`];
      } else if (followsTweet) {
        return followsTweet;
      }
    });
    const userAndTweetFeedObj = {};
    userAndTweetFeedObj[user] = _filterOutUndefined(
      _flattenMapArr(userAndFollowsTweets),
    );
    return userAndTweetFeedObj;
  });
};

/**
 * Display twitter feed
 * @param {Array<{key:Array<String>}>} twitterFeed
 */
const displayTwitterFeed = twitterFeed => {
  twitterFeed.forEach(t => {
    for (const [key, value] of Object.entries(t)) {
      console.log(`${key} `);
      value.forEach(val => {
        console.log(`       ${val}`);
      });
    }
  });
};

module.exports = {
  getTwitterFeed,
  displayTwitterFeed,
};
