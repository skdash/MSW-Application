var todoApp = angular.module('todoApp', ['ngRoute', 'ngStorage','ngAnimate', 'ui.bootstrap'])
todoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '/templates/todo.html',
      controller: 'HomeController'})
    .when('/initial', {
      templateUrl: '/templates/initial.html',
      controller: 'InitialController'})
    .when('/tabs', {
      templateUrl: '/templates/tabs.html',
      controller: 'TabController'})
    .when('/routemap', {
      templateUrl: '/templates/routemap.html',
      controller: 'RoutemapController'})
    .when('/input', {
      templateUrl: '/templates/input.html',
      controller: 'InputController'})

    .when('/collectionsystem', {
      templateUrl: '/templates/tabs.html',
      controller: 'TabController'})
    .when('/wastetransfer', {
      templateUrl: '/templates/tabs.html',
      controller: 'TabController'})
    .when('/treatment', {
      templateUrl: '/templates/tabs.html',
      controller: 'TabController'})
    .when('/disposal', {
      templateUrl: '/templates/tabs.html',
      controller: 'TabController'})

    .otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }])
