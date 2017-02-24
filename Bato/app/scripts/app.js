angular.module('BatoApp', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/MainPage.html'
        })
    .when('/MainPage', {
        templateUrl: 'views/MainPage.html'
    })
}]);