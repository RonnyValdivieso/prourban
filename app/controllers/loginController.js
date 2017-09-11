'use strict';

angular.module('ProUrban')
.controller('loginController', ['$scope', '$rootScope', '$location', 'localStorageService', 'AuthenticationService',
	function($scope, $rootScope, $location, localStorageService, AuthenticationService) {
		
		$scope.init = init;
		$scope.login = login;

		function init() {
			if (AuthenticationService.isLoggedIn()) {
		    	$location.path('/');
		    }
		}

		function login() {
			AuthenticationService.login($scope.usuario, $scope.clave)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta)
				//console.log(response);
				if (response.codigo === 1) {
					var data = response.datos[0];
					var modu = response.datos_modulo;
					var opc = response.datos_opcion;
					AuthenticationService.setCredentials(data);
					AuthenticationService.setModulo(modu);
					AuthenticationService.setOpcion(opc);
					$location.path('/');
				} else {
					alert(response.mensaje);
				}
			}, function(err){
				// MANEJO DE ERRORES
			});
		}

	    $scope.init();
	}
]);