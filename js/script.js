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


let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping__cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}

//  filter

let listProducts = [
    {
        name: 'Asparagus Jumbo',
        type: 'vegetable',
        price: 5,
        image: 'asparagus-jumbo.jpeg',
        quantity: 20,
    },
    {
        name: 'Baby Eggplants',
        type: 'vegetable',
        price: 4,
        image: 'baby-eggplants.jpeg',
        quantity: 20,
    },
    {
        name: 'Banana Shallot',
        type: 'vegetable',
        price: 3,
        image: 'banana-shallot.jpeg',
        quantity: 20,
    },
    {
        name: 'Beetroot',
        type: 'vegetable',
        price: 3,
        image: 'beetroot.jpeg',
        quantity: 20,
    },
    {
        name: 'Cabbage',
        type: 'vegetable',
        price: 4,
        image: 'cabbage.png',
        quantity: 20,
    },
    {
        name: 'Carrot',
        type: 'vegetable',
        price: 4,
        image: 'carrot.png',
        quantity: 20,
    },
    {
        name: 'Marrow',
        type: 'vegetable',
        price: 6,
        image: 'marrow.jpeg',
        quantity: 20,
    },
    {
        name: 'Potato Purple',
        type: 'vegetable',
        price: 6,
        image: 'potato-purple.jpeg',
        quantity: 20,
    },
    {
        name: 'Radish Red',
        type: 'vegetable',
        price: 3,
        image: 'radish-red.png',
        quantity: 20,
    },
    {
        name: 'Sweet Potato',
        type: 'vegetable',
        price: 7,
        image: 'sweet-potato.jpeg',
        quantity: 20,
    },
    {
        name: 'Tomato Bunch',
        type: 'vegetable',
        price: 5,
        image: 'tomato-bunch.jpeg',
        quantity: 20,
    },
    {
        name: 'Zucchini Yellow',
        type: 'vegetable',
        price: 4,
        image: 'zucchini-yellow.png',
        quantity: 20,
    },
    {
        name: 'Fresh Orange',
        type: 'fruits',
        price: 3,
        image: 'fresh-orange.png',
        quantity: 20,
    },
    {
        name: 'Grapes Black',
        type: 'fruits',
        price: 4,
        image: 'grapes-black.jpeg',
        quantity: 20,
    },
    {
        name: 'Lemon',
        type: 'fruits',
        price: 4,
        image: 'lemon.jpeg',
        quantity: 20,
    },
    {
        name: 'Longan',
        type: 'fruits',
        price: 6,
        image: 'longan.jpeg',
        quantity: 20,
    },
    {
        name: 'Mango',
        type: 'fruits',
        price: 7,
        image: 'mango.jpeg',
        quantity: 20,
    },
    {
        name: 'Mangosteen',
        type: 'fruits',
        price: 7,
        image: 'mangosteen.jpeg',
        quantity: 20,
    },
    {
        name: 'Papaya',
        type: 'fruits',
        price: 7,
        image: 'papaya.jpeg',
        quantity: 20,
    },
    {
        name: 'Pears Rosemary',
        type: 'fruits',
        price: 4,
        image: 'pears-rosemary.jpeg',
        quantity: 20,
    },
    {
        name: 'Pomegranate',
        type: 'fruits',
        price: 5,
        image: 'pomegranate.png',
        quantity: 20,
    },
    {
        name: 'Raspberries',
        type: 'fruits',
        price: 8,
        image: 'raspberries.jpeg',
        quantity: 20,
    },
    {
        name: 'Red Currant',
        type: 'fruits',
        price: 8,
        image: 'red-currant.jpeg',
        quantity: 20,
    },
    {
        name: 'Rock Melon',
        type: 'fruits',
        price: 8,
        image: 'rock-melon.jpeg',
        quantity: 20,
    },
    {
        name: 'Hardwicks Lamb Liver',
        type: 'meat',
        price: 15,
        image: 'hardwicks-lamb-liver.jpeg',
        quantity: 20,
    },
    {
        name: 'Lamb Rack',
        type: 'meat',
        price: 17,
        image: 'lamb-rack.jpeg',
        quantity: 20,
    },
    {
        name: 'Lamb Shank',
        type: 'meat',
        price: 17,
        image: 'lamb-shank.jpeg',
        quantity: 20,
    },
    {
        name: 'Lamb Leg Boneless',
        type: 'meat',
        price: 18,
        image: 'lamb-leg-boneless.jpeg',
        quantity: 20,
    },
    {
        name: 'Black Tiger Prawns',
        type: 'seafood',
        price: 22,
        image: 'black-tiger-prawns.jpeg',
        quantity: 20,
    },
    {
        name: 'Eastco Salmon Fillet',
        type: 'seafood',
        price: 22,
        image: 'eastco-salmon-fillet.jpeg',
        quantity: 20,
    },
    {
        name: 'Pangasius Fish Fillet',
        type: 'seafood',
        price: 22,
        image: 'pangasius-fish-fillet.jpeg',
        quantity: 20,
    },
    {
        name: 'Salmon Fillet',
        type: 'seafood',
        price: 22,
        image: 'salmon-fillet.png',
        quantity: 20,
    },
    {
        name: 'Vannamei Shrimps',
        type: 'seafood',
        price: 22,
        image: 'vannamei-shrimps.jpeg',
        quantity: 20,
    }
]

let productItem = document.querySelector('.products__item');

function addItem() {

}