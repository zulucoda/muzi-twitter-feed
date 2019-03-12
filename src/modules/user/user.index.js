/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/11.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict';

const getAllUniqueUsers = userAndFollowersData => {
  const userDataArr = userAndFollowersData
    .replace(/follows/gi, '\n')
    .replace(/,/gi, '\n')
    .replace(/ /gi, '')
    .replace(/\r/gi, '\n')
    .split('\n')
    .filter(x => x !== '')
    .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
  const removeDuplicates = new Set(userDataArr);
  return Array.from(removeDuplicates);
};

const getListOfUsersAndFollows = userAndFollowersData => {
  const userDataArr = userAndFollowersData.split('\n');
  const listOfUserAndFollows = [];
  const cacheUser = {};
  for (let i = 0; i < userDataArr.length; i++) {
    const userArr = userDataArr[i].split('follows');
    const userObj = {};
    if (userArr.length > 1) {
      const key = userArr[0].trim();
      const val = userArr[1]
        .trim()
        .split(',')
        .map(t => t.trim());
      if (key in cacheUser) {
        // append follows
        const currentFollows = listOfUserAndFollows[cacheUser[key]];
        const removeDuplicateFollows = new Set([
          ...currentFollows[key],
          ...val,
        ]);
        currentFollows[key] = Array.from(removeDuplicateFollows);
        listOfUserAndFollows[cacheUser[key]] = currentFollows;
      } else {
        // create new
        userObj[key] = val;
        listOfUserAndFollows.push(userObj);
        cacheUser[key] = listOfUserAndFollows.length - 1;
      }
    }
  }

  return listOfUserAndFollows;
};

module.exports = {
  getAllUniqueUsers,
  getListOfUsersAndFollows,
};
