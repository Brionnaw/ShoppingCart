class Shoes {
      shoeName:string
      price:number
      constructor() {

    }
}
let shoppingCart = []

let nike = new Shoes ()
nike.shoeName = 'airmax'
nike.price = 89.99

let addidas = new Shoes ()
addidas.shoeName = 'classic'
addidas.price = 99.99

let jordans = new Shoes ()
jordans.shoeName = '12s'
jordans.price = 159.99



let shoe1 = <HTMLElement>document.getElementById('output')
 shoe1.innerHTML = `${nike.shoeName} -$${nike.price}`;

 let shoe2 = <HTMLElement>document.getElementById('output2')
  shoe2.innerHTML = `${addidas.shoeName} -$${addidas.price}`;

let shoe3 = <HTMLElement>document.getElementById('output3')
   shoe3.innerHTML = `${jordans.shoeName} -$${jordans.price}`;

 function addToCart (){
  let item1 = <HTMLElement>document.getElementById('items')
  item1.innerHTML = `${nike.shoeName} -$${nike.price}`;
  shoppingCart.push(nike.price)
 }

 function addAddidas (){
  let item2 = <HTMLElement>document.getElementById('item2')
  item2.innerHTML = `${addidas.shoeName} -$${addidas.price}`;
  shoppingCart.push(addidas.price)
 }
 function addJordans (){
  let item3 = <HTMLElement>document.getElementById('item3')
  item3.innerHTML = `${jordans.shoeName} -$${jordans.price}`;
  shoppingCart.push(jordans.price)
}
let counter = 0;
 function checkOut () {
   for (let price of shoppingCart) {
     counter =  counter + price;  // on loop one counter = 89.99
    let checkOutPrice = <HTMLElement>document.getElementById('checkOutPrice')
    checkOutPrice.innerHTML = `${counter}`;
   }
 }

// add cart section
