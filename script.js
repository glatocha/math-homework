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
    var result = 0;
    const numberOne = Math.floor(Math.random() * (max - 1)) + 1;
    const opAdding = Math.random() < 0.5; //True for -, False for +
    var outputString = "";
    console.log("numberOne :>> ", numberOne);

    if (opAdding) {
      const numberTwo = Math.floor(Math.random() * (max - numberOne)) + 1;
      result = numberOne + numberTwo;
      outputString = `${numberOne} + ${numberTwo} = `;
    } else {
      //subtracting
      const numberTwo = Math.floor(Math.random() * (numberOne - 1)) + 1;
      result = numberOne - numberTwo;
      outputString = `${numberOne} - ${numberTwo} = `;
    }
    const listItemEl = document.createElement("li");
    listItemEl.innerText = outputString;
    const resEl = document.createElement("span");
    resEl.classList.add("result");
    resEl.classList.add("hide");
    resEl.innerText = result;
    listItemEl.appendChild(resEl);
    listEl.appendChild(listItemEl);
  }
}
