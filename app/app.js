(function() {
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
	 });
})();

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/