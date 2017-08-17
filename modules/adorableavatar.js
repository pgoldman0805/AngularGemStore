/*global angular */

(function () {
    "use strict";
    var avatar = angular.module("Avatar", []);

    avatar.factory("AvatarFactory", function () {
        var size = 80,
            url = "https://api.adorable.io/avatars/";

        return {
            generate: function (email) {
                return url + size + "/" + email;
            }
        };
    });
}());