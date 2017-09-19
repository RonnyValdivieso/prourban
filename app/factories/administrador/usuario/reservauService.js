angular.module('ProUrban')
.factory("ReservauService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

		var service = {};

		service.getReserva = getReserva;
        service.getArea = getArea;
        
        
		service.insertarReserva = insertarReserva;
		/*service.modificarProveedor = modificarProveedor;
		service.eliminarProveedor = eliminarProveedor;
		service.buscarProveedor = buscarProveedor;*/


		return service;

		function getReserva() {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "listaReserva");
		}
        
        function getArea() {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "listarAreas");
		}

		/*function insertarReserva(fecha, desde, hasta, estado, area) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
            console.log(fecha);
             console.log(desde);
             console.log(hasta);
             console.log(estado);
             console.log(area);
            
			return $soap.post(AppConfig.apiUrl, "insertarReserva",
				{ fecha: fecha, desde:desde , hasta:hasta, estado:estado ,area: area
                });
            
            
		}*/
        function insertarReserva(fecha, desde, hasta, area,id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
            console.log("ok"+fecha);
             console.log("ok"+desde);
             console.log("ok"+hasta);
            
             console.log("ok"+area);
              console.log("ok"+id);
            
			return $soap.post(AppConfig.apiUrl, "insertarReserva",
				{ fecha: fecha, desde:desde , hasta:hasta, area: area, id: id
                });
            
            
		}

		/*function buscarProveedor(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "BuscarProveedor",
				{ id: id });
		}*/

		/*function modificarProveedor(id, descripcion, ruc) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ModificarProveedor",
					{ id: id, descripcion: descripcion, ruc: ruc });
		}*/

		/*function eliminarProveedor(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "EliminarProveedor",
				{ id: id });
		}*/

}]);
