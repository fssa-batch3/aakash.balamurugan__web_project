if(log_email== result.user_email ){


  if(log_password==result.user_Password){


         localStorage.setItem("details",JSON.stringify(result));
      alert("login succes")
    
    console.log(" password")
    
    window.location.href ="../tips.html"
     
    }
    else{
    alert("incorret password")
    console.log("incorret password")
    }

  }


  else{
  alert("incorrect password or email")
  }



  // booking

  
  let input =[{type:"text" , placeholder:"Eg:Aakash",id:"name"   },{type:"email" , placeholder:"Eg:someone@gmail.com",id:"gmail"   },
  {type:"text" , placeholder:"Eg:9876543210",id:"phone_number"   }]
  
  


 let details= JSON.parse(localStorage.getItem("details"));

  

  form_input = document.createElement("input");
  form_input.setAttribute("type", input[0].type)
  form_input.setAttribute("placeholder",input[0].placeholder)
  form_input.setAttribute("class","bookinginput")
  form_input.setAttribute("id",input[0].id)
  form_input.setAttribute("requried","");
  form_input.setAttribute("value",  details.user_name )
 
  document.querySelector(".form").append(form_input)

  form_input1 = document.createElement("input");
  form_input1.setAttribute("type", input[1].type)
  form_input1.setAttribute("placeholder",input[1].placeholder)
  form_input1.setAttribute("class","bookinginput")
  form_input1.setAttribute("id",input[1].id)
  form_input1.setAttribute("requried","");
  form_input1.setAttribute("value",details.user_email)
 
  document.querySelector(".form").append(form_input1);


  form_input2 = document.createElement("input");
  form_input2.setAttribute("type", input[2].type)
  form_input2.setAttribute("placeholder",input[2].placeholder)
  form_input2.setAttribute("class","bookinginput")
  form_input2.setAttribute("id",input[2].id)
  form_input2.setAttribute("requried","");
  form_input2.setAttribute("value","")
 
  document.querySelector(".form").append(form_input2);