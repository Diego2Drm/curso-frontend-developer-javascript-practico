const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector (".menu");
const mobileMenu = document.querySelector (".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail")

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
