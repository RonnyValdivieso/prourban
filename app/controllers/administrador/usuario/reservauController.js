'use strict';
angular.module('ProUrban')
.controller('reservauController', ['$scope', '$rootScope', '$location', 'localStorageService','AuthenticationService', 'ReservauService',
	function($scope, $rootScope, $location, localStorageService,AuthenticationService, ReservauService ) {
        
        $scope.somePlaceholder = 'Pre-reserva';
		$scope.proceso = 1;	// 1: insertar
		 $scope.getArea = getArea;
        $scope.insertarReserva = insertarReserva;
         $scope.controlarTareas = controlarTareas;
        // $scope.pruebaGuardar = pruebaGuardar;
         $scope.tareas = [];
        
        
        
      //////////////////////////////////////////////////////////////////////////////////
        var obj = AuthenticationService.getCredentials();
         //console.log("fuck"+obj);
        JSON.stringify(obj);
       // console.log(obj);
        
        var idUser =   obj[0]; 
         console.log(idUser);
        //////////////////////////////////////////////////////////////////////////////////
        
		function getArea() {
			ReservauService.getArea()
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
        ////////////////////////////////////////////////////////////////////////////////////
        function controlarTareas($scope) {

            //array que guarda las tareas
            //$scope.tareas = [];
           var json = angular.toJson( $scope.tareas );
           

            //Modelo que permite agregar tareas
            $scope.agregarTarea = function () {
            //Verificamos que el campo input no este vacio.
             if ($scope.fecha != null)
             // agregamos el elemento a nuestro array
                 $scope.tareas.push({texto: $scope.fecha,texto2: $scope.desde, texto3: $scope.hasta, texto4: $scope.area});
                 //$scope.tareas.push({texto2: $scope.nuevaTarea2});
                
             // Limpiamos el input
                 $scope.fecha = null;
                 $scope.desde = null;
                 $scope.hasta = null;
                 $scope.area = null;
                 console.log($scope.tareas);
                
                
            };
            
           

            // Modelo que permite eliminar tarea
            $scope.eliminarTarea = function (dato) {
                // Al modelo le hemos pasado "dato" que es el texto que contiene el elemento donde se hizo "click"
                // guardamos en la variable pos el index del array que tiene el texto que hemos recogido del elemento donde se hizo click
                var pos = $scope.tareas.indexOf(dato);
                // removemos del array tareas el indice que guarda al elemento donde se hizo click
                $scope.tareas.splice(pos);
            }
              

        }
         ////////////////////////////////////////////////////////////////////////////////////
         function insertarReserva(){
           
             
            console.log($scope.tareas);
             
            /*for (var i = 0; i < $scope.tareas.length; i+=1) {
              console.log("En el índice '" + i + "' hay este valor: " + $scope.tareas[i]);
            }
             */
              for (var i = 0; i < $scope.tareas.length; i+=1) {
                   var datos1 = $scope.tareas[i].texto;
                   var datos2 = $scope.tareas[i].texto2;
                   var datos3 = $scope.tareas[i].texto3;
                   var datos4 = $scope.tareas[i].texto4;
                   console.log(datos1);
                   console.log(datos2);
                   console.log(datos3);
                   console.log(datos4);
                  if ($scope.proceso === 1) {
                        ReservauService.insertarReserva( datos1, datos2, datos3, datos4,idUser).then(function(response) {
                             console.log(datos1);
                               console.log(datos2);
                               console.log(datos3);
                               console.log(datos4);
                             console.log(idUser);
                            response = JSON.parse(response.respuesta);
                            if (response.codigo === 1) {
                                $scope.data = response.datos;
                            }
                            alert(response.mensaje);
                        }, function(err){

                        });
                    } else if ($scope.proceso === 2) {

                    }
                   
                }
             
             console.log("llegopruebaguardar");
              $scope.tareas = []
             }
             
          
       /* function insertarReserva() {
            
            
			if ($scope.proceso === 1) {
				ReservauService.insertarReserva( $scope.fecha,$scope.desde, $scope.hasta, $scope.somePlaceholder,$scope.area)
				.then(function(response) {
                   
					response = JSON.parse(response.respuesta);

					if (response.codigo === 1) {
						
                        $scope.data = response.datos;
					}

					alert(response.mensaje);
				}, function(err){
					
				});
			} else if ($scope.proceso === 2) {
				
			}
		}*/
        
        $scope.getArea();
       
        
	}
                                
]); 