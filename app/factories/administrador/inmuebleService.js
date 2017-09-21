angular.module('ProUrban')
.factory("InmuebleService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

		var service = {};
        
    
        service.getInmuebles = getInmuebles;
        service.insertarInmueble = insertarInmueble;
        service.modificarInmueble = modificarInmueble;
        service.eliminarInmueble = eliminarInmueble;
        service.buscarInmueble = buscarInmueble;
        

return service;

		function getInmuebles() {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ListaInmuebles");
		}
        
        function insertarInmueble(parametros){
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "InsertarInmueble",
				parametros);
		}
        
		function buscarInmueble(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "BuscarInmueble",
				{ id: id });
		}

		/*function modificarInmueble(id, manzana, numero_villa, numero_pisos, numero_cuartos, numero_banios, usuario_id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ModificarInmueble",
					{ id: id, manzana: manzana, numero_villa: numero_villa, numero_pisos: numero_pisos, numero_cuartos: numero_cuartos, numero_banios: numero_banios, usuario_id: usuario_id });
		}*/
        
        function modificarInmueble(manzana, numero_villa, numero_pisos, numero_cuartos, numero_banios, usuario_id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ModificarInmueble",
                    { manzana: manzana, numero_villa: numero_villa, numero_pisos: numero_pisos, numero_cuartos: numero_cuartos, numero_banios: numero_banios, usuario_id: usuario_id });
		}

		function eliminarInmueble(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "EliminarInmueble",
				{ id: id });
		}

}]);