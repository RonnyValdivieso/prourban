'use strict';

angular.module('ProUrban')
.controller('rolController', ['$scope', '$rootScope', '$location', 'localStorageService', 'RolService',
	function($scope, $rootScope, $location, localStorageService, RolService) {

		$scope.proceso = 1;	// 1: insertar
		$rootScope.proceso = 1;	// 1: insertar

		$scope.getRoles = getRoles;
		$scope.insertarRol = insertarRol;
		$scope.modificarRol = modificarRol;
		$scope.eliminarRol = eliminarRol;
        $scope.activarRol = activarRol;
		$scope.buscarRol = buscarRol;
		$scope.nuevoRol = nuevoRol;

		window.onpoptate = function(){
			$rootScope.proceso = localStorageService.get("proceso");
			if ($rootScope.proceso == 2){
				clearForm();
			}
		}

		function getRoles() {
			RolService.getRoles()
			.then(function(response) {
				// MANEJO DE RESPUESTA

				response = JSON.parse(response.respuesta);
				//console.log(response);

				if (response.codigo === 1) {
					$scope.data = response.datos;

				} else {
					alert(response.mensaje);
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}

		function nuevoRol() {
			alert("Limpiando datos");
			  $rootScope.descripcion= null;

	    }

		//	Insertar Proveedor
		function insertarRol() {
			if ($rootScope.proceso === 1) {
				RolService.insertarRol($scope.descripcion)
				.then(function(response) {
					// MANEJO DE RESPUESTA
					response = JSON.parse(response.respuesta);

					if (response.codigo === 1) {
						clearForm();
						$scope.getRoles();
						window.location = "index.html#!/rol";
					}

					alert(response.mensaje);
				}, function(err){
					// MANEJO DE ERRORES
				});
			} else if ($rootScope.proceso === 2) {
				modificarRol();

			}
		}
		//modificar Proveedor
		function modificarRol() {
			console.log($scope.id);
			RolService.modificarRol($scope.id, $scope.descripcion)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					//clearForm();
					$scope.getRoles();
					$rootScope.proceso = 1;	// 1: insertar
				}

				alert(response.mensaje);
			}, function(err){
				// MANEJO DE ERRORES
			});
		}

		//eliminar Proveedor
		function eliminarRol(id) {
			RolService.eliminarRol(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					$scope.getRoles();
				}

				alert(response.mensaje);
			}, function(err){
				// MANEJO DE ERRORES
			});
		}
        
        //activar Proveedor
		function activarRol(id) {
			RolService.activarRol(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					$scope.getRoles();
				}

				alert(response.mensaje);
			}, function(err){
				// MANEJO DE ERRORES
			});
		}

		//buscar el Proveedor para luego ser modificado
		function buscarRol(id) {
			RolService.buscarRol(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					var data = response.datos[0];
					$rootScope.id = data.id;
					$rootScope.descripcion = data.descripcion;
					$rootScope.ruc = data.ruc;
					$rootScope.proceso = 2;	// 2: editar
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}

		//	Limpia los inputs de tipo text del formulario
		function clearForm() {
			$('#rolForm input[type="text"]').val("");
		}

		$scope.getRoles();

	}
]);
