'use strict';

var clamp    = require('clamp');
var toInt    = require('to-integer');
var toString = require('to-str');


module.exports = function (random) {
  random.string = function (options) {

    options = options || {};

    var pool = options.pool ? toString(options.pool) : 'all';
    var length;

    if (options.length) {
      length = toInt(options.length);
    } else {
      var min = options.min ? toInt(options.min) : 2;
      var max = options.max ? toInt(options.max) : 10;

      min    = clamp(min, 2, 10);
      max    = clamp(max, 2, 10);
      length = random.natural(min, max);
    }

    length = clamp(length, 2, 10);

    var result = '';
    while (length--) {
      result += random.char(pool);
    }

    return result;
  };
};
