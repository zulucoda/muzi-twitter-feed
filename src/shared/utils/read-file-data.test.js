/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/11.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict';
const path = require('path');
const { getData } = require('./read-file-data');

describe('Read File Data - Unit Test', () => {
  describe('getData', () => {
    describe('resolve', () => {
      it('should read data from file and resolve promise with data', async () => {
        const userFilePath = path.join('data', 'user.txt');
        const someData = await getData(userFilePath);
        expect(someData).not.toBeNull();
      });
    });

    describe('getData', () => {
      it('should reject promise with error when read data fails', async () => {
        const userFilePath = path.join('data', 'some-error-file.txt');
        try {
          await getData(userFilePath);
        } catch (err) {
          expect(err).toContain(`Unable to process ${userFilePath}`);
        }
      });
    });
  });
});
