$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var blanks = ["item1", "item2", "item3", "item4", "item5"];
    var newArray = [];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      newArray.push(userInput.toUpperCase());
    });

    var newArray = newArray.sort();

    newArray.forEach(function(item) {
      $(".items").append("<li>" + item + "</li>");
    });

    $("#grocery-list").show();
    $("#blanks").hide();

   event.preventDefault();

  });
});
