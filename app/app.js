const app = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngSanitize', 'com.2fdevs.videogular']);

app.config(['$locationProvider', function($locationProvider) {

    // if you don't wish to set base URL then use this
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

  }]);