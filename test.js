const fs = require('fs');
let data = fs.readFileSync('db/fixtures/words', 'utf8').split('\n')

let temp = []
for (let i = 0; i <data.length; i++){
  let kata = {
    kata: data[i]
  }
  temp.push(kata)
}
