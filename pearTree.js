"use strict"

const FruitTree = require('./fruitTree.js')

class PearTree extends FruitTree {
  // Produce a mango
  constructor() {

    super()

  }
}

let pearTree = new FruitTree()
do {
  pearTree.grow();
  pearTree.produceMangoes();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree._healthy != false)
