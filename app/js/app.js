var bookStoreApp = angular.module('bookStoreApp', [
    'ngRoute', 'ngAnimate', 'bookStoreCtrls', 'bookStoreFilters',
    'bookStoreServices', 'bookStoreDirectives'
]);

bookStoreApp.config(function($routeProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'tpls/hello.html',
        controller: 'HelloCtrl'
    }).when('/list', {
        templateUrl: 'tpls/bookList.html',
        controller: 'BookListCtrl'
    }).otherwise({
        redirectTo: '/hello'
    })
});


var bookStoreApp = angular.module('bookStoreApp', [
	'ngRoute','ngAnimate','bookStoreCtrls','bookStoreFilters',
	'bookStoreServices','bookStoreDirectives'
]);

boookStoreApp.config(function($routeProvider){
	$routeProvider.when('/hello',{
		templateUrl: 'tpls/hello',
		controller : 'HelloCtrl'
	}).when('/list',{
		templateUrl: 'tpls/bookList.html',
		controller :　'BookListCtrl'
	}).otherwise({
		redirectTo : '/hello'
	})	
	
});
