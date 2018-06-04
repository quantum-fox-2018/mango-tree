const {AppleTree, Apple} = require("./apple_tree.js");
const {MangoTree, Mango} = require("./mango_tree.js");

let appleTree = new AppleTree();
console.log(appleTree);
console.log("Apple");
console.log("The apple tree is alive! :smile:");
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthyStatus != false)
console.log("The apple tree has met its end. :sad:");

console.log();

let mangoTree = new MangoTree();
console.log("Mango");
console.log("The mango tree is alive! :smile:");
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthyStatus != false)
console.log("The mango tree has met its end. :sad:");
