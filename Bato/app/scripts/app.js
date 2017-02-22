angular.module('BatoApp', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/index.html'
        })
    .when('/MainPage', {
        templateUrl: 'views/MainPage.html'
    })
}]);