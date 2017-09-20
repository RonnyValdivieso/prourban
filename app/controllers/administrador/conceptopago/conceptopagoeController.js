'use strict';

angular.module('ProUrban')
.controller('conceptopagoeController', ['$scope', '$rootScope', '$location', 'localStorageService', 'ConceptopagoService',
	function($scope, $rootScope, $location, localStorageService, ConceptopagoService) {

	// 1: insertar
        $scope.proceso = 1;
        
        $scope.activarConceptopago = activarConceptopago;
		$scope.getConceptopagose = getConceptopagose;
        


        function getConceptopagose() {
			ConceptopagoService.getConceptopagose()
			.then(function(response) {
				// MANEJO DE RESPUESTA
				console.log("Se ejecutó getConceptopagose");
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					$scope.data = response.datos;
				} else {
					alert(response.mensaje);
					$location.path('/conceptopagos');
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}



				//eliminar Usuario
		function activarConceptopago(id) {
			ConceptopagoService.activarConceptopago(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					$scope.getConceptopagose();
				}

				alert(response.mensaje);
			}, function(err){
				// MANEJO DE ERRORES
			});
		}




		//	Limpia los inputs de tipo text del formulario
		function clearForm() {
			$('#conceptopagoForm input[type="text"]').val("");
		}

        $scope.getConceptopagose();


	}
]);