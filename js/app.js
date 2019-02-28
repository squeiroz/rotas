angular.module('App',['ngRoute']);

angular.module('App').config(function($routeProvider){
    $routeProvider.when('/home',{
        templateUrl:"view/home.html",
        controller:"mainController",
        resolve:{
            routeName:function(){
                return "Home";
            }
        }
    });
    $routeProvider.when('/contato',{
        templateUrl:"view/contato.html",
        controller:"mainController",
        resolve:{
            routeName:function(){
                return "Contato";
            }
        }
    });

    $routeProvider.otherwise({redirectTo:"/home"});
});

angular.module('App').controller('mainController', function($scope, routeName){
	$scope.titulo = "myApp";
	$scope.routeName = routeName;
});