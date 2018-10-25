var wrapLog = function (callback, name) {
  /* your code here */


  //get the name here using arguments
  console.log(name);

  //get the variables using arguments
  console.log(arguments[0]);
  // for (a in callback.arguments.length) {
  //   console.log(callback.arguments[a])
  // }
  //use the data to execute the function


  return function() {
    // console.log(">>> " + JSON.stringify(arguments))
    console.log( `${name}(${Object.values(arguments).join(', ')}) => ` + callback.apply(null, arguments) )
  }


};

//first function

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

// second function

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24