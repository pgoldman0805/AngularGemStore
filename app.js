/*global alert, angular */
/*global console */

(function () {
    "use strict";

    var myApp = angular.module("myApp", ["storeProducts", "Avatar"]);

    myApp.controller("myController", ["$scope", "$http", "AvatarFactory", function ($scope, $http, AvatarFactory) {
        
        $scope.avatar = AvatarFactory;
        
        $http.get('/data/products.json').then(function (result) {
            $scope.Model = result.data;
        }, function (error) {
            console.log(error.message);
        });
    }]);

}());