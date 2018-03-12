"use strict"

// release 0

class FruitTree {
  constructor() {
    this._age = 0
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
    return Math.random()*2
  }

  grow() {
    this._age++
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
    if(this._age>3){
      this._fruits = this.randomFruits()
    }
  }

  harvest() {
    let countGood = 0
    let countBad = 0
    for(let i=0; i<this.fruits; i++){
      let random = Math.floor(Math.random()*2)
      if(random==0){
        countGood++
      } else {
        countBad++
      }
    }
    this._harvested = `${countGood} good, ${countBad} bad`
  }

}

class MangoTree extends FruitTree {
  constructor() {
    super()
  }
}

class AppleTree extends FruitTree {
  constructor() {
    super()
  }

  randomGrowth(){
    return Math.random()*1
  }

  randomFruits(){
    return Math.ceil(Math.random()*30)+10
  }
}

class PeerTree extends FruitTree {
  constructor() {
    super()
  }

  randomGrowth(){
    return Math.random()*1
  }

  randomFruits(){
    return Math.ceil(Math.random()*25)+10
  }
}

console.log(`The tree is alive! :smile:`)
// // mango tree
// let mangoTree = new MangoTree()
// do {
//   mangoTree.grow()
//   mangoTree.produceMangoes()
//   mangoTree.harvest()
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(2)} | Fruits harvested = ${mangoTree.fruits} (${mangoTree.harvested})`)
// } while (mangoTree.healthyStatus !== false)

// apple tree
// let appleTree = new AppleTree()
// do {
//   appleTree.grow()
//   appleTree.produceMangoes()
//   appleTree.harvest()
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(2)} | Fruits harvested = ${appleTree.fruits} (${appleTree.harvested})`)
// } while (appleTree.healthyStatus !== false)

//peer tree
let peerTree = new PeerTree()
do {
  peerTree.grow()
  peerTree.produceMangoes()
  peerTree.harvest()
  console.log(`[Year ${peerTree.age} Report] Height = ${peerTree.height.toFixed(2)} | Fruits harvested = ${peerTree.fruits} (${peerTree.harvested})`)
} while (peerTree.healthyStatus !== false)
console.log(`The tree has met its end! :sad:`)

// // Release 1
// class AppleTree {}
// class Apple {}
//
// // Release 2
// class FruitTree {}
// class Fruit {}
