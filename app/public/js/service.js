var app = angular.module('myApp', []);
//1.定制provider
/**
 * 1.可配置
 * 2.定义的是一个对象
 * 3.返回的是$get函数的返回值
 */
app.provider('ageService', {
    age: 100,
    get: function () {
        return this.age;
    },
    $get: function () {//必须提供
        return {age: this.age, get: this.get};
    }
});
app.factory('nameService', function () {
    var res = {};
    var name;
    res.set = function (_name) {
        name = _name;
    };
    res.get = function () {
        return name;
    };
    return res;
});
//配置provider
app.config(function (ageServiceProvider) {
    ageServiceProvider.age = 250;
});
app.controller('MyCtrl', function ($scope, ageService, nameService) {
    $scope.age = ageService.age;
    $scope.get = ageService.get;
    $scope.get2 = function () {
        return ageService.get();
    };
    nameService.set('nameService');
    $scope.name = nameService.get();
});
