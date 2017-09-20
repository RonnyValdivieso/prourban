'use strict';

angular.module('ProUrban')
.controller('areaController', ['$scope', '$rootScope', '$location', 'localStorageService', 'AreaService',
	function($scope, $rootScope, $location, localStorageService, AreaService) {

	// 1: insertar
        $scope.proceso = 1;
        
        $scope.getAreas = getAreas;
        $scope.getListaAreasInactivas = getListaAreasInactivas;
        $scope.insertarArea = insertarArea;
        $scope.modificarArea = modificarArea;
        $scope.eliminarArea = eliminarArea;
        $scope.buscarArea = buscarArea;
        
         function getListaAreasInactivas(){
            AreaService.getListaAreasInactivas()
            .then(function(response) {
                
                console.log("Se ejecuto");
                response = JSON.parse(response.respuesta);
                
                if(response.codigo === 1){
                    $scope.data = response.datos;
                } else {
                    alert(response.mensaje);
                    $location.path('/areas');
                }
            }, function(err){
                
            });
        }
        
        function getAreas(){
            AreaService.getAreas()
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
    
		function insertarArea() {
			if ($scope.proceso === 1) {
                AreaService.insertarArea($scope.descripcion, $scope.valor, $scope.estado)
				.then(function(response) {
					// MANEJO DE RESPUESTA
					response = JSON.parse(response.respuesta);

					if (response.codigo === 1) {
						clearForm();
                               $scope.getAreas();
                    
					}

					alert(response.mensaje);
                    $location.path('/areas');
				}, function(err){
					// MANEJO DE ERRORES
				});
			} else if ($rootScope.proceso === 2) {
                               modificarArea();
				//modificarInmueble();
			}
		}
		//modificar Proveedor
                               
                            
		function modificarArea() {
			console.log($scope.id);
            AreaService.modificarArea($scope.id, $scope.descripcion, $scope.valor, $scope.estado)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);
                //$location.path('/insertararea');

				if (response.codigo === 1) {
					clearForm();
                               $scope.getAreas();
					$scope.proceso = 1;	// 1: insertar
				}

				alert(response.mensaje);
                $location.path('/areas');
			}, function(err){
				// MANEJO DE ERRORES
			});
		}

		//eliminar Proveedor
		function eliminarArea(id) { 
             AreaService.eliminarArea(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
                               $scope.getAreas();
                   // $scope.getInmuebles();
				}

				alert(response.mensaje);
			}, function(err){ 
				// MANEJO DE ERRORES
			});
		}
        

		function buscarArea(id) {
            AreaService.buscarArea(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);
                
                //$descripcion, $valor, $estado

				if (response.codigo === 1) {
					var data = response.datos[0];
                    $rootScope.id = data.id;
                    $rootScope.descripcion = data.descripcion;
                    $rootScope.valor = data.valor;
                    $rootScope.estado = data.estado;
					$rootScope.proceso = 2;	// 2: editar
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}
        
		//	Limpia los inputs de tipo text del formulario
		function clearForm() {
			$('#areaForm input[type="text"]').val("");
		}

    
        $scope.getAreas();
        

	}
]);
