$(function() {
    $(".notEaten").on("click", function(event) {
      var id = $(this).data("id");
    
      console.log(id);
      
      // Send the PUT request.
      $.ajax("/burgers/" + id, {
        type: "PUT"
      }).then(
        function() {
          console.log("You devoured that burger!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
   
  });