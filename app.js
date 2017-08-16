/*global alert, angular */
/*global console */

(function () {
    "use strict";

    var myApp = angular.module("myApp", ["storeProducts"]);

    myApp.controller("myController", ["$scope", "$http", function ($scope, $http) {
        $http.get('/data/products.json').then(function (result) {
            $scope.Model = result.data;
        }, function (error) {
            console.log(error.message);
        });
    }]);

}());