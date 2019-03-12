/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/11.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
'use strict';
const path = require('path');
const { getTwitterFeed } = require('./user-tweet.index');

describe('User Tweet - Unit Test', () => {
  let tweetFilePath, userFilePath;
  beforeEach(() => {
    userFilePath = path.join('data', 'user.txt');
    tweetFilePath = path.join('data', 'tweet.txt');
  });

  it('should return users with their tweets', () => {
    const listOfUniqueUser = ['Alan', 'Martin', 'Ward'];
    const listOfUsersAndFollows = [
      {
        Ward: ['Alan', 'Martin'],
      },
      {
        Alan: ['Martin'],
      },
    ];
    const listOfUserTweets = [
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

    const actual = getTwitterFeed(
      listOfUniqueUser,
      listOfUsersAndFollows,
      listOfUserTweets,
    );
    const expected = [
      {
        Alan: [
          '@Alan: If you have a procedure with 10 parameters, you probably missed some.',
          '@Alan: Random numbers should not be generated with a method chosen at random.',
        ],
      },
      {
        Martin: [],
      },
      {
        Ward: [
          '@Alan: If you have a procedure with 10 parameters, you probably missed some.',
          '@Ward: There are only two hard things in Computer Science: cache invalidation, naming things and off-by-1 errors.',
          '@Alan: Random numbers should not be generated with a method chosen at random.',
        ],
      },
    ];

    expect(actual).toEqual(expected);
  });
});
