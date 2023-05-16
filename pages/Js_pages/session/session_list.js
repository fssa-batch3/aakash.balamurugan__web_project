const session = document.getElementById("sessionbox");

const sessionsitems = JSON.parse(localStorage.getItem("sessioninfo"));


const user_details = JSON.parse(localStorage.getItem("user_details"));

const details = localStorage.getItem("details");
let active_user_expert = 0;

for (let i = 0; i < user_details.length; i++) {
  if (user_details[i].user_email == details) {
    active_user_expert = user_details[i].per_exp_id;
    // console.log(user_details[i].per_exp_id);
  }
}



for (let i = 0; i < sessionsitems.length; i++) {
  
  const box = document.createElement("div");
  box.classList.add("box");
  if (sessionsitems[i].id==active_user_expert) {
    let personal_box = document.getElementById("personal")
    personal_box.append(box);
  }
  session.append(box);

  const flex = document.createElement("div");
  flex.classList.add("flex");
  box.append(flex);

  const pic = document.createElement("div");
  pic.classList.add("pic"); 
  flex.append(pic);

  const link = document.createElement("a");
  link.setAttribute(
    "href",
    `./sessioninfo.html?name=${sessionsitems[i].person_name}`
  );
  pic.append(link);

  const photo = document.createElement("img");
  photo.setAttribute("src", sessionsitems[i].images.link);
  photo.setAttribute("alt", sessionsitems[i].images.alt);
  link.append(photo);

  const detail = document.createElement("div");
  detail.classList.add("detail");
  flex.append(detail);

  const link4 = document.createElement("a");
  link4.setAttribute(
    "href",
    `./sessioninfo.html?name=${sessionsitems[i].person_name}`
  );
  detail.append(link4);

  const person = document.createElement("h1");
  person.innerHTML = sessionsitems[i].person_name;
  link4.append(person);

  const occupation = document.createElement("div");
  occupation.classList.add("occupation");
  detail.append(occupation);

  const link2 = document.createElement("a");
  link2.setAttribute(
    "href",
    `./sessioninfo.html?name=${sessionsitems[i].person_name}`
  );
  occupation.append(link2);

  const para = document.createElement("p");
  const span = document.createElement("span");
  span.innerHTML = "Occupation";
  para.innerText = sessionsitems[i].occupation;

  link2.append(span);
  link2.append(para);

  const person_detail = document.createElement("div");
  person_detail.classList.add("person_detail");
  detail.append(person_detail);

  const link3 = document.createElement("a");
  link3.setAttribute(
    "href",
    `./sessioninfo.html?name=${sessionsitems[i].person_name}`
  );
  occupation.append(link3);

  // let para2 = document.createElement("p");
  // let span2 = document.createElement("span");
  // span2.innerHTML=sessionsitems[i] .person_name;
  // para2.innerText= sessionsitems[i].content;

  // para2.prepend(span2);
  // link3.append(para2);
}
