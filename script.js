
// SELECT COFFEE
function selectCoffee(coffee) {

    document.getElementById("coffee").value = coffee;

    document.getElementById("order").scrollIntoView();
}


// CALCULATE BILL
function calculateBill() {

    let coffee = document.getElementById("coffee").value;

    let quantity = Number(document.getElementById("quantity").value);

    let coupon = document.getElementById("coupon").value.toUpperCase();

    let price = 0;

    // SET COFFEE PRICE
    if (coffee == "Cappuccino") {
        price = 100;
    }
    else if (coffee == "Cold Coffee") {
        price = 120;
    }
    else if (coffee == "Espresso") {
        price = 80;
    }
    else if(coffee=="Mocha"){
        price=150;
    }
    else if(coffee=="Latte"){
        price=130;
    }
    else if(coffee=="Americano"){
        price=110;
    }
    else if(coffee=="Macchiato"){
        price=140;
    }
    else if(coffee=="Flat White"){
        price=135;
    }
    else if(coffee=="Irish Coffee"){
        price=180;
    }
    else if(coffee=="Hazelnut Coffee"){
        price=160;
    }
    else if(coffee=="Vanilla Coffee"){
        price=160;
    }
    else {
        price = 170;
    }

    // CHECK QUANTITY
    if (quantity < 1 || quantity > 40 || quantity % 1 != 0) {

        alert("Please enter quantity between 1 and 100.");

        return false;
    }

    // CALCULATE TOTAL
    let total = price * quantity;

    let discount = 0;

    // COUPON CHECK
    if (coupon == "LUCKY10") {

        discount = total * 10 / 100;

    }
    else if (coupon != "") {

        alert("Invalid coupon! Try LUCKY10.");

        return false;
    }

    // FINAL BILL
    total = total - discount;

    document.getElementById("result").style.display = "block";

    document.getElementById("result").innerHTML =

        "<h3>Your Coffee Bill</h3>" +

        "<p>Coffee: " + coffee + "</p>" +

        "<p>Price: ₹" + price + "</p>" +

        "<p>Quantity: " + quantity + "</p>" +

        "<p>Discount: ₹" + discount + "</p>" +

        "<h3>Total Amount: ₹" + total + "</h3>";

    return true;
}

// PLACE ORDER
document.getElementById("orderForm").onsubmit = function(event) {

    event.preventDefault();

    if (calculateBill() == false) {
        return;
    }

    let name = document.getElementById("name").value;

    document.getElementById("result").innerHTML +=

        "<p>Thank you, " + name + "!</p>" +

        "<p>✅Your order has been received successfully.</p>";

};

//SUBMIT FEEDBACK
document.getElementById("feedbackForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let rating = document.getElementById("rating").value;
    let message = document.getElementById("message").value;

    if (name && email && rating && message) {

        document.getElementById("feedbackResult").innerHTML =
            "Thank you, " + name + "! Your feedback has been received.";

        document.getElementById("feedbackForm").reset();
    }

});
