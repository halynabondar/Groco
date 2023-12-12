// swiper reviews

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

// document.addEventListener('click', (e) => {
//     const click = e.composedPath().includes(searchForm);
//
//     if (!click) {
//         searchForm.style.display = 'none';
//     }
// })



// shoppingCart

let shoppingCart = document.querySelector('.shopping__cart');

document.querySelector('#cart-btn').onclick = () => {

    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    if (shoppingCart.classList.contains('active')){
        renderCart();
    }
}





// navbar

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}

function fetchProduct(productId) {
    return products.find(product => product.id === productId);
}

function fetchCartLine(productId) {
    return cartLines.find(cartLine => cartLine.productId ===productId);
}


// productItem
//  filter
function renderProduct(productInfo){
    return `<div class="swiper-slide products__item" data-item-id="${productInfo.id}">
                            <img src="${productInfo.image}" alt="" class="products__icon">
                            <div class="number"><span class="decrement">-</span><span class="quantity__item">1</span><span class="increment">+</span></div>
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
            400: {
                slidesPerView: 1,
            },
            730: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 3,
            },
            1200: {
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

    const incrementProductCard = (event) => {
        const productCard = event.target.parentNode.parentNode;
        const productId = productCard.getAttribute('data-item-id');
        const databaseProduct = fetchProduct(productId);
        const countElement = productCard.querySelector('.quantity__item');

        let countItem = countElement.innerHTML;

        if (countItem < databaseProduct.quantity) {
            countItem++;
            countElement.innerHTML = countItem;
        }
    }

    document.querySelectorAll('.increment').forEach(incrementButton => incrementButton.addEventListener('click', incrementProductCard));

    const decrementProductCard = (event) => {
        const productCard = event.target.parentNode.parentNode;

        const countElement = productCard.querySelector('.quantity__item');

        let countItem = parseInt(countElement.innerHTML);

        if (countItem > 1) {
            countItem--;
            countElement.innerHTML = countItem;
        }
    }

    document.querySelectorAll('.decrement').forEach(decrementButton => decrementButton.addEventListener('click', decrementProductCard));

    const addToCart = (event) => {
        const productCard = event.target.parentNode;
        const productId = productCard.getAttribute('data-item-id');
        const quantity = parseInt(productCard.querySelector('.quantity__item').innerHTML);

        let cartLine = fetchCartLine(productId);

        if (cartLine) {
            cartLine.quantity = cartLine.quantity + quantity;
        } else {
            cartLines.push({
                productId: productId,
                quantity: quantity
            });
        }

        renderCart();
    }

    document.querySelectorAll('.products__btn').forEach(addCartButton => addCartButton.addEventListener('click', addToCart));
}

renderProducts(products);


// Cart


function renderCartLine(cartLine) {
    const databaseProduct = fetchProduct(cartLine.productId);

    return `<div class="shopping__item">
                        <img class="shopping__image" src="${databaseProduct.image}" alt="">
                        <div class="shopping__info">
                            <div class="item__name">${databaseProduct.name}</div>
                            <div class="item__info">
                                <div class="prise">$${databaseProduct.price}</div>
                                <div class="quantity">Qty: <span id="quantity">${cartLine.quantity}</span></div>
                            </div>
                        </div>
                        <div class="shopping__icon">
                            <div class="minus"><i class="fas fa-minus"></i></div>
                            <div class="plus"><i class="fas fa-plus"></i></div>
                            <div class="trash"><i class="fas fa-trash"></i></div>
                        </div>
                    </div>`

}

function renderCartLines(cartLines){
    let cartLinesHTML = '';

    cartLines.forEach(cartLine => cartLinesHTML = cartLinesHTML + renderCartLine(cartLine));

    return cartLinesHTML;
}

function calculateTotal(cartLines){
    let total = 0;
    cartLines.forEach(cartLine => {
       const databaseProduct = fetchProduct(cartLine.productId);
       total = total + cartLine.quantity * databaseProduct.price;
    });

    return total;
}


function renderCart(){
    const cartElement = document.querySelector('.shopping__column');
    let cartHTML = '';
    cartHTML = cartHTML + renderCartLines(cartLines);
    cartHTML = cartHTML + `<div class="shopping__total">Total: <span id="total">$${calculateTotal(cartLines)}</span></div>
                    <button class="shopping__checkout btn">checkout</button>`
    cartElement.innerHTML = cartHTML;
}



