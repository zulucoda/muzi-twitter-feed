/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2019/03/12.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
const fs = require('fs');
const file = fs.createWriteStream('./data/edge-cases/005/user.txt');

for (let i = 0; i <= 1e6; i++) {
  file.write(
    'Martin> Martin, Gets hacked. Hackers use Martin to DDos twitter feed.\n',
  );
}

file.end();
