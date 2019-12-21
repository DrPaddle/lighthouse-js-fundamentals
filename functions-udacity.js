// function reheatPizza(numSlices){

// }

// function reverseString(reversMe)

// function doubleGreeting(name,otherName)
// function sayHello(){
//   var message = "hello!"
//   console.log(message);
// }


// function sayHello(){
//   var message = "Hello!";
//   return message;
// }
// // console.log(sayHello());
// function add(x,y){
//   var sum = x+y;
//   return console.log(sum);

// }
// var sum = add(1,2)
// console.log(sum)

function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);

function makeLine(length) {
  var line = "";
  for (var k = 1; k <=length; k++){
    line += "* "
  }
  return line +"\n"
}