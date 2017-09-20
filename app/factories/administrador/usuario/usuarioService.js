angular.module('ProUrban')
.factory("UsuarioService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

		var service = {};

		service.getUsuarios = getUsuarios;
		service.getUsuariose = getUsuariose;
		service.insertarUsuario = insertarUsuario;
		service.modificarUsuario = modificarUsuario;
		service.eliminarUsuario = eliminarUsuario;
		service.buscarUsuario = buscarUsuario;
		service.activarUsuario = activarUsuario;


		return service;

		function getUsuarios() {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ListaUsuarios");
		}

		function insertarUsuario(cedula, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, telefono, correo, nombre_usuario, clave) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "InsertarUsuario",
				{ cedula: cedula, primer_nombre: primer_nombre, segundo_nombre: segundo_nombre, primer_apellido: primer_apellido, segundo_apellido: segundo_apellido, telefono: telefono, correo: correo, nombre_usuario: nombre_usuario, clave: clave});
		}

		function buscarUsuario(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "BuscarUsuario",
				{ id: id });
		}

		function modificarUsuario(id, cedula, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, telefono, correo, nombre_usuario, clave) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ModificarUsuario",
					{ id: id, cedula: cedula, primer_nombre: primer_nombre, segundo_nombre: segundo_nombre, primer_apellido: primer_apellido, segundo_apellido: segundo_apellido, telefono: telefono, correo: correo, nombre_usuario: nombre_usuario, clave: clave });
		}

		function eliminarUsuario(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "EliminarUsuario",
				{ id: id });
		}

		function getUsuariose() {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ListaUsuariose");
		}

		function activarUsuario(id) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "ActivarUsuario",
				{ id: id });
		}

		

}]);
