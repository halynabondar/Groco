// swiper rewievs

const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 5,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

// basket

// increment
const increment = () => {
    let count = document.getElementById('quantity').innerHTML;
    count++;
    document.getElementById('quantity').innerHTML = count;
}

document.querySelector('.plus').addEventListener('click', increment);

// decrement
const decrement = () => {
    let count = document.getElementById('quantity').innerHTML;
    count--;
    document.getElementById('quantity').innerHTML = count;
}

document.querySelector('.minus').addEventListener('click', decrement);

// remove


let trash = document.querySelectorAll('.trash');
trash.forEach(item => item.addEventListener('click', remove));

function remove(event){
    const removeItem = event.target.parentNode.parentNode.parentNode;
    removeItem.parentNode.removeChild(removeItem);
}

// searchForm

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

// shoppingCart

let shoppingCart = document.querySelector('.shopping__cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

// navbar

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}

// productItem
//  filter
function renderProduct(productInfo){
    return `<div class="swiper-slide products__item" data-item-id="${productInfo.id}">
                            <img src="${productInfo.image}" alt="" class="products__icon">
                            <div class="number"><span class="increment">-</span>1<span class="decrement">+</span></div>
                            <h2 class="item__title">${productInfo.name}</h2>
                            <p class="products__price">$${productInfo.price}</p>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <button class="products__btn btn">Add To Cart</button>
                        </div>`
}

function renderProducts(productsToRender){
    let productsHolder = document.getElementById('products');

    let productsHtml = `<div class="swiper products__container">
                    <div data-item class="types">
                        <div class="products__title">Our Products</div>
                        <nav class="types__nav nav-type">
                            <button type="button" class="nav-type__item">vegetables</button>
                            <button type="button" class="nav-type__item">fruits</button>
                            <button type="button" class="nav-type__item">meat</button>
                            <button type="button" class="nav-type__item">seafood</button>
                        </nav>
                    </div>
                    <div class="swiper-wrapper products__column">`;
    productsToRender.forEach(item => {productsHtml = productsHtml + renderProduct(item)})
    productsHtml = productsHtml + `</div>
                </div>`;
    productsHolder.innerHTML = productsHtml;

    // swiper products

    const swiperProduct = new Swiper('.products__container', {
        loop: true,
        spaceBetween: 5,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1020: {
                slidesPerView: 4,
            },
        },
    });

    let typeButtons = document.querySelectorAll('.nav-type__item');
    function filterProducts(event){
        let filterName = event.target.textContent;
        typeButtons.forEach(typeButton => {typeButton.classList.remove('active')});
        event.target.classList.add('active');

        const filteredProducts = products.filter(product => product.type === filterName);

        renderProducts(filteredProducts);
    }

    typeButtons.forEach(typeButton => {typeButton.addEventListener('click', filterProducts)})
}
renderProducts(products);

// Cart

