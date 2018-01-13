// Generic function for capturing the movie name from the data-attribute
 function alertFoodName() {
   var foodName = $(this).attr("data-name");

   alert(foodName);
 }

var vFoods = ["Tofu", "Chickpea", "Lentils", "Mushrooms"];
// Function for displaying movie data
function renderButtons() {

  // Deleting the foods prior to adding new foods
  // (this is necessary otherwise we will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of movies
  for (var i = 0; i < vFoods.length; i++) {

    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of food to our button
    a.addClass("food");
    // Adding a data-attribute
    a.attr("data-name", vFoods[i]);
    // Providing the initial button text
    a.text(vFoods[i]);    // Adding the button to the HTML
    $("#buttons-view").append(a);
  }
}

// This function handles events where one button is clicked
$("#add-food").on("click", function(event) {
  // Preventing the buttons default behavior when clicked (which is submitting a form)
  event.preventDefault();
  // This line grabs the input from the textbox
  var food = $("#food-input").val().trim();

  // Adding the movie from the textbox to our array
  vFoods.push(food);

 $(document).on("click", ".food", alertFoodName);
  // Calling renderButtons which handles the processing of our movie array
  renderButtons();

});
