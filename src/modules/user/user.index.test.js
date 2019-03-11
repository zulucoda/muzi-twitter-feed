/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/11.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict';
const { getUsersAndFollowers, getUsers } = require('./user.index');
const path = require('path');

describe('Users - Unit Test', () => {
  let userFilePath;
  beforeEach(() => {
    userFilePath = path.join('data', 'user.txt');
  });

  it('should return users and followers in user.txt', async () => {
    const users = await getUsersAndFollowers(userFilePath);
    expect(users).not.toBeNull();
  });

  describe('getUsers', () => {
    it('should return users only', () => {
      const userAndFollowers = `Ward follows Alan
Alan follows Martin
Ward follows Martin, Alan
`;
      const actual = getUsers(userAndFollowers);
      const expected = ['Alan', 'Martin', 'Ward'];
      expect(expected).toEqual(actual);
    });

    it('should return empty array when there is no data', () => {
      const userAndFollowers = '';
      const actual = getUsers(userAndFollowers);
      const expected = [];
      expect(expected).toEqual(actual);
    });
  });
});
