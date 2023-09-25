let trailingResult = 0;
let operationOptions = ['divide', 'multiply', 'subtract', 'add'];
let workingOperation = "";

function updateDisplay(input) {
  let display = document.getElementById("display");
  let secondaryDisplay = document.getElementById("secondaryDisplay");

  if (display.innerHTML === "0" && operationOptions.indexOf(input) === -1) {
    if (input === "decimal") {
      display.innerHTML = "0.";
    }
     else if (input === "negative-value") {
            if (display.innerHTML.indexOf("-1") === -1) {
              display.innerHTML = "-" + display.innerHTML
            } 
            else if (display.innerHTML.indexOf("-1" > -1)) {
              display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
            }
          }
          else if(input === 'percent'){
            if(display.innerHTML.indexOf(".0000") === -1){
              display.innerHTML = display.innerHTML / 100;
            }
           
          }
          else if (input === "equals") {
            if(display.innerHTML.indexOf('0') === -1 && display.innerHTML.length < 11){
              display.innerHTML = calculate(trailingResult, display.innerHTML, workingOperation);
              trailingResult = 0;
              workingOperation = "";
              secondaryDisplay.innerHTML = trailingResult;
            }
            }
         
       
          else {
            display.innerHTML = input;
          }
  }
   else if (operationOptions.indexOf(input) >= 0) {
    // console.log("Dealing with a operation");

     if (workingOperation === "") {
      // Dealing without an operand
      workingOperation = input;
      trailingResult = display.innerHTML;
      secondaryDisplay.innerHTML = trailingResult;
      display.innerHTML = 0;
      
    } else {
      // Dealing with a set operand
      // console.log(display.innerHTML, " Dealing with set operand");
      trailingResult = calculate(trailingResult, display.innerHTML, workingOperation);
      secondaryDisplay.innerHTML = trailingResult;
      display.innerHTML = 0;
      workingOperation = input;
    }
  } 
  else if (input === "equals") {
    if(display.innerHTML.indexOf('0') === -1){
      display.innerHTML = calculate(trailingResult, display.innerHTML, workingOperation);
      console.log(display.innerHTML.length)

      if(display.innerHTML.length < 12 ){
        trailingResult = 0;
      workingOperation = "";
      secondaryDisplay.innerHTML = trailingResult;
      }
      else{
  display.innerHTML = '1e'+ display.innerHTML.length;

      }
      
      
    }
else{
  display.innerHTML = '0';

}
    
  
  }
   else if (input === "decimal") {
    // console.log('decimal clicked');
    if (display.innerHTML.indexOf(".") === -1) {
      display.innerHTML += ".";
    }
    // console.log("decimal skipped because decimal already in number.");
  } else if (input === "negative-value") {
    // console.log("negative-value selected");
    if (display.innerHTML.indexOf("-1") === -1 && !/[+\-*/]/.test(display.innerHTML)) {
      display.innerHTML = "-" + display.innerHTML
    } else if (display.innerHTML.indexOf("-1" > -1)) {
      display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
    }
  }
  else if(input === 'percent'){
    if(display.innerHTML.indexOf(".0000") === -1){
      display.innerHTML = display.innerHTML / 100;
    }
    else{
      display.innerHTML = '0';
    }
  }
  else {
    display.innerHTML += input;
    if(display.innerHTML.length> 11 ){
      display.innerHTML = '0';
     }

  
      
      
  

  }

  // 5 - 2 = / 2 =
  // console.log(trailingResult, "<= trailingResult", display.innerHTML, " <= display.innerHTML", workingOperation, " <= workingOperation");
}

function clearDisplay() {
  let display = document.getElementById("display");
  let secondaryDisplay = document.getElementById("secondaryDisplay");
  
  
  display.innerHTML = '0';
  secondaryDisplay.innerHTML = '0';

  // Reset the trailingResult and workingOperation
  trailingResult = 0;
  workingOperation = '';
}




function calculate(firstNumber, secondNumber, operation) {
  let result;
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  switch(operation) {
    case "add":
      // console.log("add calculated")
      result = firstNumber + secondNumber;
      break;
    case "subtract":
      // console.log("subtract calculated")
      result = firstNumber - secondNumber;
      break;
    case "multiply":
      // console.log("multiply calculated")
      result = firstNumber * secondNumber;
      break;
    case "divide":
      // console.log("divide calculated")
      result = firstNumber / secondNumber;
      break;
    default:
  }
  return result.toString();
}
