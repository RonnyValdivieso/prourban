'use strict';

angular.module('ProUrban')
.controller('formapagoeController', ['$scope', '$rootScope', '$location', 'localStorageService', 'FormapagoService',
	function($scope, $rootScope, $location, localStorageService, FormapagoService) {

	// 1: insertar
        $scope.proceso = 1;
        
        $scope.activarFormapago = activarFormapago;
		$scope.getFormapagose = getFormapagose;
        


        function getFormapagose() {
			FormapagoService.getFormapagose()
			.then(function(response) {
				// MANEJO DE RESPUESTA
				console.log("Se ejecutó getFormapagose");
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					$scope.data = response.datos;
				} else {
					alert(response.mensaje);
					$location.path('/formapagos');
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}



				//eliminar Usuario
		function activarFormapago(id) {
			FormapagoService.activarFormapago(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					$scope.getFormapagose();
				}

				alert(response.mensaje);
			}, function(err){
				// MANEJO DE ERRORES
			});
		}




		//	Limpia los inputs de tipo text del formulario
		function clearForm() {
			$('#formapagoForm input[type="text"]').val("");
		}

        $scope.getFormapagose();


	}
]);