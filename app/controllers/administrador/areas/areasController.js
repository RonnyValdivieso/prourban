'use strict';

angular.module('ProUrban')
.controller('areasController', ['$scope', '$rootScope', '$location', 'localStorageService', 'AreaService',
	function($scope, $rootScope, $location, localStorageService, AreaService) {

	// 1: insertar
        $scope.proceso = 1;
        
        $scope.cambiarEstadoArea = cambiarEstadoArea;
        $scope.getListaAreasInactivas = getListaAreasInactivas;
        

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
       
        function cambiarEstadoArea(id) {
            AreaService.cambiarEstadoArea(id)
            .then(function(response) {
                response = JSON.parse(response.respuesta);
                
                if (response.codigo === 1) {
                    $scope.getListaAreasInactivas();
                }
                
                alert(response.mensaje);
                $location.path('/areas');
            }, function(err){
                
            });
        }


		//	Limpia los inputs de tipo text del formulario
		function clearForm() {
			$('#areaForm input[type="text"]').val("");
		}

        $scope.getListaAreasInactivas();


	}
]);
