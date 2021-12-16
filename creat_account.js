document.querySelector("#newreg").addEventListener("click" , myfunction)
var sign_up_info = JSON.parse(localStorage.getItem("himalaya")) || []

function myfunction(event){
 var fname = document.querySelector("#fname").value;
 var  lname = document.querySelector("#lname").value;
 var email = document.querySelector("#email").value;
 var pass = document.querySelector("#pass").value;
 
 var data = {
     fname : fname,
     lname : lname,
     email: email,
     pass : pass
 }

 sign_up_info.push(data)
 console.log(sign_up_info)

 localStorage.setItem("himalaya"  , JSON.stringify(sign_up_info));


 if(fname != ""  && lname !="" &&  email != "" && pass != ""){
     alert("registration succesfully please log in");
     window.location.href = "signUp.html"
 }
 else{
     alert("fill all information !!")
 }


}
document.querySelector("#cart").addEventListener("click" , function(){
    window.location.href = "cart.html"
})