$(document).ready(function(){
  //Stores the inputs from user to calculate later
var inputs=[""];
//String to store current input string
var totalString;
//Operators array for validation without .
var operators = ["+","-","/","*"];
//operators array for validation with .
var decimal = ["."];
//Numbers array for validation
var numbers = [0,1,2,3,4,5,6,7,8,9];
//Adds value to inputs array and checks validation
function getValue(input){
  if(decimal.includes(inputs[inputs.length-1])===true && input==="."){
}
//Validation so it doesn't start with an operator
  else if(inputs.length===1 && operators.includes(input)===false){
    inputs.push(input);
  }
  //If last character was not an operator add operator to the array
  else if(operators.includes(inputs[inputs.length-1])===false){
    inputs.push(input);
  }
  else if(numbers.includes(Number(input))){
    inputs.push(input);
  }
  update();
  }
function update(){
  totalString= inputs.join("");
  $("#answer").html(totalString);
}
function getTotal(){
  totalString = inputs.join("");
  $("#answer").html(eval(totalString));
}

$("button").on("click",function(){
  if(this.id==="clear"){
    inputs = [""];
    update();
    $('#answer').html('0');
  }
  else if(this.id==="clearOne"){
    inputs.pop();
    update();
  }
  else if(this.id==="equals"){
    getTotal();
  } else {
    //error

  // prevents more than one deciminal in a number
  if (inputs === '.' || inputs === '0.') {
    if (!decimal) {
      inputs = [""];
    }
  }

  if(inputs[inputs.length-1].indexOf("+","-","/","*",".")===-1){
    getValue(this.value);
    }
    else {
      getValue(this.value);
    }
  }
});

});