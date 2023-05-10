let session = document.getElementById("sessionbox");

    let sessionsitems =JSON.parse( localStorage.getItem("sessioninfo"));

    
  
  
  
   for(let i=0;i<sessionsitems.length;i++){
    let box = document.createElement("div");
    box.classList.add("box");
    session.append(box);

    let flex = document.createElement("div");
    flex.classList.add("flex");
    box.append(flex);

    let pic = document.createElement("div");
    pic.classList.add("pic");
    flex.append(pic);

    let link = document.createElement("a");
    link.setAttribute("href", "./sessioninfo.html?name="+ sessionsitems[i].person_name)
    pic.append(link);

    let photo = document.createElement("img");
    photo.setAttribute("src", sessionsitems[i].images.link);
    photo.setAttribute("alt", sessionsitems[i].images.alt);
    link.append(photo);

    let detail = document.createElement("div");
    detail.classList.add("detail");
flex.append(detail);

let link4 = document.createElement("a");
link4.setAttribute("href","./sessioninfo.html?name="+ sessionsitems[i].person_name);
detail.append(link4);

let person = document.createElement("h1");
person.innerHTML = sessionsitems[i].person_name;
link4.append(person);

let occupation = document.createElement("div");
occupation.classList.add("occupation");
detail.append(occupation);

let link2 = document.createElement("a");
link2.setAttribute("href","./sessioninfo.html?name="+ sessionsitems[i].person_name);
occupation.append(link2);

let para = document.createElement("p");
let span = document.createElement("span");
span.innerHTML="Occupation";
para.innerText=sessionsitems[i].occupation

link2.append(span);
link2.append(para);

let person_detail = document.createElement("div");
person_detail.classList.add("person_detail");
detail.append(person_detail);

let link3 =document.createElement("a");
link3.setAttribute("href","./sessioninfo.html?name="+ sessionsitems[i].person_name)
occupation.append(link3);

// let para2 = document.createElement("p");
// let span2 = document.createElement("span");
// span2.innerHTML=sessionsitems[i] .person_name;
// para2.innerText= sessionsitems[i].content;

// para2.prepend(span2);
// link3.append(para2);

   }

 

