/*global alert, angular */

(function () {
    "use strict";
    
    var storeProducts = angular.module("storeProducts", []);

    storeProducts.directive("storePanels", function () {
        return {
            restrict: 'E',
            templateUrl: "templates/store-panels.html",
            controller: function ($scope) {
                $scope.tab = 1;
                $scope.selectTab = function (newTab) {
                    $scope.tab = newTab;
                };
            }
        };
    });

    storeProducts.directive("reviews", function () {
        return {
            restrict: 'E',
            templateUrl: "templates/store-reviews.html",
            controller: function ($scope) {
                $scope.newReview = {};

                $scope.addReview = function (product) {

                    $scope.reviewForm.body.$setDirty();
                    if (!product.reviews) {
                        product.reviews = [];
                    }

                    product.reviews.push($scope.newReview);
                    //TODO: Come back to this later and send the new review to an API so it can be saved.

                    $scope.reviewForm.$setPristine();
                    $scope.newReview = {};
                };
            }
        };
    });
    
}());
