'use strict'
const fs = require('fs');


var data = fs.readFileSync('db/fixtures/words','utf8')
console.log(data);
