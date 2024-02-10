// const noOfTasks = 10;
// const noOfTasks = document.getElementById("noOfTasks").value;

const negative = false;
// const max = 100;
const listEl = document.getElementById("list");
const genBtnEl = document.getElementById("genBtn");
const showBtnEl = document.getElementById("showBtn");
const multiplyEl = document.getElementById("multiply");
const divideEl = document.getElementById("divide");

// const dig_0 = document.createElement("img");
// const dig_1 = document.createElement("img");
// const dig_2 = document.createElement("img");
// const dig_3 = document.createElement("img");
// const dig_4 = document.createElement("img");
// const dig_5 = document.createElement("img");
// const dig_6 = document.createElement("img");
// const dig_7 = document.createElement("img");
// const dig_8 = document.createElement("img");
// const dig_9 = document.createElement("img");

// const dig_P = document.createElement("img");
// const dig_M = document.createElement("img");
// const dig_X = document.createElement("img");
// const dig_D = document.createElement("img");
// const dig_E = document.createElement("img");

// // dig_0.src = "assets/dig_0.png";
// dig_1.src = "assets/dig_1.png";
// dig_2.src = "assets/dig_2.png";
// dig_3.src = "assets/dig_3.png";
// dig_4.src = "assets/dig_4.png";
// dig_5.src = "assets/dig_5.png";
// dig_6.src = "assets/dig_6.png";
// dig_7.src = "assets/dig_7.png";
// dig_8.src = "assets/dig_8.png";
// dig_9.src = "assets/dig_9.png";
// dig_P.src = "assets/dig_P.png";
// dig_M.src = "assets/dig_M.png";
// dig_X.src = "assets/dig_X.png";
// dig_D.src = "assets/dig_D.png";
// dig_E.src = "assets/dig_E.png";

// dig_0.classList.add("number-ing");
// dig_1.classList.add("number-ing");
// dig_2.classList.add("number-ing");
// dig_3.classList.add("number-ing");
// dig_4.classList.add("number-ing");
// dig_5.classList.add("number-ing");
// dig_6.classList.add("number-ing");
// dig_7.classList.add("number-ing");
// dig_8.classList.add("number-ing");
// dig_9.classList.add("number-ing");
// dig_P.classList.add("operand-ing");
// dig_M.classList.add("operand-ing");
// dig_X.classList.add("operand-ing");
// dig_D.classList.add("operand-ing");
// dig_E.classList.add("operand-ing");

// fetch("assets/dig_0.png")
//   .then((res) => res.blob())
//   .then((blob) => URL.createObjectURL(blob))
//   .then((dataUrl) => {
//     dig_0.src = dataUrl;
//   });

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

  // element.appendChild(createImg(value, "operand-ing"));
  element.appendChild(getShortObj(value).cloneNode(true));
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
    // element.appendChild(createImg(char, "number-ing"));
    element.appendChild(getShortObj(char).cloneNode(true));
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
function getShortObj(value) {
  const table = {
    0: dig_0,
    1: dig_1,
    2: dig_2,
    3: dig_3,
    4: dig_4,
    5: dig_5,
    6: dig_6,
    7: dig_7,
    8: dig_8,
    9: dig_9,
    "+": dig_P,
    "-": dig_M,
    "*": dig_X,
    "/": dig_D,
    "=": dig_E,
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
