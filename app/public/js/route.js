var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/main', {
        templateUrl: '/pages/home.html',
        controller: 'HomeCtrl'
    })
        .when('/student', {
            templateUrl: '/pages/student.html',
            controller: 'StudentCtrl'})
        .when('/class', {
            templateUrl: '/pages/class.html',
            controller: 'ClassCtrl'})
        .otherwise({
            redirectTo: '/main'
        }
    );
});
app.controller('HomeCtrl', function ($scope) {
    $scope.name = "MianPage";
});
app.controller('StudentCtrl', function ($scope) {
    $scope.name = "StudentPage";
});
app.controller('ClassCtrl', function ($scope) {
    $scope.name = "ClassPage";
});
