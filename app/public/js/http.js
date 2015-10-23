var app = angular.module('myApp', []);
app.factory('BookService', function ($http) {
    var bookList = [
        {name: 'node.js'},
        {name: 'angular.js'}
    ];
    var list = function () {
        var options = {
            method: 'GET',
            url: '/GetBooks'
        };
        return  $http(options);
        //return bookList;
    };
    var add = function (nam) {
        bookList.push({name: nam});
        return bookList;
    };
    return{
        list: list,
        add: add
    }
});
app.run(function ($http, $rootScope, BookService) {
    /*    var options = {
     method: 'GET',
     url: '/GetBooks'
     };
     $http(options).success(function (data) {
     $rootScope.books = data;
     console.log(data);
     }).error(function (msg) {
     console.log(msg);
     });*/
    var promise = BookService.list();
    promise.success(function (datas) {
        $rootScope.books = datas;
    });
});
app.controller('bookCtrl', function ($scope, $rootScope, BookService) {
    $scope.addBook = function () {
        $rootScope.books = BookService.add($scope.bookname);
        $scope.bookname = '';
    };
});