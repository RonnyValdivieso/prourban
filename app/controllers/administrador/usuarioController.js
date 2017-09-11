'use strict';

angular.module('ProUrban')
.controller('usuarioController', ['$scope', '$rootScope', '$location', 'localStorageService', 'UsuarioService',
	function($scope, $rootScope, $location, localStorageService, UsuarioService) {

		$scope.proceso = 1;	// 1: insertar

		$scope.getUsuarios = getUsuarios;
		$scope.getRol = getRol;
		$scope.getPersona = getPersona;
		$scope.insertarUsuario = insertarUsuario;
		$scope.modificarUsuario = modificarUsuario;
		$scope.eliminarUsuario = eliminarUsuario;
		$scope.buscarUsuario = buscarUsuario;

		function getUsuarios() {
			UsuarioService.getUsuarios()
			.then(function(response) {
				// MANEJO DE RESPUESTA

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

		function getRol() {
			UsuarioService.getRol()
			.then(function(response) {
				// MANEJO DE RESPUESTA

				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					$scope.data_rol = response.datos;
				} else {
					alert(response.mensaje);
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}

		function getPersona() {
			UsuarioService.getPersona()
			.then(function(response) {
				// MANEJO DE RESPUESTA

				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					$scope.data_persona = response.datos;
				} else {
					alert(response.mensaje);
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}

		//	Insertar Proveedor
		function insertarUsuario() {
			if ($rootScope.proceso === 1) {
				UsuarioService.insertarUsuario($scope.nombre_usuario, $scope.clave, $scope.persona_id,  $scope.rol_id)
				.then(function(response) {
					// MANEJO DE RESPUESTA
					response = JSON.parse(response.respuesta);

					if (response.codigo === 1) {
						clearForm();
						$scope.getUsuarios();
					}

					alert(response.mensaje);
				}, function(err){
					// MANEJO DE ERRORES
				});
			} else if ($rootScope.proceso === 2) {
				modificarUsuario();
			}
		}
		//modificar Proveedor
		function modificarUsuario() {
			console.log($scope.id);
			UsuarioService.modificarUsuario($scope.id, $scope.nombre_usuario, $scope.clave, $scope.persona_id,  $scope.rol_id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					clearForm();
					$scope.getUsuarios();
					$scope.proceso = 1;	// 1: insertar
				}

				alert(response.mensaje);
			}, function(err){
				// MANEJO DE ERRORES
			});
		}

		//eliminar Proveedor
		function eliminarUsuario(id) {
			UsuarioService.eliminarUsuario(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					$scope.getUsuarios();
				}

				alert(response.mensaje);
			}, function(err){
				// MANEJO DE ERRORES
			});
		}

		//buscar el Proveedor para luego ser modificado
		function buscarUsuario(id) {
			UsuarioService.buscarUsuario(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					var data = response.datos[0];
					$rootScope.id = data.id;
					$rootScope.nombre_usuario = data.nombre_usuario;
					$rootScope.clave = data.clave;
					$rootScope.persona_id = data.persona_id;
					$rootScope.rol_id = data.rol_id;
					$rootScope.proceso = 2;	// 2: editar
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}

		//	Limpia los inputs de tipo text del formulario
		function clearForm() {
			$('#usuarioForm input[type="text"]').val("");
			$('#usuarioForm input[type="password"]').val("");
		}

		$scope.getUsuarios();
		$scope.getRol();
		$scope.getPersona();

	}
]);
