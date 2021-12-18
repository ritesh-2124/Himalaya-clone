document.querySelector("#old").addEventListener("click" , myfunction)
var login_data = JSON.parse(localStorage.getItem("himalaya"))

function myfunction(){
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;

  if(email == "admin@gmail.com" && pass == "adminpass"){
      window.location.href="admin.html"
  }
  else{
   login_data.map(function(elem){
       if(elem.email== email && elem.pass == pass){
          window.location.href = "landingpage.html" 
        } 
   })   

  }  

}

document.querySelector("#new").addEventListener("click" , new_account)

function new_account(){
    window.location.href= "creat_account.html"
}

document.querySelector("#cart").addEventListener("click" , function(){
  window.location.href = "cart.html"
})
