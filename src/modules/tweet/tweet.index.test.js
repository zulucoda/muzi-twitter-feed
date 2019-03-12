/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/11.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict';
const { getTweets, convertTweetsIntoList } = require('./tweet.index');
const path = require('path');

describe('Tweet - Unit Test', () => {
  describe('getTweets', () => {
    let tweetFilePath;
    beforeEach(() => {
      tweetFilePath = path.join('data', 'tweet.txt');
    });

    it('should return tweets in tweet.txt', async () => {
      const tweets = await getTweets(tweetFilePath);
      expect(tweets).not.toBeNull();
    });
  });

  describe('convertTweetsIntoList', () => {
    it('should convert tweets into object', () => {
      const tweetData = `Alan> If you have a procedure with 10 parameters, you probably missed some.
Ward> There are only two hard things in Computer Science: cache invalidation, naming things and off-by-1 errors.
Alan> Random numbers should not be generated with a method chosen at random.
`;

      const actual = convertTweetsIntoList(tweetData);
      const expected = [
        {
          Alan:
            'If you have a procedure with 10 parameters, you probably missed some.',
        },
        {
          Ward:
            'There are only two hard things in Computer Science: cache invalidation, naming things and off-by-1 errors.',
        },
        {
          Alan:
            'Random numbers should not be generated with a method chosen at random.',
        },
        { '': '' },
      ];
      expect(actual).toEqual(expected);
    });

    it('should return empty list object when no data', () => {
      const tweetData = ``;
      const actual = convertTweetsIntoList(tweetData);
      const expected = [{ '': '' }];
      expect(actual).toEqual(expected);
    });
  });
});
