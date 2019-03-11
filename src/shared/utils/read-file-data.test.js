/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/11.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict';
const path = require('path');
const { readFileData } = require('./read-file-data');

describe('Read File Data - Unit Test', () => {
  describe('readFileData', () => {
    describe('resolve', () => {
      it('should read data from file and resolve promise with data', async () => {
        const userFilePath = path.join('data', 'user.txt');
        const someData = await readFileData(userFilePath);
        expect(someData).not.toBeNull();
      });
    });

    describe('reject', () => {
      it('should reject promise with error when read data fails', async () => {
        const userFilePath = path.join('data', 'some-error-file.txt');
        try {
          await readFileData(userFilePath);
        } catch (err) {
          expect(err.message).toContain(`Unable to process ${userFilePath}`);
        }
      });
    });
  });
});
