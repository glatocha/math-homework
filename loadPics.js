var allLoaded = false;

const dig_0 = document.createElement("img");
const dig_1 = document.createElement("img");
const dig_2 = document.createElement("img");
const dig_3 = document.createElement("img");
const dig_4 = document.createElement("img");
const dig_5 = document.createElement("img");
const dig_6 = document.createElement("img");
const dig_7 = document.createElement("img");
const dig_8 = document.createElement("img");
const dig_9 = document.createElement("img");

const dig_P = document.createElement("img");
const dig_M = document.createElement("img");
const dig_X = document.createElement("img");
const dig_D = document.createElement("img");
const dig_E = document.createElement("img");

// adding class for future use
dig_0.classList.add("number-ing");
dig_1.classList.add("number-ing");
dig_2.classList.add("number-ing");
dig_3.classList.add("number-ing");
dig_4.classList.add("number-ing");
dig_5.classList.add("number-ing");
dig_6.classList.add("number-ing");
dig_7.classList.add("number-ing");
dig_8.classList.add("number-ing");
dig_9.classList.add("number-ing");

dig_P.classList.add("operand-ing");
dig_M.classList.add("operand-ing");
dig_X.classList.add("operand-ing");
dig_D.classList.add("operand-ing");
dig_E.classList.add("operand-ing");

// preloading the assets, speeds up new generations
fetch("assets/dig_0.png")
  .then((res) => res.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((dataUrl) => {
    dig_0.src = dataUrl;
  });
fetch("assets/dig_1.png")
  .then((res) => res.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((dataUrl) => {
    dig_1.src = dataUrl;
  });
fetch("assets/dig_2.png")
  .then((res) => res.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((dataUrl) => {
    dig_2.src = dataUrl;
  });
fetch("assets/dig_3.png")
  .then((res) => res.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((dataUrl) => {
    dig_3.src = dataUrl;
  });
fetch("assets/dig_4.png")
  .then((res) => res.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((dataUrl) => {
    dig_4.src = dataUrl;
  });
fetch("assets/dig_5.png")
  .then((res) => res.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((dataUrl) => {
    dig_5.src = dataUrl;
  });
fetch("assets/dig_6.png")
  .then((res) => res.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((dataUrl) => {
    dig_6.src = dataUrl;
  });
fetch("assets/dig_7.png")
  .then((res) => res.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((dataUrl) => {
    dig_7.src = dataUrl;
  });
fetch("assets/dig_8.png")
  .then((res) => res.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((dataUrl) => {
    dig_8.src = dataUrl;
  });
fetch("assets/dig_9.png")
  .then((res) => res.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((dataUrl) => {
    dig_9.src = dataUrl;
  });

fetch("assets/dig_P.png")
  .then((res) => res.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((dataUrl) => {
    dig_P.src = dataUrl;
  });
fetch("assets/dig_M.png")
  .then((res) => res.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((dataUrl) => {
    dig_M.src = dataUrl;
  });
fetch("assets/dig_X.png")
  .then((res) => res.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((dataUrl) => {
    dig_X.src = dataUrl;
  });
fetch("assets/dig_D.png")
  .then((res) => res.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((dataUrl) => {
    dig_D.src = dataUrl;
  });
fetch("assets/dig_E.png")
  .then((res) => res.blob())
  .then((blob) => URL.createObjectURL(blob))
  .then((dataUrl) => {
    dig_E.src = dataUrl;
    allLoaded = true;
  });

// OLD VERSION

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

// dig_0.src = "assets/dig_0.png";
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
