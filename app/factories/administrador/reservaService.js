angular.module('ProUrban')
.factory("ReservaService", ['$soap', '$rootScope', 'localStorageService', 'AppConfig',
	function($soap, $rootScope, localStorageService, AppConfig) {

		var service = {};

		service.getReserva = getReserva;
		service.CancelarPreReserva = CancelarPreReserva;
		service.guardarHora = guardarHora;
		service.getArea = getArea;
		service.insertarHoraMantenimiento = insertarHoraMantenimiento;
		service.eliminacionAutomatica = eliminacionAutomatica;
		service.pagarReserva = pagarReserva;
		service.buscarPreReserva = buscarPreReserva;

		return service;

		function insertarHoraMantenimiento(fecha_inicio, fecha_fin, desde, hasta, area) {

			return $soap.post(AppConfig.apiUrl, "insertarHoraMantenimiento",
				{ fecha_inicio: fecha_inicio, fecha_fin: fecha_fin, desde:desde , hasta:hasta, area: area} );
		}
		function getReserva() {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "listaReserva");
		}
		function getArea() {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "listarAreas");
		}
		function buscarPreReserva(id) {
			//
			return $soap.post(AppConfig.apiUrl, "BuscarPreReserva",
				{ id: id });
		}
		function eliminacionAutomatica(valor) {
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			console.log("llego Service");
			return $soap.post(AppConfig.apiUrl, "eliminacionAutomatica",{ valor: valor });
		}

		function CancelarPreReserva(id) {
			
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "CancelarPreReserva",
				{ id: id });
		}
		function guardarHora(valor) {
			
			//	Realiza la llamada al servicio web enviando los parámetros
			//	en formato JSON
			return $soap.post(AppConfig.apiUrl, "guardarHora",
				{ valor: valor });
		}

		function pagarReserva(id) {
			//
			return $soap.post(AppConfig.apiUrl, "PagarReserva",
				{ id: id });
		}
	}
]);
