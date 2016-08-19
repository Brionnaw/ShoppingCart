class Shoes {
      shoeName:string
      price:number
      constructor() {

    }
}
let nike = new Shoes ()
nike.shoeName = 'airmax'
nike.price = 89.99

let addidas = new Shoes ()
addidas.shoeName = 'classic'
addidas.price = 99.99

let jordans = new Shoes ()
jordans.shoeName = '12s'
jordans.price = 159.99

function itClicks(){
  console.log('itClicks')
}



let shoe1 = <HTMLElement>document.getElementById('output')
 shoe1.innerHTML = `${nike.shoeName} -$${nike.price}`;

 let shoe2 = <HTMLElement>document.getElementById('output2')
  shoe2.innerHTML = `${addidas.shoeName} -$${addidas.price}`;

let shoe3 = <HTMLElement>document.getElementById('output3')
   shoe3.innerHTML = `${jordans.shoeName} -$${jordans.price}`;


// add onclick
// add cart section
