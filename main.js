const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector (".menu");
const mobileMenu = document.querySelector (".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail")

const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoMenu)

function toggleDesktopMenu(){
    const isProductDetailMenu =   productDetail.classList.contains("inactive")

    if(!isProductDetailMenu){
        productDetail.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isProductDetailMenu =   productDetail.classList.contains("inactive")

    if(!isProductDetailMenu){
        productDetail.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive")
}

function toggleCarritoMenu(){
    const isMobileMenuClosed =  mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive")
    }
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }
    productDetail.classList.toggle("inactive")
}

const producList = [];
producList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
producList.push({
    name: "Tele",
    price: 220,
    image: "https://images.pexels.com/photos/5721896/pexels-photo-5721896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
producList.push({
    name: "Compu",
    price: 620,
    image: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

{/*<div class="product-card">
        <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="">
        <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
        </div>
  </div> */
}

function renderProducts(arr){
    for (product of producList){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card"); /*crear un div con una clase*/
         const image = document.createElement("img");
        image.setAttribute("src", product.image);/*insertar un aimagen como atributo y con la ayuda de array */
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;   
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productIconCard = document.createElement("img");
        productIconCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productIconCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(image);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(producList);/*Puede llamarse al clickear un boton o donde lo quieramos llamar */