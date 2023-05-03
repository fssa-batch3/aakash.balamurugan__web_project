let a = JSON.parse(localStorage.getItem("info"));


// Initialize result with null
let result = null;
let result_index = null;


let url = window.location.search;
let urlparams = new URLSearchParams(url);
let search = urlparams.get("name");

for (let i = 0; i < a.length; i++) {
  console.log("1");
  if (search==a[i].title) {
    result=a[i];
    result_index = i;

  }
  
}
console.log(result);

let body = document.getElementById("main");

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
venueLink.href = "tickets.html";
const venueConfirm = document.createElement("span");
venueConfirm.classList.add("confirm");
venueConfirm.innerText = "confirm booking";
venueLink.appendChild(venueConfirm);
const venueWrapper = document.createElement("div");
venueWrapper.classList.add("venue");
venueWrapper.innerHTML = `<p>
<b>date:</b>${result.date.date}
<br>
<b>Time:</b>${result.date.time}<br>
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

// let comt
// if (localStorage.getItem("comments")) {
//     comt =JSON.parse(localStorage.getItem("comments"))
// } else {
//    comt = [{
//         comment : "aakash",
//         user : "wanted",

//        },{
//         comment : "nithalan",
//         user : "oneheart",

//        },{
//         comment : "isac",
//         user : "rcb",

//        }];
// }

//     let comt = JSON.parse(localStorage.getItem("comments")) ?? [];

// let potti = document.getElementById("comment_box");
// function crud() {
//   let comment = document.getElementById("name").value;
// let details = localStorage.getItem("details");
//   let coms = {
//     comment: comment,
//     id: Math.floor(Math.random() * Date.now()),
//     user: details
//   };

//   comt.push(coms);

//    for(let i=0;i<comt.length;i++){

//  let box = document.createElement("div");
// box.setAttribute("class" , "comments"  );
// potti.append(box);

// let user_name = document.createElement("h5");
// user_name.setAttribute("id" ,"paraa")
// user_name.innerHTML= comt[i].user;
// box.append(user_name);

// let para = document.createElement("p");
// para.setAttribute("id" ,"para")
// para.innerHTML= comt[i].comment;
// box.append(para);

// let edit = document.createElement("button");
// edit.setAttribute("class" , "edit");
// edit.setAttribute("value" , comt[i].id);
// edit.setAttribute("onclick" , "upadate()")
// edit.innerHTML="Update";
// box.append(edit);

// let delete_btn = document.createElement("button");
// delete_btn.setAttribute("class" , "delete");
// delete_btn.setAttribute("value", comt[i].id);
// delete_btn.innerHTML="delete";
// box.append(delete_btn);

//    }

//   localStorage.setItem("comments", JSON.stringify(comt));
//   document.getElementById("name").value="";

// }

// function list_comments() {
//   potti.innerHTML = ""; // Clear comment_box element

//   comt.forEach((item, index) => {

//     let box = document.createElement("div");
//     box.setAttribute("class", "comments");
//     potti.append(box);

//     let user_mail = document.createElement("h5");
//     user_mail.setAttribute("id", "para");
//     user_mail.innerText = item.user;
//     box.append(user_mail);

//     let user_name = document.createElement("p");
//     user_name.setAttribute("id", "paraa");
//     user_name.innerText = item.comment;
//     box.append(user_name);

//     let edit = document.createElement("button");
//     edit.setAttribute("class", "edit");
//     edit.setAttribute("onclick", `update(${item.id})`);
//     edit.innerHTML = "Update";
//     box.append(edit);

//     let delete_btn = document.createElement("button");
//     delete_btn.setAttribute("class", "delete");
//     delete_btn.setAttribute("onclick", `deletecom(${index})`);

//     delete_btn.innerHTML = "delete";
//     box.append(delete_btn);
//   });
// }

// // function update(item) {
// //   comt.find(function (obj) {
// //     if (obj.id === item) {
// //       document.getElementById("name").value = obj.comment;

// //       let sum_button = document.getElementById("button");
// //       sum_button.value = obj.id
// //     }
// //   });
// // }

// // function deletecom(index){

// //    comt.splice(index, 1);

// //    localStorage.setItem("comments", JSON.stringify(comt));

// //    potti.innerHTML = " ";

// //    list_comments();
// // }

// list_comments();

let comt = JSON.parse(localStorage.getItem("comments")) ?? [];

let comment_list = document.getElementById("comment_box");

let sum_button = document.getElementById("button");

sum_button.addEventListener("click", (e) => {
  e.preventDefault();
  if ( document.getElementById("name").value!=="") {
    comment_list_fun();
  }
});

for (let i = 0; i < comt.length; i++) {
  let box = document.createElement("div");
  box.setAttribute("class", "comments");
  comment_list.append(box);

  let user_name = document.createElement("h5");
  user_name.setAttribute("id", "paraa");
  user_name.innerHTML = comt[i].user;
  box.append(user_name);

  let para = document.createElement("p");
  para.setAttribute("id", "para");
  para.setAttribute("value", comt[i].id);
  para.innerHTML = comt[i].comment;
  box.append(para);

  let active_user = localStorage.getItem("details");

if (comt[i].user==active_user) {
  
  let edit = document.createElement("button");
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
  let comment_input = document.getElementById("name").value;

  if (sum_button.innerText == "Sumbit") {
    let active_user = localStorage.getItem("details");

    let comt_info = {
      comment: comment_input,
      id: comt.length,
      user: active_user,
    };

    comt.push(comt_info);

    for (let i = comt.length - 1; i < comt.length; i++) {
      let box = document.createElement("div");
      box.setAttribute("class", "comments");
      comment_list.append(box);

      let user_name = document.createElement("h5");
      user_name.setAttribute("id", "paraa");
      user_name.innerHTML = comt[i].user;
      box.append(user_name);

      let para = document.createElement("p");
      para.setAttribute("id", "para");
      para.setAttribute("value", comt[i].id);
      para.innerHTML = comt[i].comment;
      box.append(para);

      let edit = document.createElement("button");
      edit.setAttribute("id", "edit");
      edit.setAttribute("value", comt[i].id);
      // edit.setAttribute("onclick", "update()");
      edit.innerHTML = "Update";
      box.append(edit);
    }

    // let delete_btn = document.createElement("button");
    // delete_btn.setAttribute("id", "delete");
    // delete_btn.setAttribute("value", comt[i].id);
    // delete_btn.innerHTML = "delete";
    // box.append(delete_btn);
  }
  if (sum_button.innerText == "Update") {
    let comment_input = document.getElementById("name").value;

    // for (let i = 0; i < comt.length; i++) {

    console.log("1");
    // if (sum_button.value===comt[i].id) {
    // console.log(sum_button.value , comt[i].id);
    comt[sum_button.value].comment = comment_input;

    let comt_para = document.querySelectorAll("#para");

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
  }

  
  document.getElementById("name").value = "";
}

// let delete_btn = document.getElementById("delete");

// let edit_btn = document.getElementById("edit");

// delete_btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   Delete_comt_fun();
// });

let delete_btn_all = document.querySelectorAll("#delete");

let edit_btn_all = document.querySelectorAll("#edit");

for (let i = 0; i < edit_btn_all.length; i++) {
  edit_btn_all[i].addEventListener("click", (e) => {
    e.preventDefault();
    Edit_comt_fun(i);
  });
}

function Edit_comt_fun(index) {
  let comment_input = document.getElementById("name");
  sum_button.setAttribute("value", edit_btn_all[index].value);
  for (let i = 0; i < comt.length; i++) {
    if (edit_btn_all[index].value == comt[i].id) {
      comment_input.setAttribute("value", comt[i].comment);
      sum_button.innerText = "Update";
    }
  }
}
