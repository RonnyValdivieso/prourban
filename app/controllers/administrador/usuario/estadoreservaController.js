'use strict';

angular.module('ProUrban')
.controller('estadoreservaController', ['$scope', '$rootScope', '$location', 'localStorageService','AuthenticationService', 'EstadoreservaService',
	function($scope, $rootScope, $location, localStorageService,AuthenticationService, EstadoreservaService) {
		
        $scope.getReserva = getReserva;
        $scope.CancelarPreReserva = CancelarPreReserva;
        
        
        
        ///////////////////////////////////
        var obj = AuthenticationService.getCredentials();
         //console.log("fuck"+obj);
        JSON.stringify(obj);
       // console.log(obj);
        
        var idUser =   obj[0]; 
         console.log(idUser);
        //////////////////////////////////////
		function getReserva() {
             
			EstadoreservaService.getReserva(idUser)
			.then(function(response) {
				// MANEJO DE RESPUESTA
                console.log("asdasd"+idUser);
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
			EstadoreservaService.CancelarPreReserva(id)
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