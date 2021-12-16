var productData = JSON.parse(localStorage.getItem("product")) || [];
var cart = JSON.parse(localStorage.getItem("cart")) || [];

productData.map(productCard);

function productCard(item) {
  var div = document.createElement("div");
  var img = document.createElement("img");
  img.setAttribute("src", item.disc);

  var title = document.createElement("p");
  title.textContent = item.titleOf;

  var childDiv = document.createElement("div");
  var btn = document.createElement("button");
  btn.textContent = "ADD TO CART";
  var i = document.createElement("i");
  i.setAttribute("class", "fas fa-shopping-bag");
  btn.append(i);
  btn.addEventListener("click", function(){
      addToCart(item);
  });

  var price = document.createElement("h3");
  price.textContent = "$" + item.priceof;

  childDiv.append(btn, price);

  div.append(img, title, childDiv);
  document.querySelector("#product").append(div);  
}

function addToCart(item) {
    cart.push(item);
    var cartItem = localStorage.setItem("cart", JSON.stringify(cart));
}




