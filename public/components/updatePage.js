(function() {
  var updatePage = {
    template: `    <div class="welcome">
            <h1>Update Task</h1>
            <form ng-submit="$ctrl.updateListItem($ctrl.input)">
              <input type="text" placeholder="Update your to-do" ng-model="$ctrl.input">
              <button type="submit">Update</button>
            </form>
          <div class="test">
            <a class="enterBtn" href="#!/todoList">Cancel<i class="material-icons">arrow_forward</i></a>
          </div>
        </div>
    `,
    controller: function(TodoService, $location) {
      var $ctrl = this;
      $ctrl.updateListItem = function(item,id){
        id = TodoService.sendId();
          TodoService.updateTask(item,id);
          $location.path('/todoList')
      }
    }
  };

  angular.module("app")
    .component("updatePage", updatePage);
})();
