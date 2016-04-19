# random-utility

> Javascript utilities for generating random data.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-utility/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-utility/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-utility)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-utility/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-utility)


## Install

```
$ npm install --save random-utility
```

## Usage

```js
var random = require('random-utility');

random.int();
// => 9527

random.char();
// => 'G'

```

## API

| Method | Description  | Document |
|:-------|:-------------|:--------:|
| int([min, max])  | Generate a random integer.  | [Link](https://github.com/mock-end/random-integral#random-integral)  |
| natural([min, max])  | Generate a random [natural number](https://en.wikipedia.org/wiki/Natural_number).  | [Link](https://github.com/mock-end/random-natural#random-natural)  |
| float([min, max, precision])  | Generate a random float.  | [Link](https://github.com/mock-end/random-decimal#random-decimal)  |
| bool([seed1, seed2, ref])  | Generate a random boolean (true/false). | [Link](https://github.com/mock-end/random-bool#random-bool)  |
| char([pool])  | Generate a random character. | [Link](https://github.com/mock-end/random-char#random-char)  |
| binary() | | [Link]() |
| octal() | | [Link]() |
| hex() | | [Link]() |
| dx() | | [Link]() |
| pickOne() | | [Link]() |
| pickSome() | | [Link]() |
| shuffle() | | [Link]() |
| index() | | [Link]() |
| pickKey() | | [Link]() |
| pickKeys() | | [Link]() |
| pickProp() | | [Link]() |
| pickProps() | | [Link]() |
| date() | | [Link]() |
| color() | | [Link]() |
| uuid() | | [Link]() |
| id() | | [Link]() |
| lang() | | [Link]() |
| zipcode() | | [Link]() |
| mobile() | | [Link]() |
| tld() | | [Link]() |
| domain() | | [Link]() |
| email() | | [Link]() |
| url() | | [Link]() |
| ipv4() | | [Link]() |
| ipv6 | | [Link]() |
| maleFirstName() | | [Link]() |
| femaleFirstName() | | [Link]() |
| lastName() | | [Link]() |
| name() | | [Link]() |
| world() | | [Link]() |
| sentence() | | [Link]() |
| title() | | [Link]() |
| paragraph() | | [Link]() |


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-utility/issues/new).
