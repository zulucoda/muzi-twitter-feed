/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/11.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict';
const { getUsers } = require('./user.index');
const path = require('path');

describe('Users - Unit Test', () => {
  let userFilePath;
  beforeEach(() => {
    userFilePath = path.join('data', 'user.txt');
  });

  it('should display users in user.txt', async () => {
    const users = await getUsers(userFilePath);
    expect(users).not.toBeNull();
  });
});
