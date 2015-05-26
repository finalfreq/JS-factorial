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
