"strict";

const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operators");
const acButton = document.getElementById("ac");
const deleteButton = document.getElementById("delete");
const equalButton = document.getElementById("equal");
const answer = document.getElementById("answer");
const calculation = document.getElementById("calculation");
const add = document.getElementById("plus");
const substract = document.getElementById("substract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const newSec = document.getElementById("new-sec");

let calc = "";

// STARTING CONDITIONS
const startingCon = function () {
  calculation.textContent = "";
  answer.textContent = "";
};
// startingCon();
let operands = [];
let values = [];

// FUNCTIONS
const display = function (val) {
  document.getElementById("answer").textContent += val;
  if (val === "+") {
    operands.push(val);
    return;
  }
  values.push(Number(val));
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
/*
 <div class="keys" id="new-sec">
  <div class="btn number">1</div>
 </div>
*/

// equalButton.addEventListener("click", () => {
//   numbers.map((number) => {
//     const numberDiv = document.createElement("div");
//     numberDiv.setAttribute("class", "btn number");
//     numberDiv.innerHTML = number;
//     newSec.appendChild(numberDiv);
//   });
// });

console.log(typeof answer.textContent);
// OPERATORS
add.addEventListener("click", () => {
  Number(answer.textContent);
});

// BUTTON AC
acButton.addEventListener("click", startingCon);
// NUMBER KEYS
// numberButton[i].addEventListener("click", () => {
//   for (let i = 0; i < numberButton.length; i++) {
//     calc = "" + numberButton[i];
//     answer.textContent = calc;
//   }
// });
