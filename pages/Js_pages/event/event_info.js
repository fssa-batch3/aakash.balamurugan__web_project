const a = JSON.parse(localStorage.getItem("info"));

// Initialize result with null
let result = null;
let result_index = null;

const url = window.location.search;
const urlparams = new URLSearchParams(url);
const search = urlparams.get("name");

for (let i = 0; i < a.length; i++) {
  console.log("1");
  if (search == a[i].title) {
    result = a[i];
    result_index = i;
  }
}

const body = document.getElementById("main");

// Create the elements
const eventTitle = document.createElement("h1");
eventTitle.innerText = result.title;
eventTitle.classList.add("eventname");

const eventContent = document.createElement("div");
eventContent.classList.add("event_content");

const eventImage = document.createElement("img");
eventImage.src = result.images.link;
eventImage.alt = result.images.alt;
const eventImageWrapper = document.createElement("div");
eventImageWrapper.appendChild(eventImage);

const venueLink = document.createElement("a");
venueLink.href = "#";
const venueConfirm = document.createElement("span");
venueConfirm.classList.add("confirm");
venueConfirm.innerText = "confirm booking";
venueLink.appendChild(venueConfirm);
const venueWrapper = document.createElement("div");
venueWrapper.classList.add("venue");
venueWrapper.innerHTML = `<p>
<b>date:</b>${result.date.date}
<br>
<b>Time:</b>${result.date.Time}<br>
<b>Venue:</b>${result.date.venue}
</p>`;
venueWrapper.appendChild(venueLink);

const eventBrief = document.createElement("div");
eventBrief.classList.add("brief_on_event");
const eventBriefTitle = document.createElement("h1");
eventBriefTitle.innerHTML = result.title;
eventBrief.appendChild(eventBriefTitle);

const eventBriefParagraph = document.createElement("p");
eventBriefParagraph.innerText = result.para;
eventBrief.appendChild(eventBriefParagraph);

const about_event = document.createElement("b");
about_event.innerText = "About the event";
eventBrief.appendChild(about_event);

const about_event_line = document.createElement("p");
about_event_line.innerText = result.about;
eventBrief.appendChild(about_event_line);

const eventMoreImages = document.createElement("div");
eventMoreImages.classList.add("moreimg");
const eventMoreImagesTitle = document.createElement("b");
eventMoreImagesTitle.textContent = "More images at the event :";
eventMoreImages.appendChild(eventMoreImagesTitle);
const eventMoreImages1 = document.createElement("img");
eventMoreImages1.src = "../../../assets/img/events/other_event_1.jpg";
eventMoreImages1.alt = "";
eventMoreImages.appendChild(eventMoreImages1);
const eventMoreImages2 = document.createElement("img");
eventMoreImages2.src = "../../../assets/img/events/other_event_2.jpg";
eventMoreImages2.alt = "";
eventMoreImages.appendChild(eventMoreImages2);

const eventFlex = document.createElement("div");
eventFlex.classList.add("flex");
eventFlex.appendChild(eventBrief);
eventFlex.appendChild(eventMoreImages);

// Append the elements to the container
const container = document.createElement("div");
container.appendChild(eventTitle);
container.appendChild(eventContent);
container.appendChild(eventImageWrapper);
eventContent.appendChild(eventImageWrapper);
eventContent.appendChild(venueWrapper);
container.appendChild(eventFlex);

// Add the container to the DOM

body.appendChild(container);


const comt = a[result_index].comment

const comment_list = document.getElementById("comment_box");

const sum_button = document.getElementById("button");

sum_button.addEventListener("click", (e) => {
  e.preventDefault();
  if (document.getElementById("name").value !== "") {
    comment_list_fun();
  }
});

for (let i = 0; i < comt.length; i++) {
  const box = document.createElement("div");
  box.setAttribute("class", "comments");
  comment_list.append(box);

  const user_name = document.createElement("h5");
  user_name.setAttribute("id", "paraa");
  user_name.innerHTML = comt[i].user;
  box.append(user_name);

  const para = document.createElement("p");
  para.setAttribute("id", "para");
  para.setAttribute("value", comt[i].id);
  para.innerHTML = comt[i].comment;
  box.append(para);

  const active_user = localStorage.getItem("details");

  if (comt[i].user == active_user) {
    const edit = document.createElement("button");
    edit.setAttribute("id", "edit");
    edit.setAttribute("value", comt[i].id);
    // edit.setAttribute("onclick", "upadate()");
    edit.innerHTML = "Update";
    box.append(edit);
  }

  // let delete_btn = document.createElement("button");
  // delete_btn.setAttribute("class", "delete");
  // delete_btn.setAttribute("value", comt[i].id);
  // delete_btn.innerHTML = "delete";
  // box.append(delete_btn);
}

function comment_list_fun() {
  const comment_input = document.getElementById("name").value;

  if (sum_button.innerText == "Sumbit") {
    const active_user = localStorage.getItem("details");

    const comt_info = {
      comment: comment_input,
      id: comt.length,
      user: active_user,
    };

    comt.push(comt_info);

    for (let i = comt.length - 1; i < comt.length; i++) {
      const box = document.createElement("div");
      box.setAttribute("class", "comments");
      comment_list.append(box);

      const user_name = document.createElement("h5");
      user_name.setAttribute("id", "paraa");
      user_name.innerHTML = comt[i].user;
      box.append(user_name);

      const para = document.createElement("p");
      para.setAttribute("id", "para");
      para.setAttribute("value", comt[i].id);
      para.innerHTML = comt[i].comment;
      box.append(para);

      const edit = document.createElement("button");
      edit.setAttribute("id", "edit");
      edit.setAttribute("value", comt[i].id);
      // edit.setAttribute("onclick", "update()");
      edit.innerHTML = "Update";
      box.append(edit);
    }

    a[result_index].comment= comt;

localStorage.setItem("info",JSON.stringify(a))
    // let delete_btn = document.createElement("button");
    // delete_btn.setAttribute("id", "delete");
    // delete_btn.setAttribute("value", comt[i].id);
    // delete_btn.innerHTML = "delete";
    // box.append(delete_btn);
  }
  if (sum_button.innerText == "Update") {
    const comment_input = document.getElementById("name").value;

    // for (let i = 0; i < comt.length; i++) {

    // if (sum_button.value===comt[i].id) {
    // console.log(sum_button.value , comt[i].id);
    comt[sum_button.value].comment = comment_input;

    const comt_para = document.querySelectorAll("#para");

    // for (let i = 0; i < comt.length; i++) {
    // if (comt_para[i] == sum_button.value) {
    console.log(comt_para[sum_button.value]);
    comt_para[sum_button.value].innerText = comment_input;
    // }
    // }
    sum_button.value = "";
    sum_button.innerText == "Sumbit";
    //  }
    //  }

    a[result_index].comment= comt;

localStorage.setItem("info",JSON.stringify(a))
  }

  document.getElementById("name").value = "";
  a[result_index].comment= comt;

localStorage.setItem("info",JSON.stringify(a))

}

// let delete_btn = document.getElementById("delete");

// let edit_btn = document.getElementById("edit");

// delete_btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   Delete_comt_fun();
// });

const delete_btn_all = document.querySelectorAll("#delete");

const edit_btn_all = document.querySelectorAll("#edit");

for (let i = 0; i < edit_btn_all.length; i++) {
  edit_btn_all[i].addEventListener("click", (e) => {
    e.preventDefault();
    Edit_comt_fun(i);
  });
}

function Edit_comt_fun(index) {
  const comment_input = document.getElementById("name");
  sum_button.setAttribute("value", edit_btn_all[index].value);
  for (let i = 0; i < comt.length; i++) {
    if (edit_btn_all[index].value == comt[i].id) {
      comment_input.setAttribute("value", comt[i].comment);
      sum_button.innerText = "Update";
    }
  }
}


// ticket details auto fill
let user_array = JSON.parse(localStorage.getItem("user_details"));
let details = localStorage.getItem("details")

let active_user = null;
for (let i = 0; i < user_array.length; i++) {
if (user_array[i].user_email===details) {
  active_user = user_array[i]
}  
}

document.querySelector("#attendee_name").value=active_user.user_name
document.querySelector("#attendee_email").value=active_user.user_email


let ticket_div = document.querySelector(".ticketbox");

ticket_div.style.display="none";

let ticket_btn = document.querySelector(".confirm");

ticket_btn.addEventListener("click",function () {
  ticket_div.style.display="block";
  document.querySelector("main").setAttribute("style","filter:blur(8px)")
  document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
})


let event_list_lst  ;
if (localStorage.getItem("event_list_srt")) {

  event_list_lst = JSON.parse(localStorage.getItem("event_list_srt"))
}else{
  event_list_lst =[];
}

let event_attendee_det =document.querySelector("#event_attendee_det");

event_attendee_det.addEventListener("submit", function (e) {
e.preventDefault();

console.log("aakash");

  let event_mail = document.querySelector("#attendee_email").value;
  let attendee_name = document.querySelector("#attendee_name").value;
  let event_id     = result.event_id;
  let user_id      = active_user.user_id;
  let event_book_id = event_list_lst.length +1

let event_obj = {
  event_id:event_id,
  user_id:user_id,
  event_book_id: event_book_id,
  attendee_name:attendee_name,
  event_mail:event_mail
}

let aakash = 0
for (let i = 0; i < event_list_lst.length; i++) {

  if (event_list_lst[i].event_id==event_id) {
    if (event_list_lst[i].user_id==user_id) {
      aakash= 1;
        alert("cannot booked"); 
    }
  }  
}

if(aakash==0){
    alert("yes")
    event_list_lst.push(event_obj);
    aakash =2 ;
    localStorage.setItem("event_list_srt",JSON.stringify(event_list_lst));
    window.location.href="./event_list.html";
}

})


let close_div = document.querySelector(".close")


close_div.addEventListener("click",function () {

  ticket_div.style.display="none";
  document.querySelector("main").removeAttribute("style")
  document.documentElement.style.overflow = 'scroll';  // firefox, chrome
  document.body.scroll = "yes"; // ie only
})





