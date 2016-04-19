'use strict';


module.exports = function (random) {
  [5, 10, 20, 50, 100, 200, 500, 1000].forEach(function (len) {
    random['d' + len] = function () {
      return random.int(1, len);
    };
  });
};
