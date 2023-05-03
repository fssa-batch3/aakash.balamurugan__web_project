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


   
let person_name = document.getElementById("name");
person_name.innerHTML = result.person_name;

   
let person_name2 = document.getElementById("name2");
person_name2.innerHTML = result.person_name;

let content = document.getElementById("span");
content.innerText = result.content + result.content+result.content; 

let youtube = document.getElementById("youtube");
youtube.src = result.iframe;



let info_img = document.getElementById("info_img");
info_img.src = result.images.link;
info_img.alt = result.images.alt;


let appoitement = document.getElementById("appoitement");
let appo = document.querySelector(".booking_session")


appoitement.addEventListener("click",function (e){
  e.preventDefault();

 
 appo.style.display="block";
 body.style.backgroundColor = "black"
 
  
})

const cancel1 = document.getElementById("cancel");

cancel1.addEventListener("click",function (e){
  e.preventDefault();

 
 appo.style.display="none";

  
})



let profile_details=JSON.parse(localStorage.getItem("sessioninfo"));
let details=JSON.parse(localStorage.getItem("details"));
let res;
profile_details.find(value=>{
   if(value.user_email==details.user_email){ 
      res=value;
       console.log("res");
return res;
   }
   else{
       return res=0;
   }
})

if(res){
   document.getElementById("name").value=res["user_name"];
   document.getElementById("gmail").value=res.user_email;
}
else{
 
}


const confirm = document.getElementById("sumbit_confirm");
confirm.addEventListener("click",function (e){
   sumbit_confirm()
   e.preventDefault();}
   )

function sumbit_confirm(){

   window.location.href="./../visit_conformation.html"
}

 


