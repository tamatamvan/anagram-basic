var express = require('express');
var router = express.Router();
let models = require('../models');
let word = models.word;
let helper = require('../helpers/util.js')
let Sequelize = require('sequelize');

//cek string
let cekString = (database,input) =>{
  var x = database.word.split('').sort()
  var y = input.split('').sort()
  var z = []
  for (var i = 0; i <y.length; i++) {
    for (var j = 0; j < x.length && i < y.length; j++) {
      if (x[j]===(y[i])) {
        z.push(x.splice(j,1).toString())
      }
    }
  }
  if (z.toString() === y.toString()) {
    return database
  }else {
    return false
  }
}



/* GET users listing. */
router.get('/', (req, res, next) => {
  word.findAll().then((data, err) => {
    res.render('index', { data, title: `Hasil anagram dari ${req.body.kata}` });
  })
});
//
router.post('/', (req, res, next) => {
  let kata = req.body.kata;
  let finalresult = [];
  word.findAll({
    where: Sequelize.where(Sequelize.fn('char_length', Sequelize.col('word')), kata.length)
  }).then((data, err) => {
    for (var i = 0; i < data.length; i++) {
      if (cekString(data[i],kata) != false) {
        finalresult.push(cekString(data[i],kata))
      }
      // console.log(finalresult[0]);
    }
    res.render('index', { data: finalresult , title: `Hasil anagram dari ${req.body.kata}`})
  })
})

/*get users by length */
module.exports = router;
