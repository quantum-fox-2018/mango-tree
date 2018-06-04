"use strict"

// release 0
class FruitTree {
  constructor() {
    this._age = 0
    this._height = 0
    this._fruitCap = 10
    this._fruitStock = 0
    this._pickedFruits = []
    this._fruitBasket = []
    this._healthyStatus = true
    this._matureAge = 5
    this._oldAge = 10
    this._maxAge =15
    // this._good = 0
    // this._bad = 0

  }
  get age() {
    return this._age
  }

  get height() {
    return this._height
  }

  get fruits() {
    return this._fruitStock
  }

  get healtyStatus() {
    return this._healthyStatus
  }

  get harvested() {
    return this._pickedFruits
  }

  get fruitcap() {
    return this._fruitCap
  }
  grow() {
    if (this._age <= this._maxAge) {
      this._age += 1
    }
    if (this._age <= this._oldAge) {
      this._height += Number((Math.random()*3).toFixed(1))
    } /*Math.floor(Math.random()*3)*/
    if (this._age >= this._matureAge) {
      this.produceFruits()
    }
    if (this._age === this._maxAge) {
      this._healthyStatus = false
    }


  }

  // Produce some mangoes
  produceFruits() {
    var fruitBasket = []
    this._fruitStock = Math.floor(Math.random()* this._fruitCap)
    for (var i = 0; i < this._fruitStock; i++) {
      let randomQual = Math.floor(Math.random()*2)
      if (randomQual === 0) {
        fruitBasket.push(0)
      } else {
        fruitBasket.push(1)
      }
    }
    this._fruitBasket = fruitBasket
  }

  // Get some fruits
  harvest() {
    var bad = 0;
    var good = 0;
    var cekQual = this._fruitBasket
    for (var i = 0; i < cekQual.length; i++) {
      let Qual = new Fruit (cekQual[i])
      if (Qual.statQuality() === 'good') {
        good += 1
      } else {
        bad += 1
      }
    }
    this._pickedFruits = `${this._fruitStock} (${good} good, ${bad} bad)`;
  }
}

class Fruit {
  constructor(quality) {
    this._quality = quality
  }
  statQuality() {
    if (this._quality === 1) {
      return 'good'
    } else {
      return 'bad'
    }
  }
}

class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor() {
    super()
      // this._age = 0
      // this._height = 0
      this._fruitCap = 15
      // this._fruitStock = 0
      // this._pickedFruits = []
      // this._fruitBasket = []
      // this._healthyStatus = true
      this._matureAge = 5
      this._oldAge = 15
      this._maxAge =20
    // this._good = 0
    // this._bad = 0
  }
}

class DurianTree extends FruitTree {

  // Initialize a new MangoTree
  constructor() {
    super()
      this._fruitCap = 13
      this._matureAge = 3
      this._oldAge = 10
      this._maxAge = 12
  }
}

// class Mango extends Fruit {
//   // Produce a mango
//   constructor(quality) {
//     this._quality = quality
//   }
//   statQuality() {
//     if (this._quality === 1) {
//       return 'good'
//     } else {
//       return 'bad'
//     }
//   }
// }

  // * driver code untuk release 0
  let fruitTree = new FruitTree()
  let mangoTree = new MangoTree()
  let durianTree = new DurianTree()
  do {
  durianTree.grow();
  // mangoTree.produceMangoes();
  durianTree.harvest();
  // console.log(mangoTree.harvested);
  console.log(`[Year ${durianTree.age} Report] Height = ${durianTree.height.toFixed(1)} m | Fruits harvested = ${durianTree.harvested}`)
} while (durianTree.healtyStatus != false)
// console.log(mangoTree.harvest());

// // Release 1




//
// // Release 2
// class FruitTree {}
// class Fruit {}
