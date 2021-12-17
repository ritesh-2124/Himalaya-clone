var cart = JSON.parse(localStorage.getItem("cart"));
var total = 0;
showdata(cart);

function showdata(cart){
    document.querySelector(".main_frame").innerHTML="";
cart.map(function display(elem , index){
 var childDiv  = document.createElement("div")
 childDiv.setAttribute("class" , "prod")

 document.querySelector(".main_frame").append(childDiv)

  var img = document.createElement("img");
     img.setAttribute("src" , elem.disc);
     var p = document.createElement("h3");
   p.textContent = elem.titleOf;
   p.setAttribute("class" , "brandname")
   var h = document.createElement("h2");
   h.textContent = "$"+elem.priceof;
    total+=Number(elem.priceof);
   h.setAttribute("class" , "brandprice")
   var textDiv = document.createElement("div")

   textDiv.setAttribute("class" , "text")
   
 
   var delbtn = document.createElement("button")
   delbtn.setAttribute("class" , "fas fa-trash")
   delbtn.setAttribute("id" , "btndlt")

   delbtn.addEventListener("click" ,  function(){
       delateitem(index)
   })
     childDiv.append(delbtn ,img , textDiv)
    textDiv.append(p ,h)
})
}



var pay = document.querySelector("#payment")
pay.textContent = "Subtotal:" +" "+"$"+total;
document.querySelector("#promoid").addEventListener("click" , function(){
 var promocode =  document.querySelector("#inpcode").value;
 if(promocode == "masai30"){
   var profit = (total*30)/100;
   total = total - profit;
   pay.textContent= "Subtotal:" +" "+"$"+total;
 }
})

document.querySelector("#chekout").addEventListener("click" ,  function(){
 alert("Your Order succesfully added please fill payment details thankyou !!")
 window.location.href = "sucess.html"
})

function delateitem(index){
  cart.splice(index,1);
  localStorage.setItem("cart" , JSON.stringify(cart));
  showdata(cart)
}
