const form = document.getElementById("forms");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  aakash();
});

function aakash() {
  let user;

  if (JSON.parse(localStorage.getItem("user_details"))) {
    user = JSON.parse(localStorage.getItem("user_details"));
  } else {
    user = [];
  }

  const First_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  const email = document.getElementById("gmail").value;
  const password = document.getElementById("password").value;
  const conpass = document.getElementById("conpassword").value;
  const user_id = user.length + 1;

  let res;
  if (password == conpass) {
    if (user.length == 0) {
      res = 0;
    }
    for (let i = 0; i < user.length; i++) {
      if (user[i].user_email == email) {
        res = 1;

        break;
      } else {
        res = 0;
      }
    }
  } else {
    alert("password are not same");
  }

  if (res === 1) {
    alert("email is already is taken");
  }
  if (res === 0) {
    let user_data;
    user_data = {
      user_name: First_name,
      second_name: last_name,
      user_email: email,
      user_Password: password,
      district: "",
      mobile_number: "",
      pincode: "",
      per_exp_id: 0,
      user_id,
    };

    user.push(user_data);
    localStorage.setItem("user_details", JSON.stringify(user));
    localStorage.setItem("details", email);

    window.location.href = "./../tips.html";
  }
}
