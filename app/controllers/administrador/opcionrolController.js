'use strict';

angular.module('ProUrban')
.controller('opcionrolController', ['$scope', '$rootScope', '$location', 'localStorageService', 'OpcionRolService',
	function($scope, $rootScope, $location, localStorageService, OpcionRolService) {

		$scope.proceso = 1;	// 1: insertar

		$scope.getRoles = getRoles;
		$scope.getOpciones = getOpciones;
		$scope.insertarRol = insertarRol;
		$scope.modificarRol = modificarRol;
		$scope.eliminarRol = eliminarRol;
		$scope.buscarRol = buscarRol;
		$scope.listarOpciones = listarOpciones;

		function getRoles() {
			OpcionRolService.getRoles()
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

		function getOpciones() {
			OpcionRolService.getOpciones()
			.then(function(response) {
				// MANEJO DE RESPUESTA

				response = JSON.parse(response.respuesta);
				//console.log(response);

				if (response.codigo === 1) {
					$scope.data_opciones = response.datos_opcionxrol;

				} else {
					alert(response.mensaje);
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}

		function nuevo(){
			clearForm();
		}

		//	Insertar Proveedor
		function insertarRol() {
			if ($scope.proceso === 1) {
				OpcionRolService.insertarRol($scope.descripcion)
				.then(function(response) {
					// MANEJO DE RESPUESTA
					response = JSON.parse(response.respuesta);

					if (response.codigo === 1) {
						clearForm();
						$scope.getRoles();
					}

					alert(response.mensaje);
				}, function(err){
					// MANEJO DE ERRORES
				});
			} else if ($scope.proceso === 2) {
				modificarRol();

			}
		}
		//modificar Proveedor
		function modificarRol() {
			console.log($scope.id);
			OpcionRolService.modificarRol($scope.id, $scope.descripcion)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					//clearForm();
					$scope.getRoles();
					$scope.proceso = 1;	// 1: insertar
				}

				alert(response.mensaje);
			}, function(err){
				// MANEJO DE ERRORES
			});
		}

		//eliminar Proveedor
		function eliminarRol(id) {
			OpcionRolService.eliminarRol(id)
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
			OpcionRolService.buscarRol(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					var data = response.datos[0];
					$scope.id = data.id;
					$scope.descripcion = data.descripcion;
					$scope.ruc = data.ruc;
					$scope.proceso = 2;	// 2: editar
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}

		function listarOpciones(id) {
			OpcionRolService.listarOpciones(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					var data_opcion_rol = response.datos_opcionxrol[0];
					var data_op_rol = response.datos_opcionxrol;
						$scope.opct = data_op_rol;
					//var data_opc = response.datos_opcionxrol[1];
					//$scope.opc_rol_id = data_opciones.id;
					$scope.opc_id = data_opcion_rol.opcion_id;
					$scope.rol_id = data_opcion_rol.rol_id;
					$scope.proceso = 2;	// 2: editar
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
		$scope.getOpciones();



	}
]);
