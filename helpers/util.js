'use strict';

var models = require('../models/index');
var anagram_dev = models.anagram_dev
var util = {};

function cekString(a, b){
	var newA = [];
	for(var i = 0 ; i < a.length ; i++){
		newA.push(a[i]);
	}
	newA = newA.sort();
	var tempB = [];
	var tempA = [];

	cekJumlahKata(b, tempB);

	cekJumlahKata(newA, tempA);

	var low = 0;
	var high = 0;
	var mid = 0;
	var count = 0;
	var final = [];

	for(var i = 0 ; i < b.length ; i ++){
		low = 0;
		high = newA.length-1;
		mid = Math.floor((low + high) / 2);

		while(low <= high){
			mid = Math.floor((low + high) / 2);
			if(b[i] < newA[mid]){
				high = mid - 1;
			}else if(b[i] > newA[mid]){
				low = mid + 1;
			}else{
				final.push(newA[mid]);
				newA.splice(mid, 1);
				break;
			}
		}
	}

	if(final.length != b.length){
		return false;
	}else{
		return true;
	}
}

function cekJumlahKata(b, temp){
	var current = 0;
	var count = 0;

	for(var i = 0 ; i < b.length ; i++){
		if(b[i] != current){
			if(count > 0 ){
				temp.push(count);
			}
			current = b[i];
			count = 1;
		}else{
			count++;
		}
	}
	if(count > 0){
		temp.push(count);
	}

	return temp;
}

util.anagrams = function(source, callback){
  let result = []
  anagram_dev.findAll().then((data) => {
    for(var i = 0 ; i < data.length ; i++){
      if(data[i].dataValues.words.length === source.length && cekString(source, data[i].dataValues.words)){
        result.push(data[i].dataValues.words)
      }
    }
    callback(source, result)
  })
}

module.exports = util;
