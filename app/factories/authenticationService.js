angular.module('ProUrban')
.factory("AuthenticationService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {
		console.log(AppConfig);
		var service = {};

		service.login = login;
		service.setCredentials = setCredentials;
		service.setModulo = setModulo;
		service.setOpcion = setOpcion;
		service.getCredentials = getCredentials;
		service.getModulo = getModulo;
		service.getOpcion = getOpcion;
		service.isLoggedIn = isLoggedIn;

		return service;

		//	Recibe los parámetros del formulario de login
		function login(usuario, clave) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl,"Autenticacion",
				{ usuario: usuario, clave: clave });
		}

		//	Setea los datos del usuario en localStorage para controlar la sesión,
		//	y en rootScope para poder usar la información en cualquier vista
		function setCredentials(data) {
			localStorageService.set('usuario', data);
			$rootScope.usuario = data.nombre_usuario;
			$rootScope.nombre = fullName(data.primer_nombre, data.primer_apellido);
		}

		function setOpcion(opc) {
			localStorageService.set('opcion', opc);
			$rootScope.opcion = opc;
		}

		function setModulo(modu) {
			localStorageService.set('modulo', modu);
			$rootScope.modulo = modu;
		}

		//	Consulta la información guardada en localStorage
		function getCredentials(usuario, clave) {
			return localStorageService.get('usuario');
		}

		function getModulo(modu) {
			return localStorageService.get('modulo');
		}

		function getOpcion(opc) {
			return localStorageService.get('opcion');
		}

		//	Verifica si hay información (de usuario) en localStorage
		function isLoggedIn() {
			if (localStorageService.length() > 0) {
				return true;
			} else { return false; }
	    }

	    function fullName(nombre, apellido) {
	    	return nombre + " " + apellido;
	    }

	    function isEmpty(obj) {
	    	return jQuery.isEmptyObject(obj);
	    }
}]);