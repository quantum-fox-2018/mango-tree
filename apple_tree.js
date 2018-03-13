"use strict"
const {FruitTree, Fruit} = require("./fruit_tree.js");

class AppleTree extends FruitTree{
  // Initialize a new AppleTree
  constructor() {
    super();
    super.maxFruits = 5;
    super.maxAge = 10;
    super.maxHeight = 20;
    super.matureAge = 5;
  }
}

class Apple extends Fruit{
  // Produce a apple
  constructor() {
    super();
  }
}

module.exports = {
  AppleTree, Apple
}
