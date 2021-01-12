$(function () {
    $(".change-devoured").on("click", function (event) {
      const id = $(this).data("id");
      const newDevoured = $(this).data("newdevour");
  
      const newDevourState = {
        devoured: newDevoured,
      };
  
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newDevourState,
      }).then(function () {
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    $(".create-form").on("submit", function (event) {
  
      event.preventDefault();
  
      let newBurger = {
        name: $("#burger").val().trim(),
      };
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger,
      }).then(function () {
       
        location.reload();
      });
    });
  });