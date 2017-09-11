angular.module('ProUrban')
.factory("RolService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

		var service = {};

		service.getRoles = getRoles;
		service.insertarRol = insertarRol;
		service.buscarRol = buscarRol;
		service.modificarRol = modificarRol;
		service.eliminarRol = eliminarRol;


		return service;

		function getRoles() {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ListaRol");
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
