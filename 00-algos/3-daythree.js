//var favFood= ["Calamari", "Pho", "Pizza", "Sushi", "Medium-rare steak", "Tacos", "Korean BBQ", "Chipotle"];




//for(var i = 0; i< favFoods.length; i++) {
    //if(favFoods[i] == "Sushi"){
       // console.log ("Inflation doe")
    //}else{
        //console.log(favFoods[i]);
    //}

var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny ==true) {
  whatToBring += "sunglasses, ";
}
if(temperature < 50) {
  whatToBring += "a coat, ";
}
if(isRaining ==true) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);




var countPositives = 0;


var numbers = [3, 4, -2, 7, 16, -8, 0];
    
// your code here!// 

for var(i =0, i<numbers.length; i++) //loop through every index starting at index 0 until the last index in the numbers array
    if(numbers[i] >0){ //if the current element at the current inbox (numbers[i]) is greater than 0 ->
        countpositives +=1;
    }
    
console.log("there are " + countPositives + " positive values");