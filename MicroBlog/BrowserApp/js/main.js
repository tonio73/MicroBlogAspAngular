/**
 * Microblog application main
 */

"use strict";

// Main module, to extend with submodules as needed
angular.module("MicroBlog", ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {

        // Create some default routes, to refine
        $routeProvider
        .when('/posts', {templateUrl: 'partials/posts.html', controller: 'postsCtrl'})
          .otherwise({ redirectTo: '/posts' }); // Default
    }])

    // Initial run function setting the version number
    .run(['$rootScope', function ($rootScope) {
       $rootScope.version = "0.0";
    }])

    // Example controller for the index of Posts, contains some preliminary test data to replace with data from the server
   .controller('postsCtrl', ['$scope', function ($scope) {
       $scope.posts = [{ title: 'Météo du jour', body: 'Soleil et nuage, un petit peu de pluie' },
           {title: 'Le Francs Suisse au niveau de l\'Euro', body: 'La BNS a décidé de ne plus maintenir ....'}
           ];
    }]);