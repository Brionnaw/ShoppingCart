var Shoes = (function () {
    function Shoes() {
    }
    return Shoes;
}());
var nike = new Shoes();
nike.shoeName = 'airmax';
nike.price = 89.99;
var addidas = new Shoes();
addidas.shoeName = 'classic';
addidas.price = 99.99;
var jordans = new Shoes();
jordans.shoeName = '12s';
jordans.price = 159.99;
function itClicks() {
    console.log('itClicks');
}
var shoe1 = document.getElementById('output');
shoe1.innerHTML = nike.shoeName + " -$" + nike.price;
var shoe2 = document.getElementById('output2');
shoe2.innerHTML = addidas.shoeName + " -$" + addidas.price;
var shoe3 = document.getElementById('output3');
shoe3.innerHTML = jordans.shoeName + " -$" + jordans.price;
