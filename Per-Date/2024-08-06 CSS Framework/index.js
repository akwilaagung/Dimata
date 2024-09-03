const singUpForm = document.forms["sign-up-form"];
const firstNameInput = singUpForm["first-name"];
const firstNameValue = document.querySelector("#first-name-value");
console.log(singUpForm);
console.log(firstNameValue);

firstNameInput.addEventListener("mouseover", () => {
  firstNameValue.innnerText = firstNameInput.value;
});

firstNameInput.addEventListener("mouseout", () => {
  firstNameValue.innnerText = "Letakkan mouse pada atas input kembali";
});
