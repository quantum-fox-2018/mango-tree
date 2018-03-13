"use strict"

class FruitTree {
  constructor(name) {
    this.name = name
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthyStatus = true
    this._harvested = ''
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healtyStatus() {
    return this._healthyStatus;
  }

  get harvested() {
    return this._harvested;
  }

  randomGrowth(){
    return Math.random()*2
  }

  grow() {
    this._age++
    this._fruits = []
    if(this.age<=10){
      this._height += this.randomGrowth()
    } else if(this.age == 20){
      this.healthyStatus = false
    }
  }

  randomFruits(){
    return Math.ceil(Math.random()*20)+5
  }

  produceMangoes() {
    let sum = this.randomFruits()
    if(this._age>3){
      for(let i=0; i<sum; i++){
        let fruit = new Fruit()
        this._fruits.push(fruit.quality)
      }
    }
  }

  harvest() {
    let countGood = 0
    let countBad = 0
    for(let i=0; i<this._fruits.length; i++){
      if(this._fruits[i]=='good'){
        countGood++
      } else {
        countBad++
      }
    }
    this._harvested = `${countGood} good, ${countBad} bad`
  }
}

class Fruit {
  constructor() {
    this.quality = this.fruitQuality()
  }

  fruitQuality(){
    let type = ['good','bad']
    let random = Math.floor(Math.random()*2)
    return type[random]
  }
}

class MangoTree extends FruitTree {
  constructor(name) {
    super(name)
  }
}

class AppleTree extends FruitTree {
  constructor(name) {
    super(name)
  }

  randomGrowth(){
    return Math.random()*1
  }

  randomFruits(){
    return Math.ceil(Math.random()*30)+10
  }
}

class PearTree extends FruitTree {
  constructor(name) {
    super(name)
  }

  randomGrowth(){
    return Math.random()*1
  }

  randomFruits(){
    return Math.ceil(Math.random()*25)+10
  }
}

console.log(`The tree is alive! :smile:`)
// mango tree
let mangoTree = new MangoTree('Mango')
do {
  mangoTree.grow()
  mangoTree.produceMangoes()
  mangoTree.harvest()
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(2)} | Fruits harvested = ${mangoTree.fruits.length} (${mangoTree.harvested})`)
} while (mangoTree.healthyStatus !== false)

// // apple tree
// let appleTree = new AppleTree('Apple')
// do {
//   appleTree.grow()
//   appleTree.produceMangoes()
//   appleTree.harvest()
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(2)} | Fruits harvested = ${appleTree.fruits.length} (${appleTree.harvested})`)
// } while (appleTree.healthyStatus !== false)

// // pear tree
// let pearTree = new PearTree('Pear')
// do {
//   pearTree.grow()
//   pearTree.produceMangoes()
//   pearTree.harvest()
//   console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed(2)} | Fruits harvested = ${pearTree.fruits.length} (${pearTree.harvested})`)
// } while (pearTree.healthyStatus !== false)
console.log(`The tree has met its end! :sad:`)

// // Release 1
// class AppleTree {}
// class Apple {}
//
// // Release 2
// class FruitTree {}
// class Fruit {}
