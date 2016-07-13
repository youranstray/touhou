/**
 * router
 */
(function() {
	angular.module('touhou')
		.config(routeHelperProvider);

	function routeHelperProvider($routeProvider, $locationProvider) {
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
		
		/*$stateProvider
		 .state('main', {
		 	url: '/',
		 	controller: 'MainController',
		 	templateUrl: '/app/index.html'
		 })
		 .state('main.login', {
		 	url: '/login',
		 	controller: 'Login',
		 	templateUrl: '/app/login/login.html'
		 })*/


		// configure html5 to get links working on jsfiddle
		$locationProvider.html5Mode(true);
	}

})();

