"use strict"

const FruitTree = require('./fruitTree.js')

class MangoTree extends FruitTree {
  // Produce a mango
  constructor() {

    super()

  }

}

   // driver code untuk release 0
   let mangoTree = new FruitTree()
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree._healthy != false)

// module.exports = Mango

// Release 1
// class AppleTree {}
// class Apple {}

// // Release 2
// class FruitTree {}
// class Fruit {}
