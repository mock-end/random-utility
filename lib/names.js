'use strict';


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


module.exports = function (random) {
  random.maleFirstName = function () {
    return random.pickOne(maleFirstNames);
  };

  random.femaleFirstName = function () {
    return random.pickOne(femaleFirstNames);
  };

  random.lastName = function () {
    return random.pickOne(lastNames);
  };

  random.name = function (middleName) {
    return (random.bool() ? random.maleFirstName() : random.femaleFirstName()) + ' ' +
      (middleName ? middleName + ' ' : '') +
      random.lastName();
  };
};

