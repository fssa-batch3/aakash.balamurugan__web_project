let a = (JSON.parse(localStorage.getItem("info")));
    

let arr =[{"name" : "Phoenix Books Virtual Poetry Open Mic" , "event" : a[0]},{"name" : "It's All Connected - Open Mic by Pooja" , "event" : a[1]},{"name" : "Spot On - More than an Open Mic" , "event": a[2]}]



let url =window.location.search;
let urlparams = new URLSearchParams(url);
let search = urlparams.get("name");
let result;
  a.forEach((e)=>{
   
if(e.title==search){
    return result=e;
}
})
  console.log(result)

let body = document.getElementById("main");



// Create the elements
const eventTitle = document.createElement('h1');
eventTitle.innerText = result.title
eventTitle.classList.add('eventname');

const eventContent = document.createElement('div');
eventContent.classList.add('event_content');

const eventImage = document.createElement('img');
eventImage.src = result.images.link;
eventImage.alt =  result.images.alt;
const eventImageWrapper = document.createElement('div');
eventImageWrapper.appendChild(eventImage);



const venueLink = document.createElement('a');
venueLink.href = 'tickets.html';
const venueConfirm = document.createElement('span');
venueConfirm.classList.add('confirm');
venueConfirm.innerText = "confirm booking"
venueLink.appendChild(venueConfirm);
const venueWrapper = document.createElement('div');
venueWrapper.classList.add('venue');
venueWrapper.innerHTML =`<p>
<b>date:</b>${result.date.date}
<br>
<b>time:</b>${result.date.time}<br>
<b>date:</b>${result.date.venue}
</p>`
venueWrapper.appendChild(venueLink);

const eventBrief = document.createElement('div');
eventBrief.classList.add('brief_on_event');
const eventBriefTitle = document.createElement('h1');
eventBriefTitle.innerHTML= result.title;
eventBrief.appendChild(eventBriefTitle);

const eventBriefParagraph = document.createElement('p');
eventBriefParagraph.innerText = result.para;
eventBrief.appendChild(eventBriefParagraph);

const about_event = document.createElement('b');
about_event.innerText = "About the event";
eventBrief.appendChild(about_event);


const about_event_line = document.createElement('p');
about_event_line.innerText = result.about;
eventBrief.appendChild(about_event_line);

const eventMoreImages = document.createElement('div');
eventMoreImages.classList.add('moreimg');
const eventMoreImagesTitle = document.createElement('b');
eventMoreImagesTitle.textContent = 'More images at the event :';
eventMoreImages.appendChild(eventMoreImagesTitle);
const eventMoreImages1 = document.createElement('img');
eventMoreImages1.src = '../../assets/img/events/other_event_1.jpg';
eventMoreImages1.alt = '';
eventMoreImages.appendChild(eventMoreImages1);
const eventMoreImages2 = document.createElement('img');
eventMoreImages2.src = '../../assets/img/events/other_event_2.jpg';
eventMoreImages2.alt = '';
eventMoreImages.appendChild(eventMoreImages2);

const eventFlex = document.createElement('div');
eventFlex.classList.add('flex');
eventFlex.appendChild(eventBrief);
eventFlex.appendChild(eventMoreImages);

// Append the elements to the container
const container = document.createElement('div');
container.appendChild(eventTitle);
container.appendChild(eventContent);
container.appendChild(eventImageWrapper);
eventContent.appendChild(eventImageWrapper);
eventContent.appendChild(venueWrapper);
container.appendChild(eventFlex);

// Add the container to the DOM

body.appendChild(container);



function crud(){

        
    let potti = document.getElementById("comment_box");

 const comment = document.getElementById("name").value;
 

 let box = document.createElement("div");
 box.setAttribute("class" , "comments"  );
 potti.append(box);

 let para = document.createElement("p");
 para.setAttribute("id" ,"para")
 para.innerHTML= comment;
 box.append(para);

 let edit = document.createElement("button");
 edit.setAttribute("class" , "edit");
 edit.setAttribute("onclick" , "edit()")
 edit.innerHTML="Edit";
 box.append(edit);

 let delete_btn = document.createElement("button");
 delete_btn.setAttribute("class" , "delete");
 
 delete_btn.innerHTML="delete";
 box.append(delete_btn);






 document.getElementById("name").value ="";




 } 

 function edit(){

   
     let paraa=document.getElementById("para");

     document.getElementById("name").value =paraa.innerText;

     console.log(paraa.innerHTML)

 

 }


