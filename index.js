'use strict';

var random = {};

// bool
random.bool    = require('random-bool');
random.boolean = random.bool;


// string
random.char = require('random-char');
require('./lib/string')(random);


// number
random.int     = require('random-integral');
random.natural = require('random-natural');
random.float   = require('random-decimal');
random.binary  = require('random-binary');
random.octal   = require('random-octal');
random.hex     = require('random-hexadecimal');

// dx
require('./lib/dx')(random);

// array
random.pickOne  = require('pick-item');
random.pickSome = require('pick-items');
random.shuffle  = require('shuffle-arr');
random.index    = require('random-index');


// datetime
random.date = require('random-datetime');


// form
random.uuid     = require('random-uuid');
random.id       = require('random-identity');
random.lang     = require('random-lang');
random.language = random.lang;
random.zip      = require('random-zipcode');
random.zipcode  = random.zip;
random.mobile   = require('random-mobile');


// network
random.tld    = require('random-tld');
random.domain = require('random-domains');
random.email  = require('random-email');
random.url    = require('random-uri');
random.ipv4   = require('random-ipv4');
random.ipv6   = require('random-ipv6');


// names
require('./lib/names')(random);


// article
random.world     = require('random-lorem');
random.sentence  = require('random-sentence');
random.title     = require('random-title');
random.paragraph = require('random-paragraph');


// color
random.color = require('random-color');


module.exports = random;
