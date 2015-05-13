'use strict';

/**
 * @ngdoc overview
 * @name toDueApp
 * @description
 * # toDueApp
 *
 * Main module of the application.
 */
angular
  .module('toDueApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'AboutController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
