'use strict';

var expect = require('chai').expect;

var maleFirstNames = ['James', 'John', 'Robert', 'Michael', 'William', 'David',
  'Richard', 'Charles', 'Joseph', 'Thomas', 'Christopher', 'Daniel', 'Paul',
  'Mark', 'Donald', 'George', 'Kenneth', 'Steven', 'Edward', 'Brian', 'Ronald',
  'Anthony', 'Kevin', 'Jason', 'Matthew', 'Gary', 'Timothy', 'Jose', 'Larry',
  'Jeffrey', 'Frank', 'Scott', 'Eric'];

var femaleFirstNames = ['Mary', 'Patricia', 'Linda', 'Barbara', 'Elizabeth',
  'Jennifer', 'Maria', 'Susan', 'Margaret', 'Dorothy', 'Lisa', 'Nancy', 'Karen',
  'Betty', 'Helen', 'Sandra', 'Donna', 'Carol', 'Ruth', 'Sharon', 'Michelle',
  'Laura', 'Sarah', 'Kimberly', 'Deborah', 'Jessica', 'Shirley', 'Cynthia',
  'Angela', 'Melissa', 'Brenda', 'Amy', 'Anna'];

var lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller',
  'Davis', 'Garcia', 'Rodriguez', 'Wilson', 'Martinez', 'Anderson', 'Taylor',
  'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White',
  'Lopez', 'Lee', 'Gonzalez', 'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker',
  'Perez', 'Hall', 'Young', 'Allen'];


describe('names: ', function () {

  var random = require('../../');

  it('common', function () {

    expect(random.maleFirstName()).to.be.a('string');
    expect(random.maleFirstName()).to.be.oneOf(maleFirstNames);

    expect(random.femaleFirstName()).to.be.a('string');
    expect(random.femaleFirstName()).to.be.oneOf(femaleFirstNames);

    expect(random.lastName()).to.be.a('string');
    expect(random.lastName()).to.be.oneOf(lastNames);

    expect(random.name()).to.be.a('string');
    expect(random.name('middle')).to.have.string('middle');
  });
});
