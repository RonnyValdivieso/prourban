'use strict';

angular.module('ProUrban')
.controller('formController', ['$scope', 'localStorageService', 'testService',
	function($scope, localStorageService, testService) {
		$scope.callEvent = callEvent;

		function callEvent() {
			testService.ListaEventosXcategoria($scope.categoria).then(function(response) {
				$scope.response = response;
				//console.log($scope.response);
			});
		}
	}
]);