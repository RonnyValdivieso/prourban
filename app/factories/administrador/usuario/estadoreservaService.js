angular.module('ProUrban')
.factory("EstadoreservaService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

		var service = {};

		service.getReserva = getReserva;
        service.CancelarPreReserva = CancelarPreReserva;
        
        
		/*service.insertarProveedor = insertarProveedor;
		service.modificarProveedor = modificarProveedor;
		service.eliminarProveedor = eliminarProveedor;
		service.buscarProveedor = buscarProveedor;*/


		return service;

		function getReserva(id) {
            
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "estadoReserva",{ id: id });
		}
        function CancelarPreReserva(id) {
            
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "CancelarPreReserva",
				{ id: id });
		}

		/*function insertarProveedor(descripcion, ruc) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "InsertarProveedor",
				{ descripcion: descripcion, ruc: ruc });
		}*/

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

		

}]);
