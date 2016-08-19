var Shoes = (function () {
    function Shoes() {
    }
    return Shoes;
}());
var shoppingCart = [];
var nike = new Shoes();
nike.shoeName = 'airmax';
nike.price = 89.99;
var addidas = new Shoes();
addidas.shoeName = 'classic';
addidas.price = 99.99;
var jordans = new Shoes();
jordans.shoeName = '12s';
jordans.price = 159.99;
var shoe1 = document.getElementById('output');
shoe1.innerHTML = nike.shoeName + " -$" + nike.price;
var shoe2 = document.getElementById('output2');
shoe2.innerHTML = addidas.shoeName + " -$" + addidas.price;
var shoe3 = document.getElementById('output3');
shoe3.innerHTML = jordans.shoeName + " -$" + jordans.price;
function addToCart() {
    var item1 = document.getElementById('items');
    item1.innerHTML = nike.shoeName + " -$" + nike.price;
    shoppingCart.push(nike.price);
}
function addAddidas() {
    var item2 = document.getElementById('item2');
    item2.innerHTML = addidas.shoeName + " -$" + addidas.price;
    shoppingCart.push(addidas.price);
}
function addJordans() {
    var item3 = document.getElementById('item3');
    item3.innerHTML = jordans.shoeName + " -$" + jordans.price;
    shoppingCart.push(jordans.price);
}
var counter = 0;
function checkOut() {
    for (var _i = 0, shoppingCart_1 = shoppingCart; _i < shoppingCart_1.length; _i++) {
        var price = shoppingCart_1[_i];
        counter = counter + price;
        var checkOutPrice = document.getElementById('checkOutPrice');
        checkOutPrice.innerHTML = "" + counter;
    }
}
