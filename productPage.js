var productData = [
    {
         img: "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-3_1024x.png?v=1591028195",
        title: "Back to Balance Cleanse",
        price: "$29.95"
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaBambooToothpaste-Tube_Front_1024x.png?v=1613065864",
        title: "Bamboo & Sea Salt Whitening Antiplaque Toothpaste",
        price: "$5.99"
    },
    {
         img: "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-3_1024x.png?v=1591028195",
        title: "Back to Balance Cleanse",
        price: "$29.95"
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaBambooToothpaste-Tube_Front_1024x.png?v=1613065864",
        title: "Bamboo & Sea Salt Whitening Antiplaque Toothpaste",
        price: "$5.99"
    },
    {
         img: "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-3_1024x.png?v=1591028195",
        title: "Back to Balance Cleanse",
        price: "$29.95"
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaBambooToothpaste-Tube_Front_1024x.png?v=1613065864",
        title: "Bamboo & Sea Salt Whitening Antiplaque Toothpaste",
        price: "$5.99"
    },
    {
         img: "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-3_1024x.png?v=1591028195",
        title: "Back to Balance Cleanse",
        price: "$29.95"
    },

    {
        img: "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaBambooToothpaste-Tube_Front_1024x.png?v=1613065864",
        title: "Bamboo & Sea Salt Whitening Antiplaque Toothpaste",
        price: "$5.99"
    }];

    productData.map(productCard);

    function productCard (item){
       var div = document.createElement("div");
       var img = document.createElement("img");
       img.setAttribute("src", item.img);
       
       var title = document.createElement("p");
       title.textContent = item.title

       var childDiv = document.createElement("div");
       var btn = document.createElement("button");
       btn.textContent = "ADD TO CART";
       var i = document.createElement('i');
       i.setAttribute("class", "fas fa-shopping-bag");
        btn.append(i);

    
       var price = document.createElement("h3");
       price.textContent = item.price;

       childDiv.append(btn, price);

       div.append(img,title,childDiv);
       document.querySelector("#product").append(div);
       
    }