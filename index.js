'use strict'
let trees = require('./fruitTrees.js')
let fruitTrees = trees.FruitTrees
let MangoTree = trees.MangoTree
let AppleTree = trees.AppleTree
let PearTree = trees.PearTree

console.log('The Mango Tree is alive!')
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
}
while (mangoTree._healtyStatus == true)
console.log('The Mango Tree has met its end.')

console.log('The Apple Tree is alive!')
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
}
while (appleTree._healtyStatus == true)
console.log('The Apple Tree has met its end.')

console.log('The Pear Tree is alive!')
let pearTree = new PearTree()
do {
  pearTree.grow();
  pearTree.produceApples();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
}
while (pearTree._healtyStatus == true)
console.log('The Pear Tree has met its end.')