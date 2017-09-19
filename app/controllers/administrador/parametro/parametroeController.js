'use strict';

angular.module('ProUrban')
.controller('parametroeController', ['$scope', '$rootScope', '$location', 'localStorageService', 'ParametroService',
	function($scope, $rootScope, $location, localStorageService, ParametroService) {

	// 1: insertar
        $scope.proceso = 1;
        
        $scope.activarParametro = activarParametro;
		$scope.getParametrose = getParametrose;
        


        function getParametrose() {
			ParametroService.getParametrose()
			.then(function(response) {
				// MANEJO DE RESPUESTA
				console.log("Se ejecutó getParametrose");
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					$scope.data = response.datos;
				} else {
					alert(response.mensaje);
					$location.path('/parametros');
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}



				//eliminar Usuario
		function activarParametro(id) {
			ParametroService.activarParametro(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					$scope.getParametrose();
				}

				alert(response.mensaje);
			}, function(err){
				// MANEJO DE ERRORES
			});
		}




		//	Limpia los inputs de tipo text del formulario
		function clearForm() {
			$('#parametroForm input[type="text"]').val("");
		}

        $scope.getParametrose();


	}
]);