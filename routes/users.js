var express = require('express');
var router = express.Router();
let models = require('../models');
let word = models.word;

/* GET users listing. */
router.get('/', (req, res, next) => {
  word.findAll().then((data, err) => {
    res.render('index', { data });
  })
});

module.exports = router;

let cekLength = () =>  database.map(
  (value) => {
  if (value.length === test.length) {
    return value
  }else {
    return null
  }
})

let cekString = (string1,string2) =>{
  var x =string1.split('').sort()
  var y = string2.split('').sort()
  var z = []
  for (var i = 0; i <y.length; i++) {
    for (var j = 0; j < x.length && i < y.length; j++) {
      if (x[j]===(y[i])) {
        z.push(x.splice(j,1).toString())
      }
    }
  }
  if (z.toString() === y.toString()) {
    return true
  }
  return false
  }

let hasil = () => {
  for (var i = 0; i < cekAngka().length; i++) {
    if (cekString(cekAngka()[i].toString(),inputUser)) {
        console.log(cekAngka()[i]);
    }
  }
}
