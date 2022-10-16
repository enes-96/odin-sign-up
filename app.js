const password = document.querySelector(".password").value;
const passwordCopy = document.querySelector(".password-copy");

function verifyPassword() {
  if (password == "") {
    alert("please type your password");
    return false;
  }
  if (password.length > 8) {
    alert("Password length must be atleast 8 characters");
    return false;
  }
  if (password.length > 15) {
    calert("Password length must not exceed 15 characters");
    return false;
  } else {
    alert("Password is correct");
  }
}

function passwordCheck() {
  password;
  if (password != passwordCopy) {
    alert("Passwords did not match");
    console.log(23);
  } else {
    alert("Password created successfully");
    console.log(99);
  }
}
