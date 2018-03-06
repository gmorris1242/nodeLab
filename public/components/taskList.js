(function() {
    var taskList = {
      templateUrl: "partials/taskList.html",
      bindings: {
        list: "<"

      },
      controller: function(TodoService,$location){
        var $ctrl = this;
        refreshList();
        $ctrl.removeMe = function(item){
          // console.log(item);
          TodoService.deleteList(item).then(refreshList)
        };

        // $ctrl.updateListItem = function(item,id){
        //   item = prompt("Update task.");
        //   if(item !== ""){
        //     TodoService.updateTask(item,id).then(refreshList);
        //   }
        // }

        $ctrl.updateId = function(id){
            TodoService.getId(id);
            $location.path('/updatePage')
        }


        function refreshList() {
          TodoService.getList().then(function(tasks){
            $ctrl.list = tasks;
          });
        }
      }

    };


    angular.module("app").component("taskList", taskList);
})();
