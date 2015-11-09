// Create app
var myApp = angular.module('myApp', ['ui.router']);

// Configure app
myApp.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'templates/landing.html',
        controller: 'HomeController',
    })
    .state('content', {
        url: '/content',
        templateUrl: 'templates/content.html',
        controller: 'ContentController',
    })
    .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html',
        controller: 'AboutController',
    })
})
// Landing page controller: define $scope.number as a number
.controller('HomeController', function($scope) {
    $scope.number = 3;
})

// About page controller: define $scope.about as a string
.controller('AboutController', function($scope) {
    $scope.about = 'dope string'
})

// Content controller: define $scope.url as an image
.controller('ContentController', function($scope) {
    $scope.url = 'http://img.pandawhale.com/post-29590-Ron-Swanson-meme-I-like-Ron-Du-pF0K.png'
})

