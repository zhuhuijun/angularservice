var app = angular.module('myApp', ['ui.router']);
app.config(function ($stateProvider) {
    $stateProvider.state('users', {
        url: "/users",
        templateUrl: 'pages/users.html'
    }).state('users.list', {
            url: "/list",
            templateUrl: 'pages/list.html',
            controller: 'UserListCtrl'
        }).state('users.add', {
            url: "/add",
            template: '用户名:<input type="text">'
        }).state('articals', {
            views: {
                '': {
                    templateUrl: 'pages/articals.html'
                },
                'one@articals': {
                    template: '<div>文章列表</div>'
                },
                'two@articals': {
                    templateUrl: 'pages/table.html',
                    controller:'ArticalCtrl'
                }
            }
        });
});
app.controller('UserListCtrl', function ($scope) {
    $scope.users = [
        {username: 'tt'},
        {username: 'tt'},
        {username: 'tt'},
        {username: 'tt'}
    ];
});
app.controller('ArticalCtrl', function ($scope) {
    $scope.articals = [
        {name: 'tt',price:4.5},
        {name: 'tt',price:4.5},
        {name: 'tt',price:4.5},
        {name: 'tt',price:4.5}
    ];
});

