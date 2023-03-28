let form = document.getElementById("edit_btn");
form.addEventListener("click", (e) => {
  e.preventDefault();
  aakash();
});

let remove = document.getElementById("delete_btn");
remove.addEventListener("click",(e) =>{
    e.preventDefault();
    delete1();
})



let arr = JSON.parse(localStorage.getItem("user_details"));

let details = localStorage.getItem("details");
let result = arr.find(function (value) {
    return value.user_email === details;
  });

document.getElementById("profile").setAttribute("src","https://ui-avatars.com/api/?name=" +result.user_name)
  
document.getElementById("customer").innerHTML =result.user_name;

document.getElementById("user-firstname").value=result.user_name;

document.getElementById("user-lastname").value= result.second_name;

document.getElementById("user-email").value=result.user_email;

document.getElementById("user-password").value=result.user_Password;

document.getElementById("number").value=result.mobile_number;

document.getElementById("district").value;

document.getElementById("pincode").value=result.pincode;

let new123 = document.getElementsByClassName("name");

new123.setAttribute=("disabled");


function aakash(){

    


let ind =arr.findIndex(function (value){
return value.user_email === details});

let firstname = document.getElementById("user-firstname").value;

let lastname = document.getElementById("user-lastname").value;

let useremail = document.getElementById("user-email").value;

let password = document.getElementById("user-password").value;

let mobile = document.getElementById("number").value;

let district = document.getElementById("district");

let pincode = document.getElementById("pincode").value;

let new123 = document.getElementsByClassName("name");

new123.setAttribute=("enable")





let selectedValue;
district.addEventListener("change", (event) => {
    check = event.target.innerText
    selectedValue = event.target.value;
});



let user_data =  {
"user_name":firstname,
"second_name":lastname,
"user_email":useremail,
"user_Password":password,
"district":selectedValue,
"mobile_number":mobile,
"pincode":pincode,
}
// arr[ind] = user_data;         

arr[ind].mobile_number=`${mobile}`;
arr[ind].pincode=`${pincode}`;
arr[ind].pincode=selectedValue;

console.log(selectedValue);

localStorage.setItem("user_details",JSON.stringify(arr));

}


function delete1(){

let ind =arr.findIndex(function (value){
return value.user_email === details});
console.log(ind);

if(arr[ind].user_email==details){
arr.splice(ind,1);
console.log(arr)
localStorage.setItem("user_details",JSON.stringify(arr));
window.location.href="./login/login.html"
}
}

