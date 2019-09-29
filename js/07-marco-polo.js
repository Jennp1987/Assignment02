/*eslint-env browser*/
 
var x = "Marco!";
var y = "Polo!";
var i;
for (i = 1; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
        window.console.log(x + y);
    } else if (i % 3 === 0 && i % 5 !== 0) {
        window.console.log(x);
    } else if ( i % 5 === 0 && i % 3 !== 0) {
        window.console.log(y);
    } else {
        window.console.log(i);
    }
}



