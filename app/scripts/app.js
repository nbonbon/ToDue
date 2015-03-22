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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
