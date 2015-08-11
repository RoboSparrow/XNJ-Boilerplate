'use strict';
/**
 * xAPIWrapper requires window object!
 * @see https://github.com/tmpvar/jsdom#creating-a-browser-like-window-object
 */
var jsdom = require('jsdom').jsdom;
global.document = jsdom('Jasmine: Base xAPIWrapper test');//faky fake!
global.window = document.parentWindow;

/**
 * include library files (is not a node module)
 */
var vm = require('vm');
var fs = require('fs');
vm.runInThisContext(fs.readFileSync('bower_components/xAPIwrapper/dist/xapiwrapper.min.js'));
global.ADL = window.ADL;
