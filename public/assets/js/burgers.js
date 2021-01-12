$(function() {
    $(".change-eaten").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("devour");
  
      var newEatState = {
        isEaten: newEat
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          console.log("changed eaten to", newEat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#burgers").val().trim(),
        isEaten: $("[name=isEaten]:checked").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);

          location.reload();
        }
      );
    });
  });