'use strict';

angular.module('ProUrban')
.controller('reservaController', ['$scope', '$rootScope', '$location', 'localStorageService', 'ReservaService',
	function($scope, $rootScope, $location, localStorageService, ReservaService) {
		
        $scope.getReserva = getReserva;
        $scope.getArea = getArea;
        $scope.CancelarPreReserva = CancelarPreReserva;
        $scope.proceso = 1;	// 1: insertar
        $scope.guardarHora = guardarHora;
        $scope.insertarHoraMantenimiento = insertarHoraMantenimiento;
        $scope.eliminacionAutomatica = eliminacionAutomatica;
        $scope.pagarReserva = pagarReserva;

		function getReserva() {
			ReservaService.getReserva()
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
        function getArea() {
			ReservaService.getArea()
			.then(function(response) {
				// MANEJO DE RESPUESTA

				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					$scope.datas = response.datos;
				} else {
					alert(response.mensaje);
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}
        
  
        function CancelarPreReserva(id) {
            console.log(id);
			ReservaService.CancelarPreReserva(id)
			.then(function(response) {
				// MANEJO DE RESPUESTA
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					$scope.getReserva();
				}

				alert(response.mensaje);
			}, function(err){
				// MANEJO DE ERRORES
			});
		}
        

        function eliminacionAutomatica(valor) {
            console.log(valor);
			ReservaService.eliminacionAutomatica(valor)
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
        ////////////////////////////////////////////
        
        ///////////////////////////////////////////
        function insertarHoraMantenimiento() {
            console.log("llego");
			if ($scope.proceso === 1) {
				ReservaService.insertarHoraMantenimiento( $scope.fecha_inicio, $scope.fecha_fin ,$scope.desde, $scope.hasta, $scope.area)
				.then(function(response) {
                    console.log($scope.fecha_inicio);
                    
					// MANEJO DE RESPUESTA
					response = JSON.parse(response.respuesta);

					if (response.codigo === 1) {
						//clearForm();
						//$scope.getProveedores();
                        $scope.data = response.datos;
					}

					alert(response.mensaje);
				}, function(err){
					// MANEJO DE ERRORES
				});
			} else if ($scope.proceso === 2) {
				//modificarProveedor();
			}
		}

        function guardarHora() {
			if ($scope.proceso === 1) {
				ReservaService.guardarHora( $scope.valor)
				.then(function(response) {
                    
					// MANEJO DE RESPUESTA
					response = JSON.parse(response.respuesta);

					if (response.codigo === 1) {
						//clearForm();
						//$scope.getProveedores();
                        $scope.data = response.datos;
					}

					alert(response.mensaje);
				}, function(err){
					// MANEJO DE ERRORES
				});
			} else if ($scope.proceso === 2) {
				//modificarProveedor();
			}
		}

		$scope.buscarPreReserva = function(id) {
			ReservaService.buscarPreReserva(id)
			.then(function(response) {
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					var data = response.datos[0];
					var conceptopago = 4;

					FacturaService.init(data.id, conceptoPago);
					$location.path('factura');
				} else {
					alert(response.mensaje);
				}
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}

		function pagarReserva(id) {
			ReservaService.pagarReserva(id)
			.then(function(response) {
				response = JSON.parse(response.respuesta);

				if (response.codigo === 1) {
					$scope.getReserva();
				}

				alert(response.mensaje);
				$location.path("/reserva");
			}, function(err) {
				// MANEJO DE ERRORES
			});
		}

        $scope.getReserva();
        $scope.getArea();
	}   
                                                                                                
]); 