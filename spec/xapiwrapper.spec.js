/**
 * Setup:
 * $ npm install -g jasmine
 * $ cd ~/project_root
 * $ npm install jsdom # install -g fails on *NIX
 * $ git clone https://github.com/adlnet/xAPIWrapper.git
 * $ jasmine init
 * $ jasmine
 */
'use strict'

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
 * Testing ADL.XAPIWrapper
 */

var defaults = {};

describe('ADL.XAPIWrapper', function() {

    it('ADL instance should be defined.', function() {
        expect(ADL).toBeDefined();
    });
    it('ADL.XAPIWrapper should be defined.', function() {
        expect(ADL.XAPIWrapper).toBeDefined();
    });
    it('ADL.XAPIWrapper.base should be a uri (/http/).', function() {
        expect(ADL.XAPIWrapper.base).toMatch(/http/);
    });

});
