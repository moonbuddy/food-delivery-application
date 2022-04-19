let menuLists = [
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

const tax = 0.095;

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


function cartNumber(menuList, action) {
    //pulls from storage and stores it in variable
    let counter = localStorage.getItem("counter");
    //turns the string to a number
    counter = Number(counter);
    
    let menuItems = localStorage.getItem("menuInCart");
    menuItems = JSON.parse(menuItems);

    if(action == "decrease"){
        localStorage.setItem("counter", counter - 1);
        document.getElementById("cartNumber").innerHTML = counter - 1;
    }
    else if(counter){ //if value exists then cart is updated
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

function menuTotal(menuList, action){
    //pulls from storage items that were stored if any
    let subTotalCost = localStorage.getItem("subTotalCost");
    let taxCost = localStorage.getItem("taxCost");
    let totalCost = localStorage.getItem("totalCost");

    if(action == "decrease"){
        subTotalCost = Number(subTotalCost);
        localStorage.setItem("subTotalCost", subTotalCost - menuList.price);
    
        let taxes = ((subTotalCost - menuList.price)*tax).toFixed(2);
        taxes = Number(taxes);
        localStorage.setItem("taxCost", taxes);

        let total = (subTotalCost - menuList.price) + taxes;
        localStorage.setItem("totalCost", total.toFixed(2));
    }
    //check to see if subtotal has a value already
    else if(subTotalCost != null){
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
                        <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger deleteItem">
                            <ion-icon name="close-outline"></ion-icon>
                        </span>
                        <h6 id="name">${item.name}</h6>
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
    else{ //executes when storage is empty
        document.getElementById("Subtotal").innerHTML = "0.00";
        document.getElementById("TaxTotal").innerHTML = "0.00";
        document.getElementById("Total").innerHTML = "0.00";
        document.getElementById("paymentSubmit").style.display = "none";
    }
    //adds functionality to the remove buttons
    removeFromCart();
    manageAmount();
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
    document.getElementById("Subtotal").innerHTML = "0.00";
    document.getElementById("TaxTotal").innerHTML = "0.00";
    document.getElementById("Total").innerHTML = "0.00";
}

function removeFromCart() {
    //selects all the remove buttons
    let deleteMenuItem = document.querySelectorAll(".deleteItem");
    let menuName;
    let menuCount = localStorage.getItem("counter");
    let menuItems = localStorage.getItem("menuInCart");
    menuItems = JSON.parse(menuItems);

    let subTotalCost = localStorage.getItem("subTotalCost");
    let taxCost = localStorage.getItem("taxCost");
    let totalCost = localStorage.getItem("totalCost");
    //converts string to number
    subTotalCost = Number(subTotalCost);
    taxCost = Number(taxCost);
    totalCost = Number(totalCost);

    for(let i=0; i < deleteMenuItem.length; i++){
        deleteMenuItem[i].addEventListener("click", () => {
            //selects the name of the item with the associated button clicked
            menuName = deleteMenuItem[i].parentElement.textContent.trim();
            
            localStorage.setItem('counter', menuCount - menuItems[menuName].quanitity);

            //subtract the menu item from subtotal
            subTotalCost = subTotalCost - (menuItems[menuName].price * menuItems[menuName].quanitity)
            localStorage.setItem('subTotalCost', subTotalCost.toFixed(2));

            //calculates new tax
            taxCost = subTotalCost*tax;
            localStorage.setItem("taxCost", taxCost.toFixed(2));

            //new total
            totalCost = subTotalCost + taxCost;
            localStorage.setItem("totalCost", totalCost.toFixed(2));

            //updates the storage with menu item deleted
            delete menuItems[menuName];
            localStorage.setItem('menuInCart', JSON.stringify(menuItems));
            
            //clears storage if no items in cart
            if(Object.keys(menuItems).length === 0){
                localStorage.clear();
            }

            //refreshes the cart and icon
            onLoad();
            addToCart();
        })
    }
}

//change quantity of indiviudal menu items
function manageAmount(){
    let decreasebutton = document.querySelectorAll(".decrease");
    let increasebutton = document.querySelectorAll(".increase");
    let currentQuantity = 0;
    let currentMenuItem = "";
    let menuItems = localStorage.getItem("menuInCart");
    menuItems = JSON.parse(menuItems);

    for(let i = 0; i < decreasebutton.length; i++){
        decreasebutton[i].addEventListener("click", () => {
            currentQuantity = decreasebutton[i].parentElement.querySelector("h6").textContent;
            currentMenuItem = decreasebutton[i].parentElement.previousElementSibling.previousElementSibling.previousElementSibling.querySelector("h6").textContent;
            
            if(menuItems[currentMenuItem].quanitity > 1){
                menuItems[currentMenuItem].quanitity -= 1;
                cartNumber(menuItems[currentMenuItem], "decrease");
                menuTotal(menuItems[currentMenuItem], "decrease");
                localStorage.setItem("menuInCart", JSON.stringify(menuItems));
                addToCart();
            }
        })
    }

    for(let i = 0; i < increasebutton.length; i++){
        increasebutton[i].addEventListener("click", () => {
            currentQuantity = increasebutton[i].parentElement.querySelector("h6").textContent;
            currentMenuItem = increasebutton[i].parentElement.previousElementSibling.previousElementSibling.previousElementSibling.querySelector("h6").textContent;
            
            menuItems[currentMenuItem].quanitity += 1;
            cartNumber(menuItems[currentMenuItem]);
            menuTotal(menuItems[currentMenuItem]);
            localStorage.setItem("menuInCart", JSON.stringify(menuItems));
            addToCart();
            
        })
    }
}