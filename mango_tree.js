"use strict"

// release 0
class FruitTree {
  constructor(name,maxAge,maxHeight){
    this._name=name
    this._age=0
    this._height=0
    this._maxAge=maxAge
    this._maxHeight=maxHeight
    this._healthyStatus=true
    this._arrFruit=[]
  }
}
class Fruit {
  constructor(quality){
    this._quality=quality
  }
}

class MangoTree extends FruitTree{

  // Initialize a new MangoTree
  constructor(name,maxAge,maxHeight) {
    super(name,maxAge,maxHeight)
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height
  }


  get healtyStatus() {
    return this._healthyStatus
  }


  // Get current states here

  // Grow the tree
  grow() {

    for (var i = 0; i < this._maxAge; i++) {
      var randHeight=Math.random();
      if(this._age<this._maxHeight){
        this._height=this._height+randHeight
      }
      this._age++
      if(this._age>=this._maxAge){
        this._healthyStatus=false
      }
      return this._age
    }

  }

  // Produce some mangoes
  produceFruits() {
    this._arrFruit=[]
    let randProduce=Math.random()*20
    let eachQuality=[0,1]
    for (var i = 0; i < randProduce; i++) {
      let randQuality=eachQuality[Math.floor(Math.random()*eachQuality.length)]
      this._arrFruit.push(new Mango(randQuality))
    }

  }

  // Get some fruits
  harvest() {
    let countGood=0
    let countBad=0
    for (let i = 0; i < this._arrFruit.length; i++) {
      if(this._arrFruit[i]._quality===0){
        countBad++
      }
      else{
        countGood++
      }
    }

    return this._arrFruit.length+' (Good : '+countGood+', Bad :'+countBad+')'
  }

}

class Mango extends Fruit{
  // Produce a mango
  constructor(quality) {
    super(quality)
  }
}


  // * driver code untuk release 0
   let mangoTree = new MangoTree('Mango Tree',20,10)
   console.log(mangoTree._name+' is alive.');
    do {
     mangoTree.grow();
     mangoTree.produceFruits();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} m | Fruits harvested = ${mangoTree.harvest()}`)
   } while (mangoTree._healthyStatus != false)
   console.log(mangoTree._name+' has met its end.');
   console.log('\n');

class AppleTree extends FruitTree{
  constructor(name,maxAge,maxHeight) {
    super(name,maxAge,maxHeight)
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height
  }


  get healtyStatus() {
    return this._healthyStatus
  }

  // Get current states here

  // Grow the tree
  grow() {

    for (var i = 0; i < this._maxAge; i++) {
      var randHeight=Math.random();
      if(this._age<this._maxHeight){
        this._height=this._height+randHeight
      }
      this._age++
      if(this._age>=this._maxAge){
        this._healthyStatus=false
      }
      return this._age
    }

  }

  // Produce some mangoes
  produceFruits() {
    this._arrFruit=[]
    let randProduce=Math.random()*20
    let eachQuality=[0,1]
    for (var i = 0; i < randProduce; i++) {
      let randQuality=eachQuality[Math.floor(Math.random()*eachQuality.length)]
      this._arrFruit.push(new Mango(randQuality))
    }
  }

  // Get some fruits
  harvest() {
    let countGood=0
    let countBad=0
    for (let i = 0; i < this._arrFruit.length; i++) {
      if(this._arrFruit[i]._quality===0){
        countBad++
      }
      else{
        countGood++
      }
    }

    return this._arrFruit.length+' (Good : '+countGood+', Bad :'+countBad+')'
  }
}
class Apple extends Fruit{
  constructor(quality) {
    super(quality)
  }
}

let appleTree = new AppleTree('Apple Tree',15,8)
console.log(appleTree._name+' is alive.');
 do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)} m | Fruits harvested = ${appleTree.harvest()}`)
} while (appleTree._healthyStatus != false)
console.log(appleTree._name+' has met its end.');
console.log('\n');


class PeachTree extends FruitTree{
  constructor(name,maxAge,maxHeight) {
    super(name,maxAge,maxHeight)
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height
  }


  get healtyStatus() {
    return this._healthyStatus
  }

  // Get current states here

  // Grow the tree
  grow() {

    for (var i = 0; i < this._maxAge; i++) {
      var randHeight=Math.random();
      if(this._age<this._maxHeight){
        this._height=this._height+randHeight
      }
      this._age++
      if(this._age>=this._maxAge){
        this._healthyStatus=false
      }
      return this._age
    }

  }

  // Produce some mangoes
  produceFruits() {
    this._arrFruit=[]
    let randProduce=Math.random()*20
    let eachQuality=[0,1]
    for (var i = 0; i < randProduce; i++) {
      let randQuality=eachQuality[Math.floor(Math.random()*eachQuality.length)]
      this._arrFruit.push(new Mango(randQuality))
    }
  }

  // Get some fruits
  harvest() {
    let countGood=0
    let countBad=0
    for (let i = 0; i < this._arrFruit.length; i++) {
      if(this._arrFruit[i]._quality===0){
        countBad++
      }
      else{
        countGood++
      }
    }

    return this._arrFruit.length+' (Good : '+countGood+', Bad :'+countBad+')'
  }
}
class Peach extends Fruit{
  constructor(quality) {
    super(quality)
  }
}

let peachTree = new PeachTree('Peach Tree',10,5)
console.log(peachTree._name+' is alive.');
 do {
  peachTree.grow();
  peachTree.produceFruits();
  peachTree.harvest();
  console.log(`[Year ${peachTree.age} Report] Height = ${peachTree.height.toFixed(1)} m | Fruits harvested = ${peachTree.harvest()}`)
} while (peachTree._healthyStatus != false)
console.log(peachTree._name+' has met its end.');
console.log('\n');




// Release 2
