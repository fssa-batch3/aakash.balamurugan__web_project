const info = [
    {
      title: "Phoenix Books Virtual Poetry Open Mic",
      para: "Join us for an evening of poetry hosted by Phoenix Books' own Bianca Amira Zanella!",
      about:" Bianca Amira Zanella is a cis queer Vermont-based performance poet, artist, and advocate living on traditionally Abenaki land. She is the Poet-in-Residence at Phoenix Books Rutland, hosting an international monthly open mic. Her poems have most recently appeared in The Artful Mind, The Rutland Herald, The Mountain Troubadour, and The Reverie. Their poem films, sculptural poems, and poem paintings have also been on exhibit with PoemCity Montpelier, Merwin Gallery, Stone Valley Arts, SPACE: a Pop Up Art Gallery, and Surdam Gallery"
      ,
      event_id:0,
      images: { link: "https://iili.io/HNOIUZb.webp",
        alt: "Phoenix Books Virtual Poetry Open Mic",
      },
      date: {
        date: "2023-04-27",
        Time: "22:00",
        venue: "online",
      },
      status: true
    },

    {
      title: "It's All Connected - Open Mic by Pooja",
      para: "Ever wondered what your favourite inanimate thing would say if they could express their emotions? What if they were brought to life and allowed to talk? Well we've got a stage for you.",
      about:" Bianca Amira Zanella is a cis queer Vermont-based performance poet, artist, and advocate living on traditionally Abenaki land. She is the Poet-in-Residence at Phoenix Books Rutland, hosting an international monthly open mic. Her poems have most recently appeared in The Artful Mind, The Rutland Herald, The Mountain Troubadour, and The Reverie. Their poem films, sculptural poems, and poem paintings have also been on exhibit with PoemCity Montpelier, Merwin Gallery, Stone Valley Arts, SPACE: a Pop Up Art Gallery, and Surdam Gallery"
      ,
      event_id:1,

      images: {link: "https://iili.io/HNOISwu.webp",
        alt: "It's All Connected - Open Mic by Pooja",
      },
      date:{date: "2023-04-27",
      Time: "22:00",
      venue: "Cover it up Studio The Podium KNK Road Chennai",},
      status: true
    },

    {
      title: "Spot On - More than an Open Mic",
      para: "We can hear the gears twisting and turning in your heads trying to figure out what this collaborative event with House of T is all about.",
      about:" Bianca Amira Zanella is a cis queer Vermont-based performance poet, artist, and advocate living on traditionally Abenaki land. She is the Poet-in-Residence at Phoenix Books Rutland, hosting an international monthly open mic. Her poems have most recently appeared in The Artful Mind, The Rutland Herald, The Mountain Troubadour, and The Reverie. Their poem films, sculptural poems, and poem paintings have also been on exhibit with PoemCity Montpelier, Merwin Gallery, Stone Valley Arts, SPACE: a Pop Up Art Gallery, and Surdam Gallery"
      ,      event_id:2,

      images: { link: "https://iili.io/HNOIrnj.jpg",
        alt: "Spot On - More than an Open Mic",
      },
      date:{date: "2023-04-27",
      Time: "22:00",
      venue: "PH cafe, EgmoreChennai",},
      status: true
    }
  ];


  let sessionsitems =[{
    person_name:"Deepak Chopra",
    images:{link:"https://iili.io/HNSXKrv.jpg",alt:"Deepak Chopra"},
    occupation:"Alternative medicine advocatepublic speakerwriter",
    content:`is an Indian-American author and alternative medicine advocate. A prominent figure in
    the New Age movement, his books and videos have made him one of the best-known and wealthiest figures in
    alternative medicine.His discussions of quantum healing have been characterised as technobabble "incoherent
    babbling strewn with scientific terms" which drives those who actually understand physics "crazy" and as
    "redefining Wrong".`,
    rating:4,
    no_ratings:"(30 reviews)",
    iframe:" https://www.youtube.com/embed/mmcJdoKftnM",
    id:1,
    status:true



},
{
    person_name:"Chris Gardner",
    images:{link:"https://iili.io/HNSXq2R.jpg", alt:"Chris Gardner"},
    occupation:"Businessman, motivational speaker ",
    content:`is an American businessman and motivational speaker. During the early 1980s,
    Gardner struggled with homelessness while raising a toddler son. He became a stockbroker and eventually
    founded his own brokerage firm Gardner Rich & Co in 1987. In 2006, Gardner sold his minority stake in the
    firm and published a memoir. That book was made into the motion picture The Pursuit of Happyness starring
    Will Smith.`,
    rating:3,
    no_ratings:"(12 reviews)",
    iframe:"https://www.youtube.com/embed/GthNhcppldc",
    id:2,
    status:true
},
{
    person_name:"Iyanla Vanzant",
    images:{link:"https://iili.io/HNSXCkN.png", alt:"Iyanla Vanzant"},
    occupation:"Inspirational speaker, lawyer, spiritual teacher, author, TV personality",
    content:`is an American inspirational speaker, lawyer, New Thought spiritual teacher, author,
    life coach, and television personality. She is known primarily for her books, her eponymous talk show, and
    her appearances on The Oprah Winfrey Show. She can currently be seen on television as the host of Iyanla:
    Fix My Life, on OWN: Oprah Winfrey Network`,
    rating:3,
    no_ratings:"(12 reviews)",
    iframe:"https://www.youtube.com/embed/Qm9ZbthOGs0",
    status:true,
    id:3,

},
{
    person_name:"Darren Hardy",
    images:{link:"https://iili.io/HNSXB7p.jpg",alt:"Darren Hardy"},
    occupation:`Writer
    CEO Advisor
    High_Performance Trainer
    Motivational Speaker `,
    content:`is an American author, keynote speaker, advisor, and former publisher of SUCCESS
    magazine. Hardy is a New York Times best-selling author, who wrote The Entrepreneur Roller Coaster, Living
    Your Best Year Ever and The Compound Effect .`,
    rating:3,
    no_ratings:"(12 reviews)",
    iframe:"https://www.youtube.com/embed/RlHTRFyjwT0",
    status:true,
    id:4,

}]

//person_name:expert_name,
//    images:{link:cover_img,alt:expert_name},
//    occupation:occupation,
//    content:content,
//    rating:0,
//    no_ratings:"",
//    iframe:videolink,
//    id: sessionsitems.length,
//    status:true




localStorage.setItem("sessioninfo" , JSON.stringify(sessionsitems));

localStorage.setItem("info" , JSON.stringify(info));