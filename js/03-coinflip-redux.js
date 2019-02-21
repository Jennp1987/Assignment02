/*eslint-env browser*/
var coinFlip;
for (var i = 0; i < 10; i++) {
    coinFlip = Math.round(Math.random);
}
if (coinFlip === 0) {
    window.document.write("heads");
} else if (coinFlip !== 0) {
    window.document.write("tails");
}
