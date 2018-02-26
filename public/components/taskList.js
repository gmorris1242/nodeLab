(function() {
    var taskList = {
      templateUrl: "partials/taskList.html",
      bindings: {
        list: "<"

      },
      controller: function(TodoService){
        var $ctrl = this;
        refreshList();
        $ctrl.removeMe = function(item){
          console.log(item);
          TodoService.deleteList(item).then(refreshList)
        };
        function refreshList() {
          TodoService.getList().then(function(tasks){
            $ctrl.list = tasks;
          });
        }
      }

    };


    angular.module("app").component("taskList", taskList);
})();
