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
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'ui.router',
    'ui.bootstrap'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainController'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutController'
        })
        .state('contact', {
          url: '/contact',
          templateUrl: 'views/contact.html',
          controller: 'AboutController'
        })
  }]);
