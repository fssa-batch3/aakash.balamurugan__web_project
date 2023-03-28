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
      console.log(result)

   
let person_name = document.getElementById("name");
person_name.innerHTML = result.person_name;

   
let person_name2 = document.getElementById("name2");
person_name2.innerHTML = result.person_name;

let content = document.getElementById("span");
content.innerText = result.content + result.content+result.content; 

let youtube = document.getElementById("youtube");
youtube.src = result.iframe;



let info_img = document.getElementById("info_img");
info_img.src = "../"+result.images.link;
info_img.alt = result.images.alt;


let appoitement = document.getElementById("appoitement");




