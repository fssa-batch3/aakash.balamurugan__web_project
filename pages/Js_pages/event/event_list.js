let info = JSON.parse(localStorage.getItem("info"));

for (let i = 0; i < info.length; i++) {

  if (info[i].status === true) {
  
    

    let redirect = document.createElement("a");
    redirect.setAttribute("href","../events/eventinfo.html?name=" + info[i]["title"]);
    document.body.append(redirect);

    let div_event = document.createElement("div");
    div_event.setAttribute("class", "event");
    redirect.append(div_event);

    let div_event_box = document.createElement("div");
    div_event_box.setAttribute("class", "eventbox");
    div_event.append(div_event_box);

    let div_onuila = document.createElement("div");
    div_onuila.setAttribute("class", "");
    div_event_box.append(div_onuila);

    let img_photo = document.createElement("img");
    img_photo.setAttribute("src", info[i].images.link);
    img_photo.setAttribute("alt", info[i].images.alt);
    div_onuila.append(img_photo);

    let div_none = document.createElement("div");
    div_none.setAttribute("class", "");
    div_event_box.append(div_none);

    let h2_title = document.createElement("h2");
    h2_title.innerHTML = info[i].title;
    div_none.append(h2_title);

    let p_para = document.createElement("p");
   
    p_para.innerText = info[i].para;
    div_none.append(p_para);

    let div_nothing = document.createElement("div");
    div_nothing.setAttribute("class", "");
    div_event_box.append(div_nothing);

    let venue = document.createElement("h4");
    venue.innerHTML = `Date :  ${info[i].date.date} <br><br>
    Time : ${info[i].date.Time}<br> <br>
    Venue :${info[i].date.venue}`;
    // venue.innerText = info[i].date.Time +`<br>` info[i].date.date `<br>`+  ${info[i].date.Time };
    div_nothing.append(venue);
  }
}