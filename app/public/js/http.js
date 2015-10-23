var app = angular.module('myApp', []);
app.run(function ($http, $rootScope) {
    var options = {
        method: 'GET',
        url: '/GetUser'
    };
    $http(options).success(function (data) {
        $rootScope.users = data;
        console.log(data);
    }).error(function (msg) {
            console.log(msg);
        });
});
