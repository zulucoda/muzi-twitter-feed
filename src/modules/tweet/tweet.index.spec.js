/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/11.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict';
const { getTweets } = require('./tweet.index');
const path = require('path');

describe('Tweet - Unit Test', () => {
  let tweetFilePath;
  beforeEach(() => {
    tweetFilePath = path.join('data', 'tweet.txt');
  });

  it('should display tweets in tweet.txt', async () => {
    const tweets = await getTweets(tweetFilePath);
    expect(tweets).not.toBeNull();
  });
});
