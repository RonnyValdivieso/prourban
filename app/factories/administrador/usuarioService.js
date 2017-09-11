angular.module('ProUrban')
.factory("UsuarioService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

		var service = {};

		service.getUsuarios = getUsuarios;
		service.getRol = getRol;
		service.getPersona = getPersona;
		service.insertarUsuario = insertarUsuario;
		service.modificarUsuario = modificarUsuario;
		service.eliminarUsuario = eliminarUsuario;
		service.buscarUsuario = buscarUsuario;


		return service;

		function getUsuarios() {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ListaUsuario");
		}

		function getRol() {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ListaRol");
		}

		function getPersona() {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ListaPersona");
		}

		function insertarUsuario(nombre_usuario, clave, persona_id,rol_id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "InsertarUsuario",
				{ nombre_usuario: nombre_usuario, clave: clave, persona_id: persona_id , rol_id: rol_id});
		}

		function buscarUsuario(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "BuscarUsuario",
				{ id: id });
		}

		function modificarUsuario(id, nombre_usuario, clave,persona_id, rol_id ) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ModificarUsuario",
					{ id: id, nombre_usuario: nombre_usuario, clave: clave, persona_id: persona_id , rol_id: rol_id });
		}

		function eliminarUsuario(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "EliminarUsuario",
				{ id: id });
		}

}]);
