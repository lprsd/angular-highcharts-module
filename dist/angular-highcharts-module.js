(function(window, document) {

// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('angular-highcharts-module.config', [])
    .value('angular-highcharts-module.config', {
        debug: true
    });

// Modules
angular.module('angular-highcharts-module.directives', []);
angular.module('angular-highcharts-module.filters', []);
angular.module('angular-highcharts-module.services', []);
angular.module('angular-highcharts-module',
    [
        'angular-highcharts-module.config',
        'angular-highcharts-module.directives',
        'angular-highcharts-module.filters',
        'angular-highcharts-module.services'
    ]);
})(window, document);