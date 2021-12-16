var arr = JSON.parse(localStorage.getItem("product" ));
var arr2 = JSON.parse(localStorage.getItem("productdata"))|| []
displayData(arr)

function shortdata(){
   var select = document.querySelector("#filter").value;
 if(select == "high"){
     arr.sort( function(a,b){
        return Number(b.priceof) - Number(a.priceof)    
     })
 }
 var select = document.querySelector("#filter").value;
 if(select == "low"){
     arr.sort( function(a,b){
      return Number(a.priceof) - Number(b.priceof);      
     })
 }
 displayData(arr)
}

function shortname(){
   var nameselect = document.querySelector("#Namefilter").value;
    if(nameselect == "ass"){
        arr.sort(function(a,b){
             var name1 = a.titleOf;
        var name2 = b.titleOf;
        if(name1.toLowerCase() < name2.toLowerCase())
        return 1;

        if(name1.toLowerCase() > name2.toLowerCase()) return -1;
        return 0;
        })
     }
     if(nameselect == "diss"){
        arr.sort(function(a,b){
             var name1 = a.titleOf;
        var name2 = b.titleOf;
        if(name1.toLowerCase() > name2.toLowerCase()) return 1;

        if(name1.toLowerCase() < name2.toLowerCase()) return -1;
        return 0;
        })
     }
     displayData(arr)
    }
    

function displayData(arr){
  document.querySelector(".main_frame").textContent = "";
arr.map(function display(elem){
   var img = document.createElement("img");
   img.setAttribute("src" , elem.disc);
   img.setAttribute("class" , "prodimg")
   var p = document.createElement("h3");
 p.textContent = elem.titleOf;
 p.setAttribute("class" , "brandname")
 var h = document.createElement("h2");
 h.textContent = "$" + elem.priceof;
 h.setAttribute("class" , "brandprice")
var btn = document.createElement("button")
btn.setAttribute("class" , "btn")
var icon = document.createElement("i")
icon.setAttribute("class" , "fas fa-shopping-bag")
icon.setAttribute("id" , "cart_Icon")
btn.addEventListener("click" , function(){
   
 cartdata(elem)
})
btn.append(icon , h)
 var textDiv = document.createElement("div")
 textDiv.append(p,btn)
 textDiv.setAttribute("class" , "text")
 
 var childDiv = document.createElement("div")
 childDiv.setAttribute("class" , "child")
 childDiv.append(img , textDiv)


document.querySelector(".main_frame").append(childDiv)


})
}

displayData(arr)

document.querySelector("#cart").addEventListener("click" , function(){
    window.location.href = "cart.html"
})

function cartdata(elem){
   arr2.push(elem)
   localStorage.setItem("productdata" , JSON.stringify(arr2))
}
