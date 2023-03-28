

const form = document.querySelector("form");
form.addEventListener("submit",e =>{
  e.preventDefault();
  aakash()
})
// let form =document.querySelector("form");
// form.addEventListener("submit",e=>{
//   e.preventDefault();
//   signup();
// })

// function signup(){
// const First_name = document.getElementById("first_name").value;
// const last_name = document.getElementById("last_name").value;
// const email = document.getElementById("gmail").value;
// const password = document.getElementById("password").value;
// const conpass = document.getElementById("conpassword").value;


// let user_data =     {
// "user_name":First_name,
// "second_name":last_name,
// "user_email":email,
// "user_Password":password,
// "district":"",
// "mobile_number":"",
// "pincode":"",
// }


// let arr;
// user_records= JSON.parse(localStorage.getItem("user_details"))

// if(user_records){
// arr= JSON.parse(localStorage.getItem("user_details"))
// }

// else{
// arr=[]
// }
// arr.push(user_data)


// localStorage.setItem("user_details",JSON.stringify(arr));

// let check = arr.find(function(value){
// return value.user_email == email
// })
// if (email == check.user_email){
// if (password == conpass){

// window.location.href = "login.html";

// }else{
// alert("confirm password and password didn't match")
// }

// }
// }


function aakash (){

    let user;
    
    if (JSON.parse(localStorage.getItem("user_details"))) {
         user = JSON.parse(localStorage.getItem("user_details"))
      } else {
           user = [];
    }

    // user = JSON.parse(localStorage.getItem("user_details")) ?? [];


const First_name = document.getElementById("first_name").value;
const last_name = document.getElementById("last_name").value;
const email = document.getElementById("gmail").value;
const password = document.getElementById("password").value;
const conpass = document.getElementById("conpassword").value;

let res;
if (password==conpass) {
    if (user.length==0){
        res=0;
    }
    for (let i = 0; i < user.length; i++) {
        if (user[i]["user_email"]==email) {
            res = 1; 
       
           break;
        }else{
            res = 0;
        }
            
        }
    
}else{
    alert("password are not same")
}



if(res === 1){
    alert("email is already is taken")
}
if (res === 0){
    let user_data;
    user_data = {
        "user_name":First_name,
        "second_name":last_name,
        "user_email":email,
        "user_Password":password,
        "district":"",
        "mobile_number":"",
        "pincode":""
        }

        user.push(user_data);
            localStorage.setItem("user_details",JSON.stringify(user));
            
            window.location.href="./login.html";
}





// if(user!== []){
//     for (let i = 0; i < user.length; i++) {
//         if (email==user[i]["user_email"]){
//             alert ("email already exists");
          

//         }
        
//     }
// }else{
//    
//     break;
// }
}


  
  