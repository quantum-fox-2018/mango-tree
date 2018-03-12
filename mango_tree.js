class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._fruitCapacity = 10
    this._fruitStock = 0
    this._pickedFruits = []
    this._healthyStatus = true
    this._matureAge = 5
    this._oldAge = 10
    this._maxAge =15
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
    return this._fruitCapacity
  }


  // Get current states here

  // Grow the tree
  grow() {
    if (this._age <= this._maxAge) {
      this._age += 1
    }
    if (this._age <= this._oldAge) {
      this._height +=1
    } /*Math.floor(Math.random()*3)*/
    if (this._age >= this._matureAge) {
      this.produceMangoes()
    }
    if (this._age === this._maxAge) {
      this._healthyStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this._fruitStock = Math.floor(Math.random()* this._fruitCapacity)
  }

  // Get some fruits
  harvest() {
      var counterBad = 0;
      var counterGood = 0;
      for (var i = 0; i < this._fruitStock; i++) {
        let randomQual = Math.floor(Math.random()*2)
        if (randomQual === 0) {
          counterGood += 1
        } else {
          counterBad += 1
        }
      }
    this._pickedFruits = `${this._fruitStock} (${counterGood} good, ${counterBad} bad)`;
  }

}

class Mango {
  // Produce a mango
  constructor(quality) {
    this._quality = quality
  }
}

  // * driver code untuk release 0
  let mangoTree = new MangoTree()
  do {
  mangoTree.grow();
  // mangoTree.produceMangoes();
  mangoTree.harvest();
  // console.log(mangoTree.harvested);
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healtyStatus != false)
// console.log(mangoTree.harvest());

// // Release 1
// class AppleTree {}
// class Apple {}
//
// // Release 2
// class FruitTree {}
// class Fruit {}
