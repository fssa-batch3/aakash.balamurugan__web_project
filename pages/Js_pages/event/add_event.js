let info = JSON.parse(localStorage.getItem("info"));

      let form = document.querySelector("form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        new_event();
      });

      function new_event() {
        let event_name = document.getElementById("event_name").value;
        let cover_img = document.getElementById("cover_img").value; 
        let venue = document.getElementById("venue").value;
        let time = document.getElementById("time").value;
        let date = document.getElementById("date").value;
        let intro = document.getElementById("intro").value;
        let about = document.getElementById("about").value;
        let more_img_1 = document.getElementById("more_img_1").value;
        let more_img_2 = document.getElementById("more_img_2").value;
        let eventnew = {
          title: event_name,
          para: intro,
        
          about:about,
          images: { link: cover_img, alt: event_name },
          date: { date: date, Time: time, venue: venue },
        };

        let number =0;
     for (let i = 0; i < info.length; i++) {
        
        if (info[i].event_name===event_name) {
            alert("event already exists")
        }else{
            number =1
        }
     }

     if (number==1) {
        
         info.push(eventnew);
 
         localStorage.setItem("info", JSON.stringify(info));
     }


      }