'use strict';

angular.module('ProUrban')
.controller('reservaListaController', ['$scope', '$rootScope', '$location', 'localStorageService', 'ReservaListaService',
	function($scope, $rootScope, $location, localStorageService, ReservaListaService) {
		
        $scope.getReserva = getReserva;
        $scope.CancelarPreReserva = CancelarPreReserva;
        
		function getReserva() {
			ReservaListaService.getReserva()
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
        
  
        function CancelarPreReserva(id) {
            console.log(id);
			ReservaListaService.CancelarPreReserva(id)
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
        
        
        $scope.getReserva();
       
        
	}   
                                                                                                
]); 