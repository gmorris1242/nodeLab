(function() {
  function TodoService($http){
    // var savedList =[];
    var id;

    return {
      getList: getList,
      setList: setList,
      deleteList: deleteList,
      updateTask: updateTask,
      getId: getId,
      sendId: sendId
    };

    function updateTask(input,itemId){
      // console.log("click");
      return $http({
               method: "PUT",
               url: "/tasks/" + itemId,
               data: {task: input}
           });
    };

    function deleteList(itemId){
      return $http({
               method: "DELETE",
               url: "/tasks/" + itemId
           });
    };

    function setList(input){
      // console.log(savedList);
      return $http({
          method: "POST",
          url: "/tasks",
          data: {task: input}
      });
    };

    function getList(){
      return $http({
        method: "GET",
        url: "/tasks"
      }).then(function(response) {
        // savedList = response.data;
        // console.log(savedList);
        return response.data;
        });
    };

    function getId(passedId){
      id = passedId
      // console.log(id);
    };

    function sendId(){
      // console.log(id);
      return id;
    };


  };

  angular.module("app")
    .factory("TodoService", TodoService)
}());
