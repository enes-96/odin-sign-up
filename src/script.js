"use strict";
const password = document.querySelector("#passwordOne");
const passwordConfirm = document.querySelector("#passwordConfirm");
const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", () => {
  verifyPassword();
});

const verifyPassword = function () {
  if (password.value.length >= 15 || password.value.length < 8) {
    alert("your password should be not shorter than 8, and not longer than 15");
    return false;
  } else if (password.value != passwordConfirm.value) {
    alert("password not match");
    return false;
  } else {
    console.log(true);
    return true;
  }
};
