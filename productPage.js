import data from "./db.json" assert { type: "json" };
// debugger;
var product = data.data;
localStorage.setItem("product", JSON.stringify(product));
var productData = JSON.parse(localStorage.getItem("product")) || product;
var cart = [];
var cart = JSON.parse(localStorage.getItem("cart")) || [];

productData.slice(0, 16).map(productCard);

document.getElementById("filter").addEventListener("click", priceNameHandle);
document.getElementById("filterByNum").addEventListener("click", numHandle);
document.getElementById("btn").addEventListener("click", showMore);

function productCard(item) {
  var div = document.createElement("div");
  var img = document.createElement("img");
  img.setAttribute("src", item.disc);

  var title = document.createElement("p");
  title.textContent = item.titleOf;

  var childDiv = document.createElement("div");
  var btn = document.createElement("button");
  btn.textContent = "ADD TO CART";
  btn.setAttribute("id", "cartbutton");
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
  alert("Item added to the Cart");
  localStorage.setItem("cart", JSON.stringify(cart));
}
// for sort
function priceNameHandle() {
  var selected = document.querySelector("#filter").value;
  var filtered = JSON.parse(localStorage.getItem("filtered")) || productData;

  let data = filtered || productData;

  if (selected == "nameAscen") {
    data.sort(function (a, b) {
      if (a.titleOf.toUpperCase() > b.titleOf.toUpperCase()) return 1;

      if (a.titleOf.toUpperCase() < b.titleOf.toUpperCase()) return -1;

      return 0;
    });
  }

  if (selected == "nameDescen") {
    data.sort(function (a, b) {
      if (a.titleOf.toUpperCase() > b.titleOf.toUpperCase()) return -1;

      if (a.titleOf.toUpperCase() < b.titleOf.toUpperCase()) return 1;

      return 0;
    });
  }

  if (selected == "priceAscen") {
    data.sort(function (a, b) {
      return a.priceof - b.priceof;
    });
  }

  if (selected == "priceDescen") {
    data.sort(function (a, b) {
      return b.priceof - a.priceof;
    });
  }

  document.querySelector("#product").textContent = "";
  data.map(productCard);
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

  if (num == "all" || newArray.length == productData.length) {
    document.getElementById("btn").style.display = "none";
  }

  document.querySelector("#product").textContent = "";
  newArray.map(productCard);
}

function showMore() {
  document.querySelector("#product").textContent = "";
  productData.map(productCard);
}

// filter

document
  .getElementById("Herbal Supplements")
  .addEventListener("click", categoryFilter);

document
  .getElementById("Health Interests")
  .addEventListener("click", categoryFilter);

document.getElementById("Oral Care").addEventListener("click", categoryFilter);

document
  .getElementById("Personal Care")
  .addEventListener("click", categoryFilter);

function categoryFilter() {
  var productData = JSON.parse(localStorage.getItem("product"));
  const filteredData = productData.filter((e) => {
    if (this.id == "Health Interests") {
      return e.catalog == "Herbal Supplements";
    } else {
      return e.catalog == this.id;
    }
  });
  productData = filteredData;
  localStorage.setItem("filtered", JSON.stringify(filteredData));
  document.querySelector("#product").textContent = "";
  productData.map(productCard);
  document.getElementById("btn").style.display = "none";
}
