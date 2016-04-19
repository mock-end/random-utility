'use strict';

var expect = require('chai').expect;


describe('dx: ', function () {

  var random = require('../../');

  it('common', function () {

    expect(random.d5()).to.be.a('number');
    expect(random.d5()).to.be.at.most(5);

  });

});
