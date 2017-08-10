//Using the "two-argument" call to 'module' defines a module
// The 2nd argument ([]) allows you to supply a list of other modules that you "inject" into this module. 
angular.module("myApp", []);

// Using the "one-argument" call will fetch a previously defined module from the angular runtime.
angular.module("myApp").controller("myController", function() {
    alert("welcome, Paul!");
});

// This is a custom directive that I've defined, not something built into Angular. I can stitch the div into my code by putting <my-directive /> into a page, as long as it is a descendant of myApp.
angular.module("myApp").directive("myDirective",function() {
    return {
        template: "<div>This is a custom directive</div>"
    };
});