const noOfTasks = 10;
const negative = false;
const max = 100;
const listEl = document.getElementById("list");
const genBtnEl = document.getElementById("genBtn");
const showBtnEl = document.getElementById("showBtn");
var showResults = false;

window.addEventListener("DOMContentLoaded", generateNew);
genBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  generateNew();
});

showBtnEl.addEventListener("click", () => {
  document.querySelectorAll(".result").forEach((el) => {
    el.classList.remove("hide");
  });
});

function generateNew() {
  listEl.innerHTML = "";
  for (i = 1; i <= noOfTasks; i++) {
    //preparing the table ROW HTML Structure
    const tableRowEl = document.createElement("tr");
    const tableNoEl = document.createElement("td");
    tableNoEl.innerText = `${i}.`;
    const tableFirstNumEl = document.createElement("td");
    const tableOperatorEl = document.createElement("td");
    const tableSecondNumEl = document.createElement("td");
    const tableEqualEl = document.createElement("td");
    tableEqualEl.innerText = "=";
    const tableResultEl = document.createElement("td");
    tableRowEl.appendChild(tableNoEl);
    tableNoEl.classList.add("text-left");
    tableRowEl.appendChild(tableFirstNumEl);
    tableRowEl.appendChild(tableOperatorEl);
    tableRowEl.appendChild(tableSecondNumEl);
    tableRowEl.appendChild(tableEqualEl);
    tableRowEl.appendChild(tableResultEl);
    tableResultEl.classList.add("result");
    tableResultEl.classList.add("hide");

    //calculations start
    var result = 0;
    const numberOne = Math.floor(Math.random() * (max - 1)) + 1;
    const opAdding = Math.random() < 0.5; //True for -, False for +
    tableFirstNumEl.innerText = numberOne;

    if (opAdding) {
      const numberTwo = Math.floor(Math.random() * (max - numberOne)) + 1;
      result = numberOne + numberTwo;
      tableOperatorEl.innerText = "+";
      tableSecondNumEl.innerText = numberTwo;
      tableResultEl.innerText = result;
    } else {
      //subtracting
      const numberTwo = Math.floor(Math.random() * (numberOne - 1)) + 1;
      result = numberOne - numberTwo;
      tableOperatorEl.innerText = "-";
      tableSecondNumEl.innerText = numberTwo;
      tableResultEl.innerText = result;
    }
    listEl.appendChild(tableRowEl);
  }
}
