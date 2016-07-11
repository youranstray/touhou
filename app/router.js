/**
 * router
 */
(function() {
	angular.module('touhou')
		.config(routeHelperProvider);

	function routeHelperProvider($routeProvider, $locationProvider) {
		$routeHelperProvider
			.when('/login/', {
				templateUrl: './login/login.html',
				controller: 'loginCtrl'
			})

			$locationProvider.html5Mode(true);
	}

})();

