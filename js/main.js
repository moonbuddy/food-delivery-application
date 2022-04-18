let menuList = [
    {
        name: "Burger",
        img: "media/g-1.jpg",
        restaurant: "Bits and Bytes",
        price: 10,
        quanitity: 0,
        total: 0
    },
    {
        name: "Sandwich",
        img: "media/g-2.jpg",
        restaurant: "Bits and Bytes",
        price: 8,
        quanitity: 0,
        total: 0
    },
    {
        name: "Spaghetti",
        img: "media/g-5.jpg",
        restaurant: "Bits and Bytes",
        price: 12,
        quanitity: 0,
        total: 0
    },
    {
        name: "Taco",
        img: "media/g-3.jpg",
        restaurant: "Bits and Bytes",
        price: 4.5,
        quanitity: 0,
        total: 0
    },
    {
        name: "Egg Sandwich",
        img: "media/g-6.jpg",
        restaurant: "Bits and Bytes",
        price: 9,
        quanitity: 0,
        total: 0
    },
    {
        name: "Curry Dish",
        img: "media/g-4.jpg",
        restaurant: "Bits and Bytes",
        price: 14,
        quanitity: 0,
        total: 0
    },
]

//selects all buttons of menu items based on class
let menus = document.querySelectorAll(".add-to-cart");

//loops through the buttons and adds event listeners to all of them
for(let i = 0; i < menus.length; i++){
    menus[i].addEventListener("click", () => {
        addToCart();
    })
}

//makes sure cart shows updated value during load of pages
function onLoad(){
    //pulls from storage and stores it in variable
    let counter = localStorage.getItem("counter");
    
    //if value exists then cart is updated
    if(counter){
        document.getElementById("cartNumber").innerHTML = counter;
    }
}


function addToCart() {
    //pulls from storage and stores it in variable
    let counter = localStorage.getItem("counter");

    //turns the string to a number
    counter = Number(counter);
    
    //if value exists then cart is updated
    if(counter){
        localStorage.setItem("counter", counter + 1);
        document.getElementById("cartNumber").innerHTML = counter + 1;
    } //otherwise it initializes the storage for counter
    else{
        localStorage.setItem("counter", 1);
        document.getElementById("cartNumber").innerHTML = 1;
    }
}

//runs the function on load of page
onLoad();