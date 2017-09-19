'use strict';

angular.module('ProUrban')
.controller('formapagoController', ['$scope', '$rootScope', '$location', 'localStorageService', 'FormapagoService',
	function($scope, $rootScope, $location, localStorageService, FormapagoService) {

	// 1: insertar
        $rootScope.proceso = 1;
        
        $scope.getFormapagos = getFormapagos;
        $scope.insertarFormapago = insertarFormapago;
        $scope.modificarFormapago = modificarFormapago;
        $scope.eliminarFormapago = eliminarFormapago;
        $scope.buscarFormapago = buscarFormapago;
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
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}


        function getFormapagos(){
            FormapagoService.getFormapagos()
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
    
		function insertarFormapago() {
			if ($rootScope.proceso === 1) {
                FormapagoService.insertarFormapago($scope.descripcion, $scope.estado)
				.then(function(response) {
					// MANEJO DE RESPUESTA
					response = JSON.parse(response.respuesta);

					if (response.codigo === 1) {
						clearForm();
                               $scope.getFormapagos();
                    
					}

					alert(response.mensaje);
                    $location.path('/formapagos');
				}, function(err){
					// MANEJO DE ERRORES
				});
			} else if ($rootScope.proceso === 2) {
                               modificarFormapago();
				//modificarInmueble();
			}
		}
		//modificar Proveedor
                               
                            
		function modificarFormapago() {
			console.log($scope.id);
            FormapagoService.modificarFormapago($scope.id, $scope.descripcion, $scope.estado)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					clearForm();
                               $scope.getFormapagos();
					$scope.proceso = 1;	// 1: insertar
				}

				alert(response.mensaje);
				$location.path('/formapagos');

			}, function(err){
				// MANEJO DE ERRORES
			});
		}

		//eliminar Proveedor
		function eliminarFormapago(id) { 
             FormapagoService.eliminarFormapago(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
                               $scope.getFormapagos();
                   // $scope.getInmuebles();
				}

				alert(response.mensaje);
			}, function(err){ 
				// MANEJO DE ERRORES
			});
		}

		function buscarFormapago(id) {
            FormapagoService.buscarFormapago(id)
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
			$('#formapagoForm input[type="text"]').val("");
		}

        $scope.getFormapagos();


	}
]);