let menuLists = [
    // Bits & Bytes
    {
        name: "Lox Bytes",
        img: "media/bits-1.jpg",
        restaurant: "Bits and Bytes",
        price: 8.10,
        quanitity: 0,
        total: 0
    },
    {
        name: "Potato Wedges",
        img: "media/bits-2.jpg",
        restaurant: "Bits and Bytes",
        price: 6.20,
        quanitity: 0,
        total: 0
    },
    {
        name: "Sushi Platter",
        img: "media/bits-3.jpg",
        restaurant: "Bits and Bytes",
        price: 40.70,
        quanitity: 0,
        total: 0
    },
    {
        name: "Taco",
        img: "media/bits-6.jpg",
        restaurant: "Bits and Bytes",
        price: 4.50,
        quanitity: 0,
        total: 0
    },
    {
        name: "Guac & Chip",
        img: "media/bits-4.jpg",
        restaurant: "Bits and Bytes",
        price: 9.99,
        quanitity: 0,
        total: 0
    },
    {
        name: "Mr Shrimp",
        img: "media/bits-5.jpg",
        restaurant: "Bits and Bytes",
        price: 13.99,
        quanitity: 0,
        total: 0
    },
    // Fully Stacked Subs
    {
        name: "B.L.T",
        img: "media/sub-1.jpg",
        restaurant: "Fully Stacked Subs",
        price: 12.50,
        quanitity: 0,
        total: 0
    },
    {
        name: "Pastrami Melt",
        img: "media/sub-2.jpg",
        restaurant: "Fully Stacked Subs",
        price: 15.40,
        quanitity: 0,
        total: 0
    },
    {
        name: "Chicken Fajita",
        img: "media/sub-3.jpg",
        restaurant: "Fully Stacked Subs",
        price: 12.99,
        quanitity: 0,
        total: 0
    },
    {
        name: "Panini",
        img: "media/sub-4.jpg",
        restaurant: "Fully Stacked Subs",
        price: 9.99,
        quanitity: 0,
        total: 0
    },
    {
        name: "Plant Based Chic' Sando",
        img: "media/sub-5.jpg",
        restaurant: "Fully Stacked Subs",
        price: 15.75,
        quanitity: 0,
        total: 0
    },
    {
        name: "Italian Combo",
        img: "media/sub-6.jpg",
        restaurant: "Fully Stacked Subs",
        price: 12.50,
        quanitity: 0,
        total: 0
    },
    // Me'n Eddies
    {
        name: "Cheesy Pie",
        img: "media/pizza-1.jpg",
        restaurant: "Me'n Eddies",
        price: 10.00,
        quanitity: 0,
        total: 0
    },
    {
        name: "Tomato Flat Bread",
        img: "media/pizza-2.jpg",
        restaurant: "Me'n Eddies",
        price: 12.99,
        quanitity: 0,
        total: 0
    },
    {
        name: "Egg Combo",
        img: "media/pizza-7.jpg",
        restaurant: "Me'n Eddies",
        price: 8.50,
        quanitity: 0,
        total: 0
    },
    {
        name: "Shrimp Aroo",
        img: "media/pizza-4.jpg",
        restaurant: "Me'n Eddies",
        price: 18.75,
        quanitity: 0,
        total: 0
    },
    {
        name: "Veggie Delight",
        img: "media/pizza-5.jpg",
        restaurant: "Me'n Eddies",
        price: 11.10,
        quanitity: 0,
        total: 0
    },
    {
        name: "BBQ Chicken",
        img: "media/pizza-6.jpg",
        restaurant: "Me'n Eddies",
        price: 15.50,
        quanitity: 0,
        total: 0
    },
    // Phó 68
    {
        name: "Ginger Rice Balls",
        img: "media/pho-1.jpg",
        restaurant: "Phó 68",
        price: 7.20,
        quanitity: 0,
        total: 0
    },
    {
        name: "Tofu Noodles",
        img: "media/pho-2.jpg",
        restaurant: "Phó 68",
        price: 9.35,
        quanitity: 0,
        total: 0
    },
    {
        name: "Beef Phó",
        img: "media/pho-3.jpg",
        restaurant: "Phó 68",
        price: 12.45,
        quanitity: 0,
        total: 0
    },
    {
        name: "Meatball Phó",
        img: "media/pho-9jpg.jpg",
        restaurant: "Phó 68",
        price: 12.45,
        quanitity: 0,
        total: 0
    },
    {
        name: "Shrimp Phó",
        img: "media/pho-5.jpg",
        restaurant: "Phó 68",
        price: 13.75,
        quanitity: 0,
        total: 0
    },
    {
        name: "Spring Roll",
        img: "media/pho-7.jpg",
        restaurant: "Phó 68",
        price: 7.15,
        quanitity: 0,
        total: 0
    },
]

const tax = 0.095;
let path = window.location.pathname;
let page = path.split("/").pop();
console.log(page);


//selects all buttons of menu items based on class
let menus = document.querySelectorAll(".add-to-cart");

//loops through the buttons and adds event listeners to all of them
for(let i = 0; i < menus.length; i++){
    menus[i].addEventListener("click", () => {
        cartNumber(menuLists[i]);
        menuTotal(menuLists[i]);
    })
}

//makes sure cart shows updated value during load of pages
function onLoad(){
    //pulls from storage and stores it in variable
    let counter = localStorage.getItem("counter");
    
    //if value exists then cart is updated
    if(counter){
        document.getElementById("cartNumber").innerHTML = counter;
    }//no value then reset cart to zero
    else{
        document.getElementById("cartNumber").innerHTML = 0;
    }
}


function cartNumber(menuList) {
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

    //calls function addToStorage with specific menu item
    addToStorage(menuList);
}


function addToStorage(menuList) {
    //pulls from storage items that were stored if any
    let cartItems = localStorage.getItem("menuInCart");
    //parse object since it was just pulled from storage
    cartItems = JSON.parse(cartItems);

    //checks to see if empty
    if(cartItems != null){
        //checks to see if the menu name exists in the object
        if(cartItems[menuList.name] == undefined) {
            //adds new menu item to object
            cartItems = {
                ...cartItems, [menuList.name]: menuList
            }
        }
        //increments quantity by 1
        cartItems[menuList.name].quanitity += 1;
    }
    else{
        //sets quanitity to 1
        menuList.quanitity = 1;
        //defines the object
        cartItems = {
            [menuList.name]: menuList
        }
    }
    //sends object to storage
    localStorage.setItem("menuInCart", JSON.stringify(cartItems));
}

function menuTotal(menuList){
    //pulls from storage items that were stored if any
    let subTotalCost = localStorage.getItem("subTotalCost");
    let taxCost = localStorage.getItem("taxCost");
    let totalCost = localStorage.getItem("totalCost");

    //check to see if subtotal has a value already
    if(subTotalCost != null){
        //turns the string into a number
        subTotalCost = Number(subTotalCost);
        taxCost = Number(taxCost);
        totalCost = Number(totalCost);

        localStorage.setItem("subTotalCost", subTotalCost + menuList.price);

        let taxes = ((subTotalCost + menuList.price)*tax).toFixed(2);
        taxes = Number(taxes);
        localStorage.setItem("taxCost", taxes);

        let total = (subTotalCost + menuList.price) + taxes;
        localStorage.setItem("totalCost", total.toFixed(2));
    }
    else{
        localStorage.setItem("subTotalCost", menuList.price);

        let taxes = (menuList.price*tax).toFixed(2);
        taxes = Number(taxes);
        localStorage.setItem("taxCost", taxes);

        let total = menuList.price + taxes;
        localStorage.setItem("totalCost", total.toFixed(2));
    }
}

function addToCart() {
    //pulls from storage items that were stored if any
    let subTotalCost = localStorage.getItem("subTotalCost");
    let taxCost = localStorage.getItem("taxCost");
    let totalCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem("menuInCart");
    //parse object since it was just pulled from storage
    cartItems = JSON.parse(cartItems);

    let cart = document.querySelector(".cart")

    //makes sure the html is empty
    cart.innerHTML = "";

    //check for both the html element and if the object has items
    if(cartItems && cart){
        //goes through the object kinda like a for loop
        Object.values(cartItems).map(item => {
            //adds the following code to the html using template literals
            cart.innerHTML += `
            <div class="row menu-header">
                <div class="col">
                    <div class="position-relative">
                        <img src = "${item.img}" class = "img-thumbnail">
                        <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger" id="deleteItem">x</span>
                        <h6>${item.name}</h6>
                    </div>
                </div>
                <div class="col">
                    <h6>${item.restaurant}</h6>
                </div>
                <div class="col">
                    <h6>${item.price}</h6>
                </div>
                <div class="col d-flex">
                    <ion-icon class = "decrease" name="caret-back-circle-outline"></ion-icon>
                    <h6>${item.quanitity}</h6>
                    <ion-icon class = "increase" name="caret-forward-circle-outline"></ion-icon>
                </div>
                <div class="col">
                    <h6>${item.price * item.quanitity}</h6>
                </div>
            </div>
            `
        })
        //updates the html with the subtotal, tax and total
        document.getElementById("Subtotal").innerHTML = subTotalCost;
        document.getElementById("TaxTotal").innerHTML = taxCost;
        document.getElementById("Total").innerHTML = totalCost;
        document.getElementById("paymentSubmit").style.display = "flex";
    }
}


//runs the function on load of page
onLoad();
addToCart();

function openPopUp() {
    document.getElementById("paymentPopUp").style.display = "flex";
    document.getElementById("popUpConfirmation").style.display = "flex";
}

function closePopUp() {
    document.getElementById("popUpConfirmation").style.display = "none";
    document.getElementById("paymentPopUp").style.display = "none";
    //clears local storage and updates the cart and cart icon to display as such
    localStorage.clear();
    onLoad();
    addToCart();
    document.getElementById("Subtotal").innerHTML = "$0.00";
    document.getElementById("TaxTotal").innerHTML = "$0.00";
    document.getElementById("Total").innerHTML = "$0.00";
}