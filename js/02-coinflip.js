/*eslint-env browser*/

var coinFlip = Math.random();
window.console.log(Math.round(coinFlip));
var choice = window.prompt("Select heads or tails");
if (coinFlip < 0.5) {
    window.console.log("heads");
} else {
    window.console.log("tails");
} 
if (choice === "heads" && coinFlip < 0.5) {
    window.alert("The flip was heads and you chose heads..you win!");
} else if (choice !== "heads" && coinFlip < 0.5) {
    window.alert(" The flip was heads and you chose tails...you lose!");
} else if (choice !== "tails" && coinFlip > 0.5) {
    window.alert("The flip was tails but you choose heads...you lose!");
} else if (choice === "tails" && coinFlip > 0.5) {
    window.alert("The flip was tails and you chose tails...you win!");  
}


