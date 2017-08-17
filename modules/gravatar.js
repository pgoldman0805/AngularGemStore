/*global angular, CryptoJS */

(function () {
    "use strict";
    var avatar = angular.module("Avatar", []);

    avatar.factory("AvatarFactory", function () {
        var size = 80,
            url = "https://www.gravatar.com/avatar/";

        return {
            generate: function (email) {
                return url + CryptoJS.MD5(email) + "?size=" + size;
            }
        };
    });
}());