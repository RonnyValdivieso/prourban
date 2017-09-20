angular.module('ProUrban')
.factory("ParametroService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

        var service = {};
        
        service.getParametros = getParametros;
        service.getParametrose = getParametrose;
        service.insertarParametro = insertarParametro;
        service.modificarParametro = modificarParametro;
        service.eliminarParametro = eliminarParametro;
        service.buscarParametro = buscarParametro;
		service.activarParametro = activarParametro;


        
        return service;
        
        function getParametros(){
            return $soap.post(AppConfig.apiUrl, "ListaParametros");
        }

        function getParametrose() {
        	console.log("Entro a getParametrose")
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
		return $soap.post(AppConfig.apiUrl, "ListaParametrose");
		}

		function insertarParametro(descripcion, valor, estado){
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "InsertarParametro",
				{ descripcion: descripcion, valor: valor, estado: estado });
		}
        

		function buscarParametro(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "BuscarParametro",
				{ id: id });
		}

		function modificarParametro(id, descripcion, valor, estado) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ModificarParametro",
                              { id: id, descripcion: descripcion, valor: valor, estado: estado });
		}

		function eliminarParametro(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "EliminarParametro",
				{ id: id });
		}

		function activarParametro(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ActivarParametro",
				{ id: id});
		}



}]);