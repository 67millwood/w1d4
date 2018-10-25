function findWaldo(arr, callback) {
  arr.forEach(function(item, index) {
    if (item === "Waldo") {
      callback(item, index);   // execute callback
    }
  })
}

function actionWhenFound(name, location) {
  console.log("we found " + name + " at index " + location);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);