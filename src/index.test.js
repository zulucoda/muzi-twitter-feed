/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/12.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
const {
  getTwitterFeed,
  getUsersAndFollowers,
  getListOfUsersAndFollows,
  getAllUniqueUsers,
  getTweets,
  convertTweetsIntoList,
  displayTwitterFeed,
} = require('./index');

describe('Index - Unit Test', () => {
  describe('user-tweet', () => {
    it('should export getTwitterFeed', () => {
      expect(getTwitterFeed).toBeDefined();
    });

    it('should export displayTwitterFeed', () => {
      expect(displayTwitterFeed).toBeDefined();
    });
  });

  describe('user', () => {
    it('should export getUsersAndFollowers', () => {
      expect(getUsersAndFollowers).toBeDefined();
    });

    it('should export getAllUniqueUsers', () => {
      expect(getAllUniqueUsers).toBeDefined();
    });

    it('should export getListOfUsersAndFollows', () => {
      expect(getListOfUsersAndFollows).toBeDefined();
    });
  });

  describe('tweet', () => {
    it('should export getTweets', () => {
      expect(getTweets).toBeDefined();
    });

    it('should export convertTweetsIntoList', () => {
      expect(convertTweetsIntoList).toBeDefined();
    });
  });
});
