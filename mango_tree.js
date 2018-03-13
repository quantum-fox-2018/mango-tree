"use strict"

// release 0

class FruitTree {

  // Initialize a new MangoTree
  constructor(tree) {
    this._age = 0 ;
    this._height = 0 ;
    this._fruits = [] ;
    this._healthy = true ;
    this._harvest = ''
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height.toFixed(2)
  }

  get fruits() {
    return this._fruits
  }

  get healtyStatus() {
    return this._healthy
  }

  get harvested() {

    return this._harvest

  }


  // Get current states here

  // Grow the tree
  grow() {

  this._age++

    if (this._age < 10 ) {
      this._height += (Math.random()*2)
    }

    if (this._age >= 20) {
      this._healthy = false
    }

    return this

  }

  // Produce some mangoes
  produceMangoes() {

  }

  // Get some fruits
  harvest() {

    let good = 0
    let bad = 0

    let berbuah = Math.floor(1 + Math.random() * (1 + Math.random()*2)) * Math.floor(1 + Math.random() * 8)

    for (var i = 0; i < berbuah; i++) {

      let random = Math.floor(Math.random() * 2)

      if (random == 0) {
        good++
      } else {
        bad++
      }

    }

    this._harvest = `${good + bad} (${good} good ${bad} bad)`

    return this

  }

}




class MangoTree extends FruitTree {
  // Produce a mango
  constructor() {

    super()

  }

}

class AppleTree extends FruitTree {
  // Produce a mango
  constructor() {

    super()

  }

}

class PearTree extends FruitTree {
  // Produce a mango
  constructor() {

    super()

  }
}



   // driver code untuk release 0
   let mangoTree = new FruitTree()
   console.log('\n' +'Mango Tree' +' ============================================= '+'\n');

   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree._healthy != false)

   let appleTree = new FruitTree()
   console.log('\n' +'Apple Tree'+' ============================================= ' +'\n');
   do {
     appleTree.grow();
     appleTree.produceMangoes();
     appleTree.harvest();
     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
   } while (appleTree._healthy != false)

   let pearTree = new FruitTree()
   console.log('\n' +'Pear Tree'+' ============================================= ' +'\n');
   do {
     pearTree.grow();
     pearTree.produceMangoes();
     pearTree.harvest();
     console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
   } while (pearTree._healthy != false)


// console.log(mangoTree);
// Release 1
// class AppleTree {}
// class Apple {}

// // Release 2
// class FruitTree {}
// class Fruit {}
