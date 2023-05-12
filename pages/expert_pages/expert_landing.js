let editBtn = document.getElementById("edit_btn");
editBtn.addEventListener("click", (e) => {
  e.preventDefault();
  editBtn.style.display = "none"
  savebtn.style.display = "block"
  disabled_input()
  
});



let savebtn = document.getElementById("save_btn");
savebtn.style.display = "none"
savebtn.addEventListener("click", ()=>{
  editBtn.style.display = "block"
  savebtn.style.display = "none"
  editProfile();
})
let remove = document.getElementById("delete_btn");
remove.addEventListener("click",(e) =>{
    e.preventDefault();
    delete1();
})





let user_details = JSON.parse(localStorage.getItem("sessioninfo"));

let details = localStorage.getItem("details");
let result = user_details.find(function (value) {
    return value.login  === details;
  });


my_profile_btn.click()


let my_events_btn = document.getElementById("my_events");
let my_events_box = document.getElementById("my_events_box");

my_events_btn.addEventListener("click",function (){
  for (let i = 0; i < all_divs.length; i++) {
    all_divs[i].style.display = "none" ; 
  }
  my_events_box.style.display="block"
})

let my_session_btn = document.getElementById("my_session");
let my_session_box = document.getElementById("my_session_page")
my_session_btn.addEventListener("click",function () {
  for (let i = 0; i < all_divs.length; i++) {
    all_divs[i].style.display = "none" ; 
  }
  my_session_box.style.display="block"
})



// sessionsitems.forEach(function (value) {

//  return value.person_name === search;
// });

// let personal_expert = result.per_exp_id;
let session_details = JSON.parse(localStorage.getItem("sessioninfo"));


// let sessions = session_details.find(function (value) {
//     return value.id === personal_expert;
//   });

let sessions = 0;

for (let i = 0; i < session_details.length; i++) {
if (session_details[i].id == personal_expert) {
  sessions = session_details[i];
}  
}



const expert_img = document.getElementById("expert_img");
expert_img.src = sessions.images.link;

const expert_name = document.getElementById("expert_name");
expert_name.innerText = sessions.person_name;

const occupation = document.getElementById("occupation");
occupation.innerText = sessions.occupation;


let appoitement_list = JSON.parse(localStorage.getItem("appoitement_list_srt"))

for (let i = 0; i < appoitement_list.length; i++) {
  console.log(appoitement_list[i].expert_id,result.id);

  if (appoitement_list[i].expert_id== result.id) {
  console.log(appoitement_list[i].expert_id,result.id);
    let upcoming_appoitment_list = document.createElement("upcoming_appoitment_list");
    upcoming_appoitment_list.setAttribute("class","upcoming_appoitment_list");

    upcoming_appoitment_list.innerHTML=`  <div class="betw">
    <div><b>Date:</b><span id="ap_date">${appoitement_list[i].appoitment_date}</span> </div>
    <div> <b>Slot:</b><span id="ap_time">${appoitement_list[i].time_slot}</span> </div></div>

    <div class="betw">
        <div><b>Mode:</b><span id="mode">${appoitement_list[i].type}</span> </div>

        <div><b>catagory:</b><span id="mode">${appoitement_list[i].catagory
        }</span> </div>

        
    </div>

    <div class="betw">
        <div><b>Mobile_no:</b><span id="mode">${appoitement_list[i].number}</span> </div>

        <div><b>Email:</b><span id="mode">${appoitement_list[i].user_email
        }</span> </div>`;
        document.querySelector(".upcoming_appoitment").append(upcoming_appoitment_list)
}
  
}









// user_details[ind].user_name=document.getElementById("user-firstname").value
// user_details[ind].second_name=document.getElementById("user-lastname").value;
// user_details[ind].district=document.getElementById("district").value;
// user_details[ind].mobile_number=document.getElementById("number").value;
// user_details[ind].pincode=document.getElementById("pincode").value;
// user_details


 
// document.getElementsByClassName("name");



// // arr[ind] = user_data;         


// localStorage.setItem("user_details",JSON.stringify(user_details));

// }


function delete1(){

let ind =user_details.findIndex(function (value){
return value.user_email === details});
console.log(ind);

if(user_details[ind].user_email==details){

localStorage.setItem("details","");
window.location.href="./login.html"
}
}



