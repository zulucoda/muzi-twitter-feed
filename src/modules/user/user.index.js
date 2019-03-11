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

const getUsers = userAndFollowers => {
  const userDataArr = userAndFollowers
    .replace(/follows/gi, '\n')
    .replace(/,/gi, '\n')
    .replace(/ /gi, '')
    .split('\n')
    .filter(x => x !== '')
    .sort((a, b) => a > b);
  const removeDuplicates = new Set(userDataArr);
  return Array.from(removeDuplicates);
};

module.exports = {
  getUsersAndFollowers,
  getUsers,
};
