(function(angular) {
 	'use strict';
	angular.module('touhou', ['ngRoute'])

	 .controller('MainController', function($scope, $route, $routeParams, $location) {
	     $scope.$route = $route;
	     $scope.$location = $location;
	     $scope.$routeParams = $routeParams;
	 })

	 .controller('Login', function($scope, $routeParams) {
	     $scope.name = "Login";
	     $scope.params = $routeParams;
	 })

	/*.config(function($routeProvider, $locationProvider) {
	  $routeProvider
	   .when('/login', {
	    templateUrl: '/app/login/login.html',
	    controller: 'Login',
	    resolve: {
	      // I will cause a 1 second delay
	      delay: function($q, $timeout) {
	        var delay = $q.defer();
	        $timeout(delay.resolve, 1000);
	        return delay.promise;
	      }
	    }
	  });

	  // configure html5 to get links working on jsfiddle
	  $locationProvider.html5Mode(true);
	});*/
})(window.angular);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/