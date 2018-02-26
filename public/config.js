(function() {
    angular.module("app")
    .config(function($routeProvider) {
        $routeProvider
        .when("/welcome", {
            template: "<welcome-page></welcome-page>"
        })
        .when("/todoList", {
            template: "<task-form></task-form>"
        })
        .otherwise({ redirectTo: "/welcome" });
    });
})();
