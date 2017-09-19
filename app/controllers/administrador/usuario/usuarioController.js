'use strict';

angular.module('ProUrban')
.controller('usuarioController', ['$scope', '$rootScope', '$location', 'localStorageService', 'UsuarioService',
	function($scope, $rootScope, $location, localStorageService, UsuarioService) {

	// 1: insertar
        $rootScope.proceso = 1;
        
        $scope.getUsuarios = getUsuarios;
        $scope.insertarUsuario = insertarUsuario;
        $scope.modificarUsuario = modificarUsuario;
        $scope.eliminarUsuario = eliminarUsuario;
        $scope.buscarUsuario = buscarUsuario;
        $scope.getUsuariose = getUsuariose;
        
        
        function getUsuariose() {
			UsuarioService.getUsuariose()
			.then(function(response) {
				// MANEJO DE RESPUESTA
				console.log("Se ejecutó getUsuariose");
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


        function getUsuarios(){
            UsuarioService.getUsuarios()
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
    
		function insertarUsuario() {
			
			if ($scope.proceso === 1) {
				UsuarioService.insertarUsuario($scope.cedula, $scope.primer_nombre, $scope.segundo_nombre, $scope.primer_apellido, $scope.segundo_apellido, $scope.telefono, $scope.correo, $scope.nombre_usuario, $scope.clave)
				.then(function(response) {
					// MANEJO DE RESPUESTA
					response = JSON.parse(response.respuesta);

					if (response.codigo === 1) {
						clearForm();
						$scope.getUsuarios();
					}

					alert(response.mensaje);
					$location.path('/usuarios');
				}, function(err){
					// MANEJO DE ERRORES
				});
			} else if ($scope.proceso === 2) {
				modificarUsuario();
			}
		}
		//modificar Proveedor
                               
                            
		function modificarUsuario() {

			console.log('se ejecuto modificarUsuario');
			console.log('id: ' + $scope.id);
			console.log('nombre_usuario: ' + $scope.nombre_usuario);

            UsuarioService.modificarUsuario($scope.id, $scope.cedula, $scope.primer_nombre, $scope.segundo_nombre, $scope.primer_apellido, $scope.segundo_apellido, $scope.telefono, $scope.correo, $scope.nombre_usuario, $scope.clave)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					clearForm();
                     $scope.getUsuarios();
					$scope.proceso = 1;	// 1: insertar
				}

				alert(response.mensaje);
				$location.path('/usuarios');
				
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
               // $scope.getInmuebles();
			}
				alert(response.mensaje);
			}, function(err){ 
			// MANEJO DE ERRORES
				});
		}

		function buscarUsuario(id) {
            UsuarioService.buscarUsuario(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);
                
                //$descripcion, $valor, $estado

				if (response.codigo === 1) {
					var data = response.datos[0];
                    $rootScope.id = data.id;
                    $rootScope.cedula = data.cedula;
                    $rootScope.primer_nombre = data.primer_nombre;
                    $rootScope.segundo_nombre = data.segundo_nombre;
                    $rootScope.primer_apellido = data.primer_apellido;
                    $rootScope.segundo_apellido = data.segundo_apellido;
                    $rootScope.telefono = data.telefono;
                    $rootScope.correo = data.correo;
                    $rootScope.nombre_usuario = data.nombre_usuario;
                    $rootScope.clave = data.clave;
					$rootScope.proceso = 2;	// 2: editar
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}

		//	Limpia los inputs de tipo text del formulario
		function clearForm() {
			$('#usuarioForm input[type="text"]').val("");
		}

        $scope.getUsuarios();


	}
]);