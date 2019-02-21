/*eslint-env browser*/

var coinFlip;
var i = 0;
do {
    coinFlip = Math.round(Math.random);
    if (coinFlip === 0) {
        window.console.log("Heads");
        i += 1;
    } else if (coinFlip !== 0) {
        window.console.log("Tails");
        break;
    }
} while (coinFlip !== 1 && i <= 0);
    
    
   