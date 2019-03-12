/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/12.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict';

const path = require('path');
const { run } = require('./cli.index');

describe('CLI - Unit Test', () => {
  describe('when 2 valid args are supplied', () => {
    it('should print feed', async () => {
      const userFilePath = path.join('data', 'user.txt');
      const tweetFilePath = path.join('data', 'tweet.txt');
      const spyConsole = jest.spyOn(console, 'log');

      await run(userFilePath, tweetFilePath);
      expect(spyConsole).toHaveBeenCalled();
    });
  });
});
