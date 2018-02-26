(function() {
  var welcomePage = {
      template:`    <div class="welcome">
            <h1>Welcome to TODO</h1>

              <p>Do more. Increase your productivity with a simple to do app.</p>
            <div class="test">  
              <a class="enterBtn" href="#!/todoList">Enter <i class="material-icons">arrow_forward</i></a>
            </div>
          </div>
      `
  };

angular.module("app")
  .component("welcomePage", welcomePage)
}());
