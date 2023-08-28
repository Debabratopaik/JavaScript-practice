function feetToMile(input){
    if(input  < 0){
        consolele.log("You may not enter a number into the input");
    }
    let feet = parseFloat(input);
    let miles = 0.000189394 * feet;
    console.log("value in mile;" + miles.toFixed(6));
    // return miles;
}
// output check
var result = feetToMile(100000);
console.log(feetToMile) == 0.00189394;
