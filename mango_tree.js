"use strict"

// Release 2
class FruitTree {
  constructor() {
    this._age = 0
    this._height = 0
    this._maxFruit = 20
    this._fruits = []
    this._harvested = 0
    this._maxHeight = 10
    this._mature = 12
    this._healthStatus = this.healthyStatus
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


  grow() {
    this._age++
    if(this._age <= this._maxHeight){
      this._height += Math.random()*2
    }
  }

  produceFruit() {
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
    return this._fruits
  }

  harvest() {
    let fruitsCount = this._fruits.length
    let countGood = 0
    let countBad = 0

    while (this._fruits.length > 0) {
      if (this._fruits[0]._quality === 'good')
        countGood++
      else{
        countBad++
      }
      this._fruits.shift()
    }
    return this._harvested = `${fruitsCount} (${countGood} good, ${countBad} bad)`
  }

}

class Fruit {
  constructor(quality) {
    this._quality = quality
  }
}



class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor() {
    super()
    this._maxFruit = 30
    this._mature = 14
  }

}

class Mango extends Fruit {
  // Produce a mango
  constructor(quality) {
    super(quality)
  }

}


class AppleTree extends FruitTree {
  constructor(){
    super()
    this._maxHeight = 5
    this._maxFruit = 50
  }

  produceFruit() {
    let count = Math.floor(Math.random()*this._maxFruit)
    
    for (let i = 0; i < count; i++) {
      let randQuality = Math.floor(Math.random()*count)
      if(randQuality >= 5){
        this._fruits.push(new Apple('red'))
      }
      else{
        this._fruits.push(new Apple('green'))
      }
    }
    return this._fruits
  }

  harvest() {
    let fruitsCount = this._fruits.length
    let countRed = 0
    let countGreen = 0

    while (this._fruits.length > 0) {
      if (this._fruits[0]._quality === 'red')
        countRed++
      else{
        countGreen++
      }
      this._fruits.shift()
    }
    return this._harvested = `${fruitsCount} Apples (${countRed} red, ${countGreen} green)`
  }

}

class Apple extends Fruit{
  constructor(quality) {
    super(quality)
  }
}


   // driver code untuk release 0
  let mangoTree = new MangoTree()
  console.log('The tree is alive! :smile:')
  do {
    mangoTree.grow();
    mangoTree.produceFruit();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healthyStatus != false)
   console.log('The tree has met its end! :sad:')


// console.log(mangoTree);
console.log('===============================================================');


let appleTree = new AppleTree()
  console.log('The tree is alive! :smile:')
  do {
    appleTree.grow();
    appleTree.produceFruit();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
   } while (appleTree.healthyStatus != false)
   console.log('The tree has met its end! :sad:')


