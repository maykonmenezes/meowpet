angular.module('projetopi',['ngRoute', 'ngResource'])
  .config(function($routeProvider, $httpProvider) {

    $httpProvider.interceptors.push('meuInterceptor');

    $routeProvider.when('/pets', {
      templateUrl: 'partials/pets.html',
      controller: 'PetsController'
    });

    $routeProvider.when('/pet/:petId', {
    	templateUrl: 'partials/pet.html', 
    	controller: 'PetController'
    });

    $routeProvider.when('/pet', {
      templateUrl: 'partials/pet.html',
      controller: 'PetController'
    });

    $routeProvider.when('/pet-details/:petId', {
      templateUrl: 'partials/pet-details.html',
      controller: 'PetDetailsController'
    });

    $routeProvider.when('/pet/foto', {
      templateUrl: '../vendor/file-reader/foto.html',
      //controller: 'PetDetailsController'
    });

    $routeProvider.when('/auth', {
      templateUrl: 'partials/auth.html'
    });

    $routeProvider.otherwise({redirectTo: '/pets'});
});