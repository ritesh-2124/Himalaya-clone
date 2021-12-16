document.querySelector("button").addEventListener("click" , myfunction);
var arr  = JSON.parse(localStorage.getItem("product")) || [];
display(arr)
function myfunction(event){
    event.preventDefault()
    var cat =  document.querySelector("#options").value;
    var Title = document.querySelector("#title").value;
     var discription = document.querySelector("#dis").value;
     var price = document.querySelector("#price").value;
  
  
  
     var userdeta = {
   catalog : cat,
   titleOf : Title,
   disc : discription,
   priceof : price
}
arr.push(userdeta);
   localStorage.setItem("product" , JSON.stringify(arr));  
   display(arr)
}

function display(arr, index){
    document.querySelector(".output").innerHTML = "";

    arr.map(function(elem , index){
      var childDiv = document.createElement("div");
      childDiv.setAttribute("class" , "child2")
    var img = document.createElement("img");
    img.setAttribute("src" ,elem.disc);
    var p = document.createElement("p");
    p.textContent = elem.titleOf;
    p.setAttribute("class" , "brandname")
    var h = document.createElement("h2");
    h.textContent = "$" + elem.priceof;
    h.setAttribute("class" , "brandprice")
    var rem = document.createElement("button");
    rem.textContent = "remove";
    rem.addEventListener("click" , function(){
         remove(index)
     })
    rem.setAttribute("class" , "btn2")
    var prodiv = document.createElement("div");
    prodiv.setAttribute("class" , "prod")
    var type = document.createElement("h3");
    type.textContent = elem.catalog;
    type.setAttribute("class" , "cat")
    var btndiv = document.createElement("div");
    rem.setAttribute("class" , "btn2")
    btndiv.append( rem)
   prodiv.append(img,type ,p,h,btndiv);
    childDiv.append(prodiv);
    document.querySelector(".output").append(childDiv);

    })
}
   function remove(index){
       arr.splice(index,1);
      localStorage.setItem("product" , JSON.stringify(arr));
      display(arr);
   }
   document.querySelector("#userbtn").addEventListener("click" , function(){
       window.location.href = "user.html"
       
   })



