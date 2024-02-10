// const noOfTasks = 10;
// const noOfTasks = document.getElementById("noOfTasks").value;

const negative = false;
// const max = 100;
const listEl = document.getElementById("list");
const genBtnEl = document.getElementById("genBtn");
const showBtnEl = document.getElementById("showBtn");
const multiplyEl = document.getElementById("multiply");
const divideEl = document.getElementById("divide");

var showResults = false;

window.addEventListener("DOMContentLoaded", generateNew);
genBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  generateNew();
});

showBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.innerText == "Show results") {
    document.querySelectorAll(".result").forEach((el) => {
      el.classList.remove("hide");
    });
    e.target.innerText = "Hide results";
  } else {
    document.querySelectorAll(".result").forEach((el) => {
      el.classList.add("hide");
    });
    e.target.innerText = "Show results";
  }
});

function generateNew() {
  const noOfTasks = document.getElementById("noOfTasks").value;
  const max = document.getElementById("maxValue").value;
  listEl.innerHTML = "";
  showBtnEl.innerText = "Show results";
  for (i = 1; i <= noOfTasks; i++) {
    //calculations start
    var result = 0;
    const numberOne = Math.floor(Math.random() * (max - 1)) + 1;
    let numberTwo = 0;
    const opAdding = Math.random() < 0.5; //True for -, False for +

    if (opAdding) {
      numberTwo = Math.floor(Math.random() * (max - numberOne)) + 1;
      result = numberOne + numberTwo;
      firstOperand = "+";
    } else {
      //subtracting
      numberTwo = Math.floor(Math.random() * (numberOne - 1)) + 1;
      result = numberOne - numberTwo;
      firstOperand = "-";
    }
    listEl.appendChild(makeTableRow(i, numberOne, firstOperand, numberTwo, 0, 0, result));
  }
}

function makeTableRow(number, firstNumber, firstOp, secondNumber, secondOp, thirdNumber, result) {
  //preparing the table ROW HTML Structure
  const tableRowEl = document.createElement("tr");
  const tableNoEl = document.createElement("td");
  tableNoEl.classList.add("table-no");
  tableNoEl.innerText = `${number}.`;
  const tableFirstNumEl = document.createElement("td");
  const tableOperatorEl = document.createElement("td");
  const tableSecondNumEl = document.createElement("td");
  const tableEqualEl = document.createElement("td");

  // tableEqualEl.innerText = "=";
  tableEqualEl.append(operandToPic("="));

  const tableResultEl = document.createElement("td");

  tableRowEl.appendChild(tableNoEl);
  tableRowEl.appendChild(tableFirstNumEl);
  tableRowEl.appendChild(tableOperatorEl);
  tableRowEl.appendChild(tableSecondNumEl);
  tableRowEl.appendChild(tableEqualEl);
  tableRowEl.appendChild(tableResultEl);
  tableResultEl.classList.add("result");
  tableResultEl.classList.add("hide");

  // tableFirstNumEl.innerText = firstNumber;
  // tableSecondNumEl.innerText = secondNumber;
  // tableOperatorEl.innerText = firstOp;
  // tableResultEl.innerText = result;

  tableFirstNumEl.append(numToPic(firstNumber));
  tableSecondNumEl.append(numToPic(secondNumber));
  tableOperatorEl.append(operandToPic(firstOp));
  tableResultEl.append(numToPic(result));

  return tableRowEl;
}

function operandToPic(value) {
  const element = document.createElement("div");
  element.classList.add("table-pic-div");

  element.appendChild(createImg(value, "operand-ing"));
  return element;
}

function numToPic(value) {
  const element = document.createElement("div");
  element.classList.add("table-pic-div");

  const text = value.toString();
  for (let index = 0; index < text.length; index++) {
    const char = text[index];
    // console.log(char);
    //THIS IS THE SECTION TO GENERATE THE IMAGE
    element.appendChild(createImg(char, "number-ing"));
  }
  return element;
}

function createImg(value, cssClass) {
  const img = document.createElement("img");
  img.classList.add(cssClass);
  img.src = `assets/${getShort(value)}`;

  return img;
}

function getShort(value) {
  const table = {
    0: "dig_0.png",
    1: "dig_1.png",
    2: "dig_2.png",
    3: "dig_3.png",
    4: "dig_4.png",
    5: "dig_5.png",
    6: "dig_6.png",
    7: "dig_7.png",
    8: "dig_8.png",
    9: "dig_9.png",
    "+": "dig_P.png",
    "-": "dig_M.png",
    "*": "dig_X.png",
    "/": "dig_D.png",
    "=": "dig_E.png",
  };
  return table[value];
}

// testing the input

// const testBtn = document.getElementById("testBtn");
// const testInput = document.getElementById("testInput");
// const output = document.getElementById("output");
// testBtn.addEventListener("click", (e) => {
//   output.innerHTML = "";
//   for (let index = 0; index < testInput.value.length; index++) {
//     const char = testInput.value[index];
//     console.log(char);
//     //THIS IS THE SECTION TO GENERATE THE IMAGE
//     const img = document.createElement("img");
//     img.src = `/assets/${getShort(char)}`;
//     output.appendChild(img);
//   }
// });
