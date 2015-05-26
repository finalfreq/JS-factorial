var factorial = function(number) {
  var theAnswer = 1;
  var i = 0;
  if (number > 0) {
    for (i = 0; i < number; i++) {
      theAnswer = theAnswer * (number - i);
    }
  }
  return theAnswer;
};

var factorial = function(number) {
var theAnswer = 0
  if (number > 0 ) {
    theAnswer = number * factorial(number - 1)
  } else
    theAnswer = 1
return theAnswer
};
