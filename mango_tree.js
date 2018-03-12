"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._maxFruit = 20
    this._fruits = []
    this._harvested = 0
    this._maxHeight = 10
    this._mature = 12
    this._healtStatus = this.healthyStatus
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height.toFixed(1)
  }

  get fruits() {
    return this._fruits.join(',')
  }

  get healthyStatus() {
    this._healthStatus = this._age <= this._mature
    return this._healthStatus
  }

  get harvested() {
    return this._harvested
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age++
    if(this._age <= this._maxHeight){
      this._height += Math.random()*this._mature
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let count = Math.floor(Math.random()*this._maxFruit)
    
    for (let i = 0; i < count; i++) {
      let randQuality = Math.floor(Math.random()*count)
      if(randQuality >= 5){
        this._fruits.push(new Mango('good'))
      }
      else{
        this._fruits.push(new Mango('bad'))
      }
    }
    // return this._fruits
  }

  // Get some fruits
  harvest() {
    let fruitsCount = this._fruits.length
    let fruitsQuality = {
      good: 0,
      bad: 0
    }

    while (this._fruits.length > 0) {
      if (this._fruits[0]._quality === 'good')
        fruitsQuality.good++
      else{
        fruitsQuality.bad++
      }
      this._fruits.shift()
    }
    // console.log(this._fruits[0])
    return this._harvested = `${fruitsCount} (${fruitsQuality.good} good, ${fruitsQuality.bad} bad)`
  }
}

class Mango {
  // Produce a mango
  constructor(quality) {
    this._quality = quality
  }

}


   // driver code untuk release 0
  let mangoTree = new MangoTree()
  console.log('The tree is alive! :smile:')
  do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healthyStatus != false)
   console.log('The tree has met its end! :sad:')


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

console.log(mangoTree._fruits);


