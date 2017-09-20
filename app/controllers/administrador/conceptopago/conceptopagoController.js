'use strict';

angular.module('ProUrban')
.controller('conceptopagoController', ['$scope', '$rootScope', '$location', 'localStorageService', 'ConceptopagoService',
	function($scope, $rootScope, $location, localStorageService, ConceptopagoService) {

	// 1: insertar
        $rootScope.proceso = 1;
        
        $scope.getConceptopagos = getConceptopagos;
        $scope.insertarConceptopago = insertarConceptopago;
        $scope.modificarConceptopago = modificarConceptopago;
        $scope.eliminarConceptopago = eliminarConceptopago;
        $scope.buscarConceptopago = buscarConceptopago;
        $scope.getConceptopagoe = getConceptopagoe;
        
        
        	function getConceptopagoe() {
			ConceptopagoService.getConceptopagoe()
			.then(function(response) {
				// MANEJO DE RESPUESTA
				console.log("Se ejecutó getConceptopagose");
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					$scope.data = response.datos;
				} else {
					alert(response.mensaje);
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}


        function getConceptopagos(){
            ConceptopagoService.getConceptopagos()
            .then(function(response) {
                
                response = JSON.parse(response.respuesta);
                
                if(response.codigo === 1){
                    $scope.data = response.datos;
                } else {
                    alert(response.mensaje);
                }
            }, function(err){
                
            });
        }
    
		function insertarConceptopago() {
			if ($rootScope.proceso === 1) {
                ConceptopagoService.insertarConceptopago($scope.descripcion, $scope.estado)
				.then(function(response) {
					// MANEJO DE RESPUESTA
					response = JSON.parse(response.respuesta);

					if (response.codigo === 1) {
						clearForm();
                               $scope.getConceptopagos();
                    
					}

					alert(response.mensaje);
                    $location.path('/conceptopagos');
				}, function(err){
					// MANEJO DE ERRORES
				});
			} else if ($rootScope.proceso === 2) {
                               modificarConceptopago();
				//modificarInmueble();
			}
		}
		//modificar Proveedor
                               
                            
		function modificarConceptopago() {
			console.log($scope.id);
            ConceptopagoService.modificarConceptopago($scope.id, $scope.descripcion, $scope.estado)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					clearForm();
                               $scope.getConceptopagos();
					$scope.proceso = 1;	// 1: insertar
				}

				alert(response.mensaje);
				$location.path('/conceptopagos');

			}, function(err){
				// MANEJO DE ERRORES
			});
		}

		//eliminar Proveedor
		function eliminarConceptopago(id) { 
             ConceptopagoService.eliminarConceptopago(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
                               $scope.getConceptopagos();
				}

				alert(response.mensaje);
			}, function(err){ 
				// MANEJO DE ERRORES
			});
		}

		function buscarConceptopago(id) {
            ConceptopagoService.buscarConceptopago(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);
                
                //$descripcion, $valor, $estado

				if (response.codigo === 1) {
					var data = response.datos[0];
                    $rootScope.id = data.id;
                    $rootScope.descripcion = data.descripcion;
                    $rootScope.estado = data.estado;
					$rootScope.proceso = 2;	// 2: editar
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}

		//	Limpia los inputs de tipo text del formulario
		function clearForm() {
			$('#conceptopagoForm input[type="text"]').val("");
		}

        $scope.getConceptopagos();


	}
]);