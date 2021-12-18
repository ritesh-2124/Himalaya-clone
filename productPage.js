var productData = JSON.parse(localStorage.getItem("product")) || [];
var cart = JSON.parse(localStorage.getItem("cart")) || [];

productData.slice(0, 16).map(productCard);

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
  btn.addEventListener("click", function () {
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

// for filter
function priceNameHandle() {
  var selected = document.querySelector("#filter").value;

  if (selected == "nameAscen") {
    productData.sort(function (a, b) {
      if (a.titleOf.toUpperCase() > b.titleOf.toUpperCase()) return 1;

      if (a.titleOf.toUpperCase() < b.titleOf.toUpperCase()) return -1;

      return 0;
    });
  }

  if (selected == "nameDescen") {
    productData.sort(function (a, b) {
      if (a.titleOf.toUpperCase() > b.titleOf.toUpperCase()) return -1;

      if (a.titleOf.toUpperCase() < b.titleOf.toUpperCase()) return 1;

      return 0;
    });
  }

  if (selected == "priceAscen") {
    productData.sort(function (a, b) {
      return a.priceof - b.priceof;
    });
  }

  if (selected == "priceDescen") {
    productData.sort(function (a, b) {
      return b.priceof - a.priceof;
    });
  }

  document.querySelector("#product").textContent = "";
  productData.map(productCard);
}

function numHandle() {
  var num = document.querySelector("#filterByNum").value;

  var newArray = productData;

  if (num == "12") {
    newArray = productData.slice(0, 12);
  }

  if (num == "16") {
    newArray = productData.slice(0, 16);
  }

  if (num == "32") {
    newArray = productData.slice(0, 32);
  }

  console.log(newArray);

  document.querySelector("#product").textContent = "";
  newArray.map(productCard);
}

function showMore() {
  document.querySelector("#product").textContent = "";
  productData.map(productCard);
}
