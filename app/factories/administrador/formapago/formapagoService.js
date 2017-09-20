angular.module('ProUrban')
.factory("FormapagoService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

        var service = {};
        
        service.getFormapagos = getFormapagos;
        service.getFormapagose = getFormapagose;
        service.insertarFormapago = insertarFormapago;
        service.modificarFormapago = modificarFormapago;
        service.eliminarFormapago = eliminarFormapago;
        service.buscarFormapago = buscarFormapago;
		service.activarFormapago = activarFormapago;


        
        return service;
        
        function getFormapagos(){
            return $soap.post(AppConfig.apiUrl, "ListaFormapagos");
        }

        function getFormapagose() {
        	console.log("Entro a getFormapagose")
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
		return $soap.post(AppConfig.apiUrl, "ListaFormapagose");
		}

		function insertarFormapago(descripcion, estado){
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "InsertarFormapago",
				{ descripcion: descripcion, estado: estado });
		}
        

		function buscarFormapago(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "BuscarFormapago",
				{ id: id });
		}

		function modificarFormapago(id, descripcion, estado) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ModificarFormapago",
                              { id: id, descripcion: descripcion, estado: estado });
		}

		function eliminarFormapago(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "EliminarFormapago",
				{ id: id });
		}

		function activarFormapago(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ActivarFormapago",
				{ id: id });
		}



}]);