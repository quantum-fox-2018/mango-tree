"use strict"

// release 0

class FruitTree {
  constructor(ages) {
    this._age = 0
    this.deadTrees = ages
    this._height = 0
    this._fruits = 0
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
    return (Math.random()*2)
  }

  grow() {
    this._age++
    if(this._age<=10){
      this._height += this.randomGrowth()
    } if(this._age >= this.deadTrees){
        console.log(' apple tree dead');
    } if(this._age == 25){
      this.healthyStatus = false
    }
  }

  randomFruits(){
    return Math.round(Math.random()*20)+5
  }

  produceFruit() {
    if(this._age>1){
      this._fruits = this.randomFruits()
    }
    this.panen =[]
    for(let i=0;i<this._fruits;i++){
      let fruit = new Fruit()
      this.panen.push(fruit)
    }
  }

  harvest() {
    let countGood = 0
    let countBad = 0
    for (var i = 0; i < this.panen.length; i++) {
      if( !this.panen[i].quality  ){
        countBad++
      }else{
        countGood++
      }
    }
    this._harvested = `${countGood} good, ${countBad} bad`
  }
}

class MangoTree extends FruitTree {
  constructor() {
    super(25)
  }


}

class AppleTree extends FruitTree {
  constructor() {
    super(20)
  }  
}

class PeerTree extends FruitTree {
  constructor() {
    super(25)
  }

}

class Fruit {
  constructor() {
  this.quality = this.randomQuality()
  }

  randomQuality(){
  let random = Math.round(Math.random()*2)
    if(random==1){
      return false
    } else {
      return true
    }
  }

  randomGrowth(){
    return Math.random()*1
  }

  randomFruits(){
    return Math.round(Math.random()*30)+10
  }

}

console.log(`The tree is alive! :smile:`)
// mango tree




let fruit = new Fruit()
let appleTree = new AppleTree()
let fruitTree = new FruitTree()
// do {
//   fruitTree.grow()
//   fruitTree.produceFruit()
//   fruitTree.harvest()
//   console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height.toFixed(2)} | Fruits harvested = ${fruitTree.fruits} (${fruitTree.harvested})`)
// } while (fruitTree.healthyStatus !== false)

// apple tree
//let pohonaple = new AppleTree()
do {
  appleTree.grow()
  appleTree.produceFruit()
  appleTree.harvest()
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(2)} | Fruits harvested = ${appleTree.fruits} (${appleTree.harvested})`)
} while (appleTree.healthyStatus !== false)

// // peer tree
// let peerTree = new PeerTree()
// do {
//   peerTree.grow()
//   peerTree.produceFruit`()
//   peerTree.harvest()
//   console.log(`[Year ${peerTree.age} Report] Height = ${peerTree.height.toFixed(2)} | Fruits harvested = ${peerTree.fruits} (${peerTree.harvested})`)
// } while (peerTree.healthyStatus !== false)
console.log(`The tree has met its end! :sad:`)
//console.log(mangoTree.panen);

// // Release 1
// class AppleTree {}
// class Apple {}
//
// // Release 2
// class FruitTree {}
// class Fruit {}
