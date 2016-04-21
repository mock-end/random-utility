'use strict';

var clamp    = require('clamp');
var toInt    = require('to-integer');
var toString = require('to-str');


module.exports = function (random) {

  random.string = function (pool, length) {

    var count = arguments.length;

    if (count === 0) {
      pool   = 'all';
      length = random.natural(2, 20);
    } else if (count === 1) {
      if (typeof pool === 'number') {
        length = pool;
        pool   = 'all';
      } else {
        pool   = toString(pool);
        length = random.natural(2, 20);
      }
    } else {
      pool   = toString(pool);
      length = toInt(length);
    }

    var result = '';
    while (length--) {
      result += random.char(pool);
    }

    return result;
  };
};
