const fs = require('fs');
var words = fs.readFileSync('./db/fixtures/words','utf-8').trim().split('\n')
// console.log(words);
for (var i = 0; i < words.length; i++) {
  console.log(words[i]);
}
