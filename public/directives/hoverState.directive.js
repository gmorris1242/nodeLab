(function() {
  function xhov(){
    return {
      restrict: "A",
      link: function($scope, $element, $attrs) {
        $element.on("mouseenter",function(){
          $element.css("color","#ff0000").css("cursor","pointer").css("transform","scale(1.1)").css("transition","transform 300ms");
        });
        $element.on("mouseleave",function(){
          $element.css("color","black").css("transform","scale(1.0)");
        });
      }
    }


  };

  angular.module("app").directive("xhov", xhov);
}());
