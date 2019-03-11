/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/11.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict';
const {
  getUsersAndFollowers,
  getAllUniqueUsers,
  getListOfUsersAndFollows,
} = require('./user.index');
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

  describe('getAllUniqueUsers', () => {
    it('should return all unique users only', () => {
      const userAndFollowersData = `Ward follows Alan
Alan follows Martin
Ward follows Martin, Alan
`;
      const actual = getAllUniqueUsers(userAndFollowersData);
      const expected = ['Alan', 'Martin', 'Ward'];
      expect(expected).toEqual(actual);
    });

    it('should return empty array when there is no data', () => {
      const userAndFollowersData = '';
      const actual = getAllUniqueUsers(userAndFollowersData);
      const expected = [];
      expect(expected).toEqual(actual);
    });
  });

  describe('getListOfUsersAndFollows', () => {
    it('should return users list and follows', () => {
      const userAndFollowersData = `Ward follows Alan
Alan follows Martin
Ward follows Martin, Alan
`;
      const actual = getListOfUsersAndFollows(userAndFollowersData);
      const expected = [
        {
          Ward: ['Martin, Alan'],
          Alan: ['Martin'],
        },
      ];
      expect(expected).toEqual(actual);
    });
  });
});
