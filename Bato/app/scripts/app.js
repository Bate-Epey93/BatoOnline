angular.module('BatoApp', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/MainPage.html'
    })
    .when('/home', {
        templateUrl: 'views/MainPage.html'
    })
    .when('/signIn', {
        templateUrl: 'views/signinView.html'
    })
    .when('/logOut', {
        templateUrl: 'views/logoutView.html'
    })
}]);