"use strict"

/*
 * Example Test,
 * just testing ADL.XAPIWrapper
 */

/**
 * Test-wide settings
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
