const chai = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
global.browser = new BrowserHelpers()
global.expect = chai.expect;
global.RSP = require('./src/js/game_rsp')
// global.PC_Choice = require('./src/js/RSP')