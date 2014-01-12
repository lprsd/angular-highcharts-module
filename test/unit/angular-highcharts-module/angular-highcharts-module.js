'use strict';

// Set the jasmine fixture path
// jasmine.getFixtures().fixturesPath = 'base/';

describe('angular-highcharts-module', function() {

    var module;
    var dependencies;
    dependencies = [];

    var hasModule = function(module) {
        return dependencies.indexOf(module) >= 0;
    };

    beforeEach(function() {

        // Get module
        module = angular.module('angular-highcharts-module');
        dependencies = module.requires;
    });

    it('should load config module', function() {
        expect(hasModule('angular-highcharts-module.config')).toBeTruthy();
    });

    
    it('should load filters module', function() {
        expect(hasModule('angular-highcharts-module.filters')).toBeTruthy();
    });
    

    
    it('should load directives module', function() {
        expect(hasModule('angular-highcharts-module.directives')).toBeTruthy();
    });
    

    
    it('should load services module', function() {
        expect(hasModule('angular-highcharts-module.services')).toBeTruthy();
    });
    

});
