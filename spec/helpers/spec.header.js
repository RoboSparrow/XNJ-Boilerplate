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

/**
 * Simulate user agent XMLHttpRequest Object
 * Note: there is currently (08/2015) no node module which simulates browser XHR complete:
 *      for example xhr.statusText will be null instead of `OK` for a successful request
 */
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

/**
 * some bootstrap config examples
 */
//jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
//ADL.XAPIWrapper.log.debug = false;

/**
 * path module for requiring local scripts
 */
var path = require('path');
var baseDir = path.resolve();
//console.log(baseDir, path.resolve(baseDir, 'support/myscript.js'));
