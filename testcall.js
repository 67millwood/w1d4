var knife = function happy (callback, date) {

    return function() {
      console.log(date + " " + (Object.values(arguments)) + " " + callback.apply(null, arguments));
    }
}

var keith = (apple) => {
    return 7 * apple - apple / 2;
}
var test1 = knife(keith, 'Jan')



test1(9);
test1(12);
test1(50);
