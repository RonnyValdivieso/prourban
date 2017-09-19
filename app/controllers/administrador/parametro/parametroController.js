'use strict';

angular.module('ProUrban')
.controller('parametroController', ['$scope', '$rootScope', '$location', 'localStorageService', 'ParametroService',
	function($scope, $rootScope, $location, localStorageService, ParametroService) {

	// 1: insertar
        $rootScope.proceso = 1;
        
        $scope.getParametros = getParametros;
        $scope.insertarParametro = insertarParametro;
        $scope.modificarParametro = modificarParametro;
        $scope.eliminarParametro = eliminarParametro;
        $scope.buscarParametro = buscarParametro;
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
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}


        function getParametros(){
            ParametroService.getParametros()
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
    
		function insertarParametro() {
			if ($rootScope.proceso === 1) {
                ParametroService.insertarParametro($scope.descripcion, $scope.valor, $scope.estado)
				.then(function(response) {
					// MANEJO DE RESPUESTA
					response = JSON.parse(response.respuesta);

					if (response.codigo === 1) {
						clearForm();
                               $scope.getParametros();
                    
					}

					alert(response.mensaje);
                    $location.path('/parametros');
				}, function(err){
					// MANEJO DE ERRORES
				});
			} else if ($rootScope.proceso === 2) {
                               modificarParametro();
				//modificarInmueble();
			}
		}
		//modificar Proveedor
                               
                            
		function modificarParametro() {
			console.log($scope.id);
            ParametroService.modificarParametro($scope.id, $scope.descripcion, $scope.valor, $scope.estado)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					clearForm();
                               $scope.getParametros();
					$scope.proceso = 1;	// 1: insertar
				}

				alert(response.mensaje);
				$location.path('/parametros');

			}, function(err){
				// MANEJO DE ERRORES
			});
		}

		//eliminar Proveedor
		function eliminarParametro(id) { 
             ParametroService.eliminarParametro(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
                    $scope.getParametros();
                   // $scope.getInmuebles();
				}
				alert(response.mensaje);
			}, function(err){ 
				// MANEJO DE ERRORES
			});
		}

		function buscarParametro(id) {
            ParametroService.buscarParametro(id)
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
			$('#parametroForm input[type="text"]').val("");
		}

        $scope.getParametros();


	}
]);