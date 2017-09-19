angular.module('ProUrban')
.factory("ConceptopagoService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

        var service = {};
        
        service.getConceptopagos = getConceptopagos;
        service.getConceptopagose = getConceptopagose;
        service.insertarConceptopago = insertarConceptopago;
        service.modificarConceptopago = modificarConceptopago;
        service.eliminarConceptopago = eliminarConceptopago;
        service.buscarConceptopago = buscarConceptopago;
		service.activarConceptopago = activarConceptopago;


        
        return service;
        
        function getConceptopagos(){
            return $soap.post(AppConfig.apiUrl, "ListaConceptopagos");
        }

        function getConceptopagose() {
        	console.log("Entro a getConceptopagose")
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
		return $soap.post(AppConfig.apiUrl, "ListaConceptopagose");
		}

		function insertarConceptopago(descripcion, estado){
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "InsertarConceptopago",
				{ descripcion: descripcion, estado: estado });
		}
        

		function buscarConceptopago(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "BuscarConceptopago",
				{ id: id });
		}

		function modificarConceptopago(id, descripcion, estado) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ModificarConceptopago",
                              { id: id, descripcion: descripcion, estado: estado });
		}

		function eliminarConceptopago(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "EliminarConceptopago",
				{ id: id });
		}

		function activarConceptopago(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ActivarConceptopago",
				{ id: id });
		}



}]);