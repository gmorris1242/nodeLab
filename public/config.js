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
        .when("/updatePage", {
            template: "<update-page></update-page>"
        })
        .otherwise({ redirectTo: "/welcome" });
    });
})();
