/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/11.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict';
const { getAllUniqueUsers, getListOfUsersAndFollows } = require('./user.index');

const { getData } = require('../../shared/utils/read-file-data');

const path = require('path');

describe('Users - Unit Test', () => {
  let userFilePath;
  beforeEach(() => {
    userFilePath = path.join('data', 'user.txt');
  });

  describe('getAllUniqueUsers', () => {
    it('should return all unique users only', () => {
      const userAndFollowersData = `Ward follows Alan
Alan follows Martin
Ward follows Martin, Alan
`;
      const actual = getAllUniqueUsers(userAndFollowersData);
      const expected = ['Alan', 'Martin', 'Ward'];
      expect(actual).toEqual(expected);
    });

    it('should return empty array when there is no data', () => {
      const userAndFollowersData = '';
      const actual = getAllUniqueUsers(userAndFollowersData);
      const expected = [];
      expect(actual).toEqual(expected);
    });

    describe('edge cases', () => {
      it('should return all unique user only and excluding "Alan\r" & "Martin\r" ', async () => {
        const userAndFollowersData = await getData(userFilePath);
        const actual = getAllUniqueUsers(userAndFollowersData);
        const expected = ['Alan', 'Martin', 'Ward'];
        expect(actual).toEqual(expected);
      });
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
          Ward: ['Alan', 'Martin'],
        },
        {
          Alan: ['Martin'],
        },
      ];
      expect(actual).toEqual(expected);
    });

    it('should return empty users list and follows when no data', () => {
      const userAndFollowersData = '';
      const actual = getListOfUsersAndFollows(userAndFollowersData);
      const expected = [];
      expect(actual).toEqual(expected);
    });
  });
});
