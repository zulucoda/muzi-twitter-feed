/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/11.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict';

const { readFileData } = require('../../shared/utils/read-file-data');

const getUsersAndFollowers = async filePath => {
  return await readFileData(filePath);
};

const getAllUniqueUsers = userAndFollowersData => {
  const userDataArr = userAndFollowersData
    .replace(/follows/gi, '\n')
    .replace(/,/gi, '\n')
    .replace(/ /gi, '')
    .split('\n')
    .filter(x => x !== '')
    .sort((a, b) => a > b);
  const removeDuplicates = new Set(userDataArr);
  return Array.from(removeDuplicates);
};

const getListOfUsersAndFollows = userAndFollowersData => {
  const userDataArr = userAndFollowersData.split('\n').map(user => {
    const userArr = user.split('follows');
    if (userArr.length > 1) {
      const userObj = {};
      userObj[userArr[0].trim()] = userArr[1].trim().split(',');
      return userObj;
    }
    return { '': '' };
  });
  const removeDuplicates = new Set(userDataArr);
  console.log(removeDuplicates);
};

module.exports = {
  getUsersAndFollowers,
  getAllUniqueUsers,
  getListOfUsersAndFollows,
};
