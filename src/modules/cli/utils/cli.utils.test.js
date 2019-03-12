/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/12.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict';
const { checkIfCorrectParams } = require('./cli.utils');

describe('CLI Utils - Unit Test', () => {
  describe('checkIfCorrectParams', () => {
    describe('success', () => {
      it('should check that params are user.txt and tweet.txt', () => {
        const params = ['some/path/user.txt', 'some/path/tweet.txt'];
        expect(checkIfCorrectParams(params)).toBeTruthy();
      });
    });

    describe('fail', () => {
      it('should return false when args are incorrect order', () => {
        const params = ['some/path/tweet.txt', 'some/path/user.txt'];
        expect(checkIfCorrectParams(params)).toBeFalsy();
      });

      it('should return false when args are incorrectly (users.txt, tweets.txt)', () => {
        const params = ['some/path/users.txt', 'some/path/tweets.txt'];
        expect(checkIfCorrectParams(params)).toBeFalsy();
      });

      it('should return false when args are incorrectly (users, tweets)', () => {
        const params = ['some/path/users', 'some/path/tweets'];
        expect(checkIfCorrectParams(params)).toBeFalsy();
      });
    });
  });
});
