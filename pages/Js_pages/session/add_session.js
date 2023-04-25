let sessionsitems = JSON.parse(localStorage.getItem("sessioninfo"))

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  new_session();
});

let delete_sessions = document.getElementById("delete_session");
delete_sessions.addEventListener("click", (e) => {
  e.preventDefault();
  delete_session()
});

function new_session(){
  let expert_name = document.getElementById("expert_name").value;
  let cover_img = document.getElementById("cover_img").value;
  let occupation = document.getElementById("Occuption").value;
  let content = document.getElementById("content").value;
  let videolink = document.getElementById("video").value;

  let unique_id = new Date().getTime();

  console.log(unique_id);

   let newsession = {
   person_name:expert_name,
   images:{link:cover_img,alt:expert_name},
   occupation:occupation,
   content:content,
   rating:0,
   no_ratings:"",
   iframe:videolink,
   id: sessionsitems.length,
   status:true
   
    
  }
let number =0
  for (let i = 0; i < sessionsitems.length; i++) {
        
    if (sessionsitems[i].expert_name===expert_name) {
        alert("therapist already exists")
    }else{
        number =1
    }
 }

 if (number==1) {
    
  sessionsitems.push(newsession);
  localStorage.setItem("sessioninfo", JSON.stringify(sessionsitems));
 }




}

function delete_session(){




}