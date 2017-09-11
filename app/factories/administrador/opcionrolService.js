angular.module('ProUrban')
.factory("OpcionRolService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

		var service = {};

		service.getRoles = getRoles;
		service.getOpciones = getOpciones;
		service.insertarRol = insertarRol;
		service.buscarRol = buscarRol;
		service.modificarRol = modificarRol;
		service.eliminarRol = eliminarRol;
		service.listarOpciones = listarOpciones;


		return service;

		function listarOpciones(rol_id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ListaOpciones",
				{ rol_id: rol_id });
		}

		function getRoles() {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ListaRol");
		}

		function getOpciones() {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "getOpciones");
		}

		function insertarRol(descripcion) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "InsertarRol",
				{ descripcion: descripcion });
		}

		function buscarRol(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "BuscarRol",
				{ id: id });
		}

		function modificarRol(id, descripcion) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ModificarRol",
					{ id: id, descripcion: descripcion});
		}

		function eliminarRol(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "EliminarRol",
				{ id: id });
		}

}]);
