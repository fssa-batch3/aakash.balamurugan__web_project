let sessionsitems = JSON.parse(localStorage.getItem("sessioninfo"));

let url =window.location.search;
    let urlparams = new URLSearchParams(url);
    let search = urlparams.get("name");

    let result ;
   // sessionsitems.forEach(function (value) {

      //  return value.person_name === search;
     // });

  sessionsitems.forEach((e)=>{
       
    if(e.person_name==search){
        return result=e;
    }
  })

  
let user_details = JSON.parse(localStorage.getItem("user_details"));

let details = localStorage.getItem("details");
let active_user_expert =0;

for (let i = 0; i < user_details.length; i++) {
if (user_details[i].user_email==details) {
  active_user_expert = user_details[i].per_exp_id;
  // console.log(user_details[i].per_exp_id);

}  
}


let selected_expert = result.id;

let Appoitment_link =document.getElementById("Appoitment");

Appoitment_link.addEventListener("click", function (e){
e.preventDefault();
if (active_user_expert == result.id) {
  window.location.href="./Appoitment_booking.html?selected_expert="+selected_expert;
  // console.log("1");
}else if (active_user_expert == 0) {
  window.location.href="./Appoitment_booking.html?selected_expert="+selected_expert; 
}

else if(active_user_expert !== result.id){
  alert("Please make appoitiment with your personal expert")
  // console.log("2");
}
})






 const expert_name = document.getElementById("expert_name");
 expert_name.innerText = result.person_name;

 const expert_img = document.getElementById("expert_img");
 expert_img.src= result.images.link;

 const occupation = document.getElementById("occupation");
 occupation.innerText=result.occupation;

 
 const expert_name_para = document.getElementById("expert_name_para");
 expert_name_para.innerText = result.person_name;

 const summary = document.getElementById("summary_cont");
 summary.innerText = result.content

 const education_li = document.getElementById("education_li");
 education_li.innerHTML = result.education;

 const exprience_li = document.getElementById("exprience_li");
 exprience_li.innerHTML = result.exprience;



//   