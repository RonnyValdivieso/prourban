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
		.when('/gastos', {
			templateUrl: 'app/views/pages/administrador/gastos/gastos.html',
			controller: 'cuentaxpagarController'
		})
		.when('/form_gastos', {
			templateUrl: 'app/views/pages/administrador/gastos/form_gastos.html',
			controller: 'cuentaxpagarController'
		})
		.when('/proveedores', {
			templateUrl: 'app/views/pages/administrador/proveedores.html',
			controller: 'proveedorController'
		})
		.when('/deudas', {
			templateUrl: 'app/views/pages/administrador/deudas/deudas.html',
			controller: 'cuentaxcobrarController'
		})
		.when('/factura', {
			templateUrl: 'app/views/pages/administrador/factura.html',
			controller: 'facturaController'
		})
		.when('/reservas', {
			templateUrl: 'app/views/pages/administrador/reservas.html',
			controller: 'reservasController'
		})
        .when('/reserva', {
			templateUrl: 'app/views/pages/administrador/reserva.html',
			controller: 'reservaController'
		})
        .when('/reservarArea', {
			templateUrl: 'app/views/pages/administrador/usuario/reservarArea.html',
			controller: 'reservauController'
		})
        .when('/reservaLista', {
			templateUrl: 'app/views/pages/administrador/reservaLista.html',
			controller: 'reservaListaController'
		})
        .when('/estadoreserva', {
			templateUrl: 'app/views/pages/administrador/usuario/estadoreserva.html',
			controller: 'estadoreservaController'
		})
		.when('/cuentas', {
			templateUrl: 'app/views/pages/administrador/cuentas.html',
			controller: 'cuentasController'
		})
		.when('/asientoContable', {
			templateUrl: 'app/views/pages/administrador/asientoContable.html',
			controller: 'asientoController'
		})
		.when('/areas', {
			templateUrl: 'app/views/pages/administrador/areas.html',
			controller: 'areaController'
		})
		.when('/areasinactivas', {
			templateUrl: 'app/views/pages/administrador/areasinactivas.html',
			controller: 'areasController'
		})
		 .when('/insertararea', {
			templateUrl: 'app/views/pages/administrador/agregarareas.html',
			controller: 'areaController'
		})
		 .when('/modificararea', {
			templateUrl: 'app/views/pages/administrador/modificarareas.html',
			controller: 'areaController'
		})
		.when('/inmuebles', {
			templateUrl: 'app/views/pages/administrador/inmuebles.html',
			controller: 'inmuebleController'
		})
		.when('/insertarinmueble', {
			templateUrl: 'app/views/pages/administrador/agregarinmuebles.html',
			controller: 'inmuebleController'
		})
		 .when('/modificarinmueble', {
			templateUrl: 'app/views/pages/administrador/modificarinmueble.html',
			controller: 'inmuebleController'
		})
		 .when('/horariosmantenimiento', {
			templateUrl: 'app/views/pages/administrador/horariosmantenimiento.html',
			controller: 'horariomantenimientoController'
		})
		 .when('/insertarhorariomantenimiento', {
			templateUrl: 'app/views/pages/administrador/insertarhorariomantenimiento.html',
			controller: 'horariomantenimientoController'
		})
		 .when('/modificarhorariomantenimiento', {
			templateUrl: 'app/views/pages/administrador/modificarhorariomantenimiento.html',
			controller: 'horariomantenimientoController'
		})
		.when('/parametros', {
			templateUrl: 'app/views/pages/administrador/parametros.html',
			controller: 'parametroController'
		})
		.when('/parametrose', {
			templateUrl: 'app/views/pages/administrador/parametrose.html',
			controller: 'parametroeController'
		})
		.when('/insertarparametro', {
			templateUrl: 'app/views/pages/administrador/agregarparametro.html',
			controller: 'parametroController'
		})
		.when('/editarparametro', {
			templateUrl: 'app/views/pages/administrador/editarparametro.html',
			controller: 'parametroController'
		})
		.when('/usuarios', {
			templateUrl: 'app/views/pages/administrador/usuario/usuarios.html',
			controller: 'usuarioController'
		})
		.when('/insertarusuario', {
			templateUrl: 'app/views/pages/administrador/usuario/agregarusuario.html',
			controller: 'usuarioController'
		})
		.when('/editarusuario', {
			templateUrl: 'app/views/pages/administrador/usuario/editarusuario.html',
			controller: 'parametroController'
		})
		.when('/usuariose', {
			templateUrl: 'app/views/pages/administrador/usuario/usuariose.html',
			controller: 'usuarioeController'
		})
		.when('/conceptopagos', {
			templateUrl: 'app/views/pages/administrador/conceptopagos.html',
			controller: 'conceptopagoController'
		})
		.when('/conceptopagose', {
			templateUrl: 'app/views/pages/administrador/conceptopagose.html',
			controller: 'conceptopagoeController'
		})
		.when('/insertarconceptopago', {
			templateUrl: 'app/views/pages/administrador/agregarconceptopago.html',
			controller: 'conceptopagoController'
		})
		.when('/editarconceptopago', {
			templateUrl: 'app/views/pages/administrador/editarconceptopago.html',
			controller: 'conceptopagoController'
		})
		.when('/formapagos', {
			templateUrl: 'app/views/pages/administrador/formapagos.html',
			controller: 'formapagoController'
		})
		.when('/formapagose', {
			templateUrl: 'app/views/pages/administrador/formapagose.html',
			controller: 'formapagoeController'
		})
		.when('/insertarformapago', {
			templateUrl: 'app/views/pages/administrador/agregarformapago.html',
			controller: 'formapagoController'
		})
		.when('/editarformapago', {
			templateUrl: 'app/views/pages/administrador/editarformapago.html',
			controller: 'formapagoController'
		})//seguridad
		.when('/rol', {
			templateUrl: 'app/views/pages/administrador/rol.html',
			controller: 'rolController'
		})
		.when('/crearRol', {
			templateUrl: 'app/views/pages/administrador/crearRol.html',
			controller: 'rolController'
		})
		.when('/usuarioseg', {
			templateUrl: 'app/views/pages/administrador/usuarioseg.html',
			controller: 'usuarioSegController'
		})
		.when('/crearUsuario', {
			templateUrl: 'app/views/pages/administrador/crearUsuario.html',
			controller: 'usuarioSegController'
		})
		.when('/opcionrol', {
			templateUrl: 'app/views/pages/administrador/opcionrol.html',
			controller: 'opcionrolController'
		})//seguridad
		.when('/404', {
			templateUrl: 'app/views/pages/page_404.html'
		})
		.otherwise({ redirectTo: '/404' });
	}
]);