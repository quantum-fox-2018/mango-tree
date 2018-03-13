"use strict"
const {FruitTree, Fruit} = require("./fruit_tree.js");

class MangoTree extends FruitTree{
  // Initialize a new MangoTree
  constructor() {
    super();
    super.maxFruits = 5;
    super.maxAge = 10;
    super.maxHeight = 20;
    super.matureAge = 5;
  }
}

class Mango extends Fruit{
  // Produce a mango
  constructor() {
    super();
  }
}

module.exports = {
  MangoTree, Mango
}
