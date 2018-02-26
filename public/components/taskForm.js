(function() {
  var taskForm = {
    templateUrl: "partials/taskForm.html",
    controller: function FormController(TodoService) {
      var $ctrl = this;

      refreshList();

      $ctrl.input = "";
      $ctrl.add = function(input) {
        if ($ctrl.input !== "") {
          TodoService.setList(input).then(refreshList);
          $ctrl.input = "";
        }
      };

      function refreshList() {
        TodoService.getList().then(function(tasks){
          $ctrl.list = tasks;
        });
      }
    }
  };

  angular.module("app")
    .component("taskForm", taskForm);
})();
