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

| Method                        | Description  | Document |
|:------------------------------|:-------------|:--------:|
| int([min, max])               | Generate a random integer.  | [Link](https://github.com/mock-end/random-integral#random-integral)  |
| natural([min, max])           | Generate a random [natural number](https://en.wikipedia.org/wiki/Natural_number).  | [Link](https://github.com/mock-end/random-natural#random-natural)  |
| float([min, max, precision])  | Generate a random float.  | [Link](https://github.com/mock-end/random-decimal#random-decimal)  |
| bool([seed1, seed2, ref])     | Generate a random boolean (true/false). | [Link](https://github.com/mock-end/random-bool#random-bool)  |
| char([pool])                  | Generate a random character. | [Link](https://github.com/mock-end/random-char#random-char)  |
| string([pool, length])        | Generate a random string. | [Link](https://github.com/mock-end/random-utility/blob/master/lib/string.js#L11)  |
| binary([bit])                 | Generate a random binary number. | [Link](https://github.com/mock-end/random-binary#random-binary) |
| octal([min, max])             | Generate a random octal. | [Link](https://github.com/mock-end/random-octal#random-octal) |
| hex([min, max])               | Generate a random hexadecimal number. | [Link](https://github.com/mock-end/random-hexadecimal#random-hexadecimal) |
| dx()                          | Generate a number between `1` and `x`,<br> where `x` is `5` `10`, `20`, `50`, `100`, `200`, `500` and `1000`. |  |
| pickOne(arr)                  | Randomly sampling a item from an array. | [Link](https://github.com/mock-end/pick-item#pick-item) |
| pickSome(arr[, options])      | Randomly sampling some items from an array. | [Link](https://github.com/mock-end/pick-items#pick-items) |
| shuffle(arr)                  | Randomize the order of the elements in array or array-like object. | [Link](https://github.com/mock-end/shuffle-arr#shuffle-arr) |
| index([max])                  | Generate a random array-like index. | [Link](https://github.com/mock-end/random-index#random-index) |
| pickKey(obj)                  | Randomly sampling a key from an object. | [Link](https://github.com/mock-end/pick-key#pick-key) |
| pickKeys(obj)                 | Randomly sampling some keys from an object. | [Link](https://github.com/mock-end/pick-keys#pick-keys) |
| pickProp(obj)                 | Randomly sampling a property from an object. | [Link](https://github.com/mock-end/pick-prop#pick-prop) |
| pickProps(obj)                | Randomly sampling some properties from an object. | [Link](https://github.com/mock-end/pick-props#pick-props) |
| date([min, max])              | Generate a random date. | [Link](https://github.com/mock-end/random-datetime#random-datetime) |
| color()                       | Generate a random color. | [Link](https://github.com/mock-end/random-color#random-color) |
| uuid([prefix])                | Generate a random uuid. | [Link](https://github.com/mock-end/random-uuid#random-uuid) |
| id([length])                  | Generate a random ID. | [Link](https://github.com/mock-end/random-identity#random-identity) |
| lang()                        | Return a random language name. | [Link](https://github.com/mock-end/random-lang#random-lang) |
| zipcode()                     | Generate a random chinese zipcode. | [Link](https://github.com/mock-end/random-zipcode#random-zipcode) |
| mobile()                      | Return a random Chinese mobile phone number. | [Link](https://github.com/mock-end/random-mobile#random-mobile) |
| tld()                         | Return a random tld. | [Link](https://github.com/mock-end/random-tld#random-tld) |
| domain([level, tld])          | Generate a random domain name. | [Link](https://github.com/mock-end/random-domains#random-domains) |
| email([domain])               | Generate a random email address. | [Link](https://github.com/mock-end/random-email#random-email) |
| url([protocol, query, hash])  | Generate a random url. | [Link](https://github.com/mock-end/random-uri#random-uri) |
| ipv4([schema, options])       | Generate a random ipv4 address. | [Link](https://github.com/mock-end/random-ipv4#random-ipv4) |
| ipv6([schema, options])       | Generate a random ipv6 address.| [Link](https://github.com/mock-end/random-ipv6#random-ipv6) |
| maleFirstName()               | Return a random male first-name. | |
| femaleFirstName()             | Return a random female first-name. | |
| lastName()                    | Return a random last-name. | |
| name([middleName])            | Return a random name. | |
| world([min, max])             | Generate a random world. | [Link](https://github.com/mock-end/random-lorem#random-lorem) |
| sentence([min, max])          | Generate a random sentence. | [Link](https://github.com/mock-end/random-sentence#random-sentence) |
| title([min, max])             | Generate a random title. | [Link](https://github.com/mock-end/random-title#random-title) |
| paragraph([min, max])         | Generate a random paragraph. | [Link](https://github.com/mock-end/random-paragraph#random-paragraph) |


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-utility/issues/new).
