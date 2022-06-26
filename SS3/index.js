let regbtn = document.getElementById("reg");
let email = document.getElementById("email");
let password = document.getElementById("password");
// let userr = [];
// localStorage.setItem("user", JSON.stringify(userr));

regbtn.addEventListener("click", () => {
  if (email.value == "" && password.value == "") {
    alert("Fail");
    exit();
  }
  let tg = [];
  if (localStorage.user) {
    tg = JSON.parse(localStorage.user);
  }
  //   let tg = JSON.parse(localStorage.getItem("user"));
  let userInfo = {
    email: email.value,
    password: password.value,
  };
  tg.push(userInfo);
  localStorage.setItem("user", JSON.stringify(tg));
});
let loginbtn = document.getElementById("login");
loginbtn.addEventListener("click", () => {
  if (email.value == "" && password.value == "") {
    alert("Fail");
    exit();
  }
  let userInfo = JSON.parse(localStorage.getItem("user"));
  let ok = false;
  for (let index = 0; index < userInfo.length; index++) {
    let user = userInfo[index];
    if (user.email == email.value && user.password == password.value) {
      ok = true;
      break;
    }
  }
  if (ok) alert("ACCEPT");
  else alert("Fail");
});
