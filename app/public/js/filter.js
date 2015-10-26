var app = angular.module('myapp', []);
app.controller('FilterCtrl', function ($scope) {
    $scope.name = 'zhhj';
    $scope.mony = 133333333;
    $scope.items = [
        {name: 'bss', age: 6},
        {name: 'ass', age: 5},
        {name: 'tss', age: 8}
    ];
});
app.filter('curr', function () {
    return function (cont, unit1, unit2) {
        return unit1 + cont + unit2;
    };
});
app.filter('bb', function () {
    return function (items, filed, isdesc) {
        return  items.sort(function (item1, item2) {
            if (isdesc) {

            } else {
                var result = item2[filed] - item1[filed];
            }
            return result;
        });
    };
});