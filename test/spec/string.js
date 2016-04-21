'use strict';

var expect = require('chai').expect;


describe('string: ', function () {

  var random = require('../../');

  it('common', function () {

    expect(random.string()).to.be.a('string');
    expect(random.string('abc')).to.be.match(/^[abc]+$/);
    expect(random.string(10)).to.have.length(10);
    expect(random.string('abc', 10))
      .to.have.length(10)
      .and
      .to.be.match(/^[abc]+$/);

    //expect(random.string({
    //  length: 8
    //})).to.have.length(8);
    //
    //expect(random.string({
    //  length: 100
    //})).to.have.length(10);
    //
    //expect(random.string({
    //  length: '-10'
    //})).to.have.length(2);
    //
    //expect(random.string({
    //  min: 4,
    //  max: 8
    //}).length).to.be.within(4, 8);

  });

});
