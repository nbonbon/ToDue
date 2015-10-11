'use strict';

angular
  .module('toDueApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'ui.router',
    'ui.bootstrap',
    'firebase'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

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
        .state('login', {
          url: '/login',
          templateUrl: 'views/login.html',
          controller: 'SessionController'
        })
        .state('register', {
          url: '/register',
          templateUrl: 'views/register.html',
          controller: 'SessionController'
        });

        $urlRouterProvider.otherwise('/');
  }]);
