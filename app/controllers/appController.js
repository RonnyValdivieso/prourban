'use strict';

angular.module('ProUrban')
.controller('appController', ['$scope', '$location', 'AuthenticationService', 'localStorageService',
	function($scope, $location, AuthenticationService, localStorageService) {
		$scope.init = init;
		$scope.logout = logout;

		function init() {
			if (!AuthenticationService.isLoggedIn()) {
		    	$location.path('/login');
		    } else {
		    	var data = AuthenticationService.getCredentials();
		    	var data_modulo = AuthenticationService.getModulo();
		    	var data_opcion = AuthenticationService.getOpcion();
		    	AuthenticationService.setCredentials(data);
		    	AuthenticationService.setModulo(data_modulo);
		    	AuthenticationService.setOpcion(data_opcion);
		    }
		}

		function logout() {
			localStorageService.clearAll();
			if (!AuthenticationService.isLoggedIn()) {
				$location.path('/login');
			} else {
				//console.log('SI');
		    	$location.path('/');
		    }
		}

		$scope.init();
	}
]);