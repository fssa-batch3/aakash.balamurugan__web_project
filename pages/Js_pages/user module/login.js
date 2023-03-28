let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  aakash();
});

function aakash() {

  const log_email = document.getElementById("log_email").value;
  const log_password = document.getElementById("log_password").value;

  let arr = JSON.parse(localStorage.getItem("user_details"));

//   let result = arr.find(function (value) {
//     return value.user_email === log_email;
//   });

let result ;
let res;
for (let i = 0; i < arr.length; i++) {
    if (log_email===arr[i].user_email) {
        result = arr[i];
        res=1;
        console.log(result);
        break;
    }
    else{
   res = 0
}
}
console.log(res);
 if (res==0) {
    alert("don't have an account ,create a new account");
 }
  let ind = arr.findIndex(value => value == result);

 if (res==1) {
    console.log("1111");
    if (log_password == result.user_Password) {
    
        localStorage.setItem("details",result.user_email);
    
        alert("login succes");
    
    
        window.location.href = "../tips.html";
      } else {
        alert("incorret password");
      }
 }
}