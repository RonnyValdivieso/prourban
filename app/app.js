'use strict';

angular.module('ProUrban', [
    'ngRoute',
    'ngAnimate',
    'LocalStorageModule',
    'angularSoap'
]);

angular.module('ProUrban')
.constant('AppConfig',{
	//apiUrl: "http://prourban.clservipubli.com.ec/prourban-ws/view/server.php?wsdl"
	apiUrl: "http://localhost/prourban-ws/view/server.php?wsdl"
});