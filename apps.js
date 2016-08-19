var Shoes = (function () {
    function Shoes() {
        this.shoeName = 'tennis shoes';
        this.price = 69.99;
    }
    return Shoes;
}());
var shoe1 = new Shoes();
var shoeItem = document.getElementById("shopping-cart");
shoeItem.innerHTML = shoe1.shoeName + " -$ " + shoe1.price;
var shoe2 = new Shoes();
shoe2.shoeName = 'high heel';
shoe2.price = 49.99;
shoeItem.innerHTML = shoe2.shoeName + " -$ " + shoe2.price;
console.log(shoe2.shoeName);
console.log(shoe1.shoeName);
