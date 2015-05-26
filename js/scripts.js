var factorial = function(number) {
var theAnswer = 0
  if (number > 0 ) {
    theAnswer = number * factorial(number - 1)
  } else
    theAnswer = 1
return theAnswer
};

$(document).ready(function() {
  $("form#factorials").submit(function(event) {
    $(".entered_number").empty();
    $(".factorial_number").empty();
    var number = parseInt($("input#input_number").val());
    var result = factorial(number);

    $(".entered_number").text(number);
    $(".factorial_number").text(result);

    $(".results").show();
    event.preventDefault();

  });
});
