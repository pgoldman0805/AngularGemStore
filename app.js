/*global alert, angular */
(function () {
    "use strict";

    // For now, keep this at a global scope - eventually we'll move this to a server-side API call, and this data will come from a database. Hard-coding it here will make it easy to debug.
    var products = [
        {
            name: "Dodecahedron",
            price: 2.95,
            description: "Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems.",
            canPurchase: false,
            images: [
                {
                    full: "https://raw.githubusercontent.com/CodingTemple/CodingTemple.Angular.GemStore/master/images/gem-03.gif"
                }

            ]
        },
        {
            name: "Ruby",
            price: 5.95,
            description: "Ruby ruby ruby rubyyyy.",
            canPurchase: true,
            images: [
                {
                    full: "https://raw.githubusercontent.com/CodingTemple/CodingTemple.Angular.GemStore/master/images/gem-01.gif"
                }

            ]
        },
        {
            name: "Pentagonal Gem",
            price: 8.95,
            description: "The pentagonal gem's origin is unknown, hence it's low price.",
            canPurchase: true,
            images: [
                {
                    full: "https://raw.githubusercontent.com/CodingTemple/CodingTemple.Angular.GemStore/master/images/gem-02.gif"
                }

            ]
        }

    ];

    //Using the "two-argument" call to 'module' defines a module
    // The 2nd argument ([]) allows you to supply a list of other modules that you "inject" into this module. 
    var myApp = angular.module("myApp", []);

    // Using the "one-argument" call will fetch a previously defined module from the angular runtime.
    myApp.controller("myController", function ($scope) {
        $scope.Model = products;
        //    alert("welcome, Paul!");
    });

    myApp.controller("PanelController", function ($scope) {
        $scope.tab = 1;
        $scope.selectTab = function (newTab) {
            $scope.tab = newTab;
        };
    });

    // This is a custom directive that I've defined, not something built into Angular. I can stitch the div into my code by putting <my-directive /> into a page, as long as it is a descendant of myApp.
    myApp.directive("myDirective", function () {
        return {
            template: "<div>This is a custom directive</div>"
        };
    });
}());