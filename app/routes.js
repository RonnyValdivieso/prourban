'use strict';

angular.module('ProUrban')
.config(['$routeProvider',
	function($routeProvider) {

		$routeProvider
		.when('/', {
			templateUrl: 'app/views/pages/administrador/index.html',
			controller: 'appController'
		})
		.when('/login', {
			templateUrl: 'app/views/pages/login.html',
			controller: 'loginController'
		})
		.when('/rol', {
			templateUrl: 'app/views/pages/administrador/rol.html',
			controller: 'rolController'
		})
		.when('/crearRol', {
			templateUrl: 'app/views/pages/administrador/crearRol.html',
			controller: 'rolController'
		})
		.when('/usuarios', {
			templateUrl: 'app/views/pages/administrador/usuarios.html',
			controller: 'usuarioController'
		})
		.when('/crearUsuario', {
			templateUrl: 'app/views/pages/administrador/crearUsuario.html',
			controller: 'usuarioController'
		})
		.when('/opcionrol', {
			templateUrl: 'app/views/pages/administrador/opcionrol.html',
			controller: 'opcionrolController'
		})


		//.when('/usuario', {
			//templateUrl: 'app/views/pages/administrador/usuario.html',
		//	controller: 'proveedorController'
		//})
		.when('/gastos', {
			templateUrl: 'app/views/pages/administrador/gastos.html'/*,
			controller: 'cuentaXpagarController'*/
		})
		.when('/proveedores', {
			templateUrl: 'app/views/pages/administrador/proveedores.html',
			controller: 'proveedorController'
		})
		.when('/404', {
			templateUrl: 'app/views/pages/page_404.html'
		})
		.otherwise({ redirectTo: '/404' });
	}
]);
