class Shoes {
      shoeName:string
      price:number
    constructor() {
      this.shoeName = 'tennis shoes'
      this.price = 69.99
  
    }

}
let shoe1 = new Shoes ();
let shoeItem = <HTMLElement>document.getElementById("shopping-cart");
shoeItem.innerHTML = `${shoe1.shoeName} -$ ${shoe1.price}`;

let shoe2 = new Shoes();
 shoe2.shoeName= 'high heel';
 shoe2.price = 49.99;
 shoeItem.innerHTML = `${shoe2.shoeName} -$ ${shoe2.price}`;


console.log(shoe2.shoeName)
console.log(shoe1.shoeName)

// add onclick
// add cart section
