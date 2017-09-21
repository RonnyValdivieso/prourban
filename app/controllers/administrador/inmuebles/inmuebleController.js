'use strict';

angular.module('ProUrban')
.controller('inmuebleController', ['$scope', '$rootScope', '$location', 'localStorageService', 'InmuebleService', 'UsuarioService',
	function($scope, $rootScope, $location, localStorageService, InmuebleService, UsuarioService) {

		$scope.proceso = localStorageService.get("proceso");	// 1: insertar
        
        $scope.getInmuebles = getInmuebles;
        $scope.insertarInmueble = insertarInmueble;
        $scope.modificarInmueble = modificarInmueble;
        $scope.eliminarInmueble = eliminarInmueble;
        $scope.buscarInmueble = buscarInmueble;
        
        
        function getInmuebles(){
            InmuebleService.getInmuebles()
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

		//	Insertar Inmueble
        function insertarInmueble() {
        	$scope.proceso = localStorageService.get("proceso");	// 1: insertar
			var parametros = {
                manzana: $scope.manzana,
                numero_villa: $scope.numero_villa,
                numero_pisos: $scope.numero_pisos,
                numero_cuartos: $scope.numero_cuartos,
                numero_banios: $scope.numero_banios,
                usuario_id: $scope.usuario.id
			};

			if ($scope.proceso === 1) {
                InmuebleService.insertarInmueble(parametros)
				.then(function(response) {
					// MANEJO DE RESPUESTA
					response = JSON.parse(response.respuesta);

					if (response.codigo === 1) {
						clearForm();
                        $scope.getInmuebles;
					}

					alert(response.mensaje);
                    $location.path('/inmuebles');
				}, function(err){
					// MANEJO DE ERRORES
				});
			} else if ($rootScope.proceso === 2) {
                modificarInmueble();
			}
		}
        
        
		//modificar Proveedor
		function modificarInmueble() {
			var parametros = {
                id: id,
                manzana: parametros.manzana,
                numero_villa: parametros.numero_villa,
                numero_pisos: parametros.numero_pisos,
                numero_cuartos: parametros.numero_cuartos,
                numero_banios: parametros.numero_banios,
                usuario_id: parametros.usuario_id.id
            };

            InmuebleService.modificarInmueble(parametros)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					clearForm();
                    $scope.getInmuebles();
					$scope.proceso = 1;	// 1: insertar
					localStorageService.set("proceso", $scope.proceso);
				}

				alert(response.mensaje);
                $location.path('/inmuebles');
			}, function(err){
				// MANEJO DE ERRORES
			});
		}

		//eliminar Proveedor
		function eliminarInmueble(id) {
            InmuebleService.eliminarInmueble(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
                    $scope.getInmuebles();
				}

				alert(response.mensaje);
			}, function(err){ 
				// MANEJO DE ERRORES
			});
		}

		function buscarInmueble(id) {
			InmuebleService.buscarInmueble(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					var data = response.datos[0];
                    $rootScope.id = data.id;
                    $rootScope.manzana = data.manzana;
                    $rootScope.numero_villa = data.numero_villa;
                    $rootScope.numero_pisos = data.numero_pisos;
                    $rootScope.numero_cuartos = data.numero_cuartos;
                    $rootScope.numero_banios = data.numero_banios;
                    $rootScope.usuario = {
                        id: data.usuario_id,
                        name: data.nombre_usuario
                    };
					$scope.proceso = 2;	// 2: editar
					localStorageService.set("proceso", $scope.proceso);
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}

		$scope.goTo = function(url) {
			clearForm();
			$location.path(url);
		}

		//	Limpia los inputs de tipo text del formulario
		function clearForm() {
			$rootScope.id = "";
            $rootScope.manzana = "";
            $rootScope.numero_villa = "";
            $rootScope.numero_pisos = "";
            $rootScope.numero_cuartos = "";
            $rootScope.numero_banios = "";
			$scope.proceso = 1;	// 1: insertar
			localStorageService.set("proceso", $scope.proceso);
			$('#inmuebleForm input[type="text"]').val("");
		}

        $scope.getInmuebles();
        UsuarioService.getUsuarios()
		.then(function(response) {
            $rootScope.usuarios = JSON.parse(response.respuesta).datos;
			$rootScope.usuario = {
				id: "-1",
				name: "Seleccione una opción"
			};
		});

	}
]);