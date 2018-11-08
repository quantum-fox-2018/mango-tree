'use strict'
let fruits = require('./fruits.js')
let Fruits = fruits.Fruits
let Mango = fruits.Mango
let Apple = fruits.Apple
let Pear = fruits.Pear

class FruitTrees {
  constructor(matureAge, healtyAge) {
    this._age = 0
    this._matureAge = matureAge
    this._healtyAge = healtyAge
    this._height = 0
    this._healtyStatus = true
    this._fruits = []
    this._harvested = ''
  }

  get age() {
    return this._age
  }
  get height() {
    return `${this._height.toFixed(1)} m`
  }
  get fruits() {
    return this._fruits
  }
  get healtyStatus() {
    return this._healtyStatus
  }
  get harvested() {
    return this._harvested
  }

  grow() {
    this._age++

      if (this._age <= this._matureAge) {
        this._height += Number(Math.random())
      }

    if (this._age >= this._healtyAge) {
      this._healtyStatus = false
    } else {
      this._healtyStatus = true
    }
  }

  harvest() {
    let good = 0
    let bad = 0

    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i]._quality == 'good') {
        good++
      } else {
        bad++
      }
    }
    this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`
    this._fruits = []
  }

  produceFruit(fruit) {
    let totalProduce = Math.floor((Math.random() * 10) + 1)
    for (let i = 0; i < totalProduce; i++) {
      if (fruit == 'mango') {
        this._fruits.push(new Mango())
      } else if (fruit == 'apple') {
        this._fruits.push(new Apple())
      } else if (fruit == 'pear') {
        this._fruits.push(new Pear())
      }
    }
  }

}

class MangoTree extends FruitTrees {
  constructor() {
    super(10, 20)
  }
  produceMangoes() {
    super.produceFruit('mango')
  }
}

class AppleTree extends FruitTrees {
  constructor() {
    super(5, 10)
  }
  produceApples() {
    super.produceFruit('apple')
  }
}

class PearTree extends FruitTrees {
  constructor() {
    super(10, 15)
  }
  produceApples() {
    super.produceFruit('pear')
  }
}

module.exports = {
  FruitTrees: FruitTrees,
  MangoTree: MangoTree,
  AppleTree: AppleTree,
  PearTree: PearTree,
}