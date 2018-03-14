"use strict"

// release 0

class MangoTree {
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
    return (Math.random()*2)
  }

  grow() {
    this._age++
    if(this._age<=10){
      this._height += this.randomGrowth()
    } else if(this._age == 20){
      this.healthyStatus = false
    }
  }

  randomFruits(){
    return Math.round(Math.random()*20)+5
  }

  produceMangoes() {
    if(this._age>3){
      this._fruits = this.randomFruits()
    }

    this.panen =[]
    for(let i=0;i<this._fruits;i++){
      let mango = new Mango()
      this.panen.push(mango)
        //console.log(this.panen);
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

class Mango {
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
let mangoTree = new MangoTree()
let mango = new Mango()
do {
  mangoTree.grow()
  mangoTree.produceMangoes()
  mangoTree.harvest()
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(2)} | Fruits harvested = ${mangoTree.fruits} (${mangoTree.harvested})`)
} while (mangoTree.healthyStatus !== false)

// // apple tree
// let appleTree = new AppleTree()
// do {
//   appleTree.grow()
//   appleTree.produceMangoes()
//   appleTree.harvest()
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(2)} | Fruits harvested = ${appleTree.fruits} (${appleTree.harvested})`)
// } while (appleTree.healthyStatus !== false)

// // peer tree
// let peerTree = new PeerTree()
// do {
//   peerTree.grow()
//   peerTree.produceMangoes()
//   peerTree.harvest()
//   console.log(`[Year ${peerTree.age} Report] Height = ${peerTree.height.toFixed(2)} | Fruits harvested = ${peerTree.fruits} (${peerTree.harvested})`)
// } while (peerTree.healthyStatus !== false)
console.log(`The tree has met its end! :sad:`)
//console.log(  mangoTree.harvest());
//console.log(Mango.randomQuality());
//console.log(mangoTree.panen);

// // Release 1
// class AppleTree {}
// class Apple {}
//
// // Release 2
// class FruitTree {}
// class Fruit {}
