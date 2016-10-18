let fs = require('fs')
let data_file = fs.readFileSync('./db/fixtures/words', 'utf8').split("\n")
let data_array = []

for(var i = 0 ; i < data_file.length-1 ; i++){
  data_array.push({words: data_file[i], createdAt: new Date(), updatedAt: new Date()})
}
console.log(data_array[data_array.length-1]);
