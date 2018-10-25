function findWaldo(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      var location = i;
      var name = arr[i];
      callback(location, name);   // execute callback
    }
  }
}

function actionWhenFound(location, name) {
  console.log("we found " + name + " at index " + location);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);