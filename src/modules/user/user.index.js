/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/11.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict';

const { readFileData } = require('../../shared/utils/read-file-data');

const getUsers = async filePath => {
  const fileData = await readFileData(filePath);
  return fileData;
};

module.exports = {
  getUsers,
};
