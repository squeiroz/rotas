angular.module('App',['ngRoute']);

angular.module('App').config(function($routeProvider){
	$routeProvider.when('/home', {
		templateUrl: "view/home.html",
		controller: "mainController",
		resolve: {
			routeName: function(){
				return "Home";
			}
		}
	});
});

angular.module('App').controller('mainController', function($scope, routeName){
	$scope.titulo = "Meu primeiro SPA com rotas";
	$scope.routeName = routeName;
});