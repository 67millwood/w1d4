var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

function map(input, callback) {
  var newArray =[]
  for (word in input) {
    newArray.push(callback(input[word]))
  }
  console.log(newArray)
}

//map(words);