"use strict"

const FruitTree = require('./fruitTree.js')

class AppleTree extends FruitTree {
  // Produce a mango
  constructor() {

    super()

  }

}

let appleTree = new FruitTree()
do {
  appleTree.grow();
  appleTree.produceMangoes();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree._healthy != false)
