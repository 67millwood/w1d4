var countdownGenerator = function (x) {
  /* your code here */
  var counter = x + 1;
  return function() {
    counter -= 1;
    if (counter === 0) {
      console.log('Blast Off!');
    }
    else if (counter < 0) {
      console.log('Rockets already gone, bub!');
    }
    else {
      console.log('T-minus ' + counter + "...");
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!