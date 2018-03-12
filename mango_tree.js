"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(age, height, maxFruit, currentFruit, healtyStatus, pickedFruid, status) {

    this._age = age
    this._height = height
    this._maxFruit = maxFruit
    this._currentFruit = currentFruit
    this._healtyStatus = healtyStatus
    this._pickedFruid = pickedFruid
    this._good = 0
    this._bad = 0
  }

  get age() {

    return this._age
  }

  get height() {

    return this._height
  }

  get fruits() {

    return this._currentFruit
  }

  get healtyStatus() {

    return this._healtyStatus
  }

  get harvested() {

    return this._pickedFruid
  }

  get good() {

    return this._good
  }

  get bad () {

    return this._bad
  }


  // Get current states here

  // Grow the tree
  grow() {
    let matureAge = 5
    let dyingAge = 10

    if (this._age < dyingAge && this._age <= matureAge) {
      this._age += 1
      this._height += 5

    } else if (this._age < dyingAge && this._age > matureAge) {

      this._age ++
    } else {

      this._status = false
    }
    
  }

  // Produce some mangoes
  produceMangoes() {

    let matureAge = 5
    let dyingAge = 10

    if (this._age < dyingAge && this._age <= matureAge) {

      this._currentFruit += 0
    } else if (this._age < dyingAge && this._age > matureAge) {

      this._currentFruit = Math.floor(Math.random()*10)
    } else {

      this._status = false
    }
  }

  // Get some fruits
  harvest() {

    let matureAge = 5
    let dyingAge = 10

    if (this._age < dyingAge && this._age <= matureAge) {

      this._pickedFruid += 0
    } else if(this._age < dyingAge && this._age > matureAge) {

      let maxHarvest = this.fruits

      let basket = []
      let goodFruit = 0
      let badFruit = 0

      for (let i = 0; i < maxHarvest; i++) {
        
        let checkFruit = Math.floor(Math.random()*2)

        if(checkFruit === 0) {

          let newMango = new Mango('Good')
          basket.push(newMango)
        } else {

          let newMango = new Mango('Bad')
          basket.push(newMango)
        }
      }

      for (let i = 0; i < basket.length; i++) {
        
        if (basket[i]._quality === 'Good') {

          goodFruit += 1
        } else {

          badFruit +=1
        }
      }

      this._good = goodFruit
      this._bad = badFruit
    } else {

      this._status = false
    }
  }

}

class Mango {
  // Produce a mango
  constructor(quality) {

    this._quality = quality
  }
}

/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harverst();
  *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
  * } while (mangoTree.healthyStatus != false)
  */

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

let mangoTree = new MangoTree(0,0,0,true,0)

do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height}m | Fruits harvested = ${mangoTree.good+mangoTree.bad} (${mangoTree.good} good, ${mangoTree.bad} bad)`)
} while (mangoTree.healtyStatus == true)
