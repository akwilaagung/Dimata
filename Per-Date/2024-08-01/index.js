// alert("Hello from external script");

const body = document.body;

const printText = document.body.querySelector("#print-text");
console.log("[PRINT TEXT]", printText);

const printed = body.querySelector("#printed");
console.log(printed.textContent);

printText.addEventListener("click", () => {
  alert("clicked");
});

// const test = document.getElementById("test");
// test.addEventListener("click", () => {
//   alert("clicked");
// });

printed.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    alert("KEY PRESS");
  }
});

const printed1 = document.getElementById("printed1");
console.log(printed1.textContent);

printed1.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    alert("KEY PRESS");
  }
});
