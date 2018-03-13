"use strict"

// release 0
module.exports = class FruitTree {

  // Initialize a new MangoTree
  constructor(tree) {
    this._age = 0 ;
    this._height = 0 ;
    this._fruits = [] ;
    this._healthy = true ;
    this._harvest = ''
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height.toFixed(2)
  }

  get fruits() {
    return this._fruits
  }

  get healtyStatus() {
    return this._healthy
  }

  get harvested() {

    return this._harvest

  }


  // Get current states here

  // Grow the tree
  grow() {

  this._age++

    if (this._age < 10 ) {
      this._height += (Math.random()*2)
    }

    if (this._age >= 20) {
      this._healthy = false
    }

    return this

  }

  // Produce some mangoes
  produceMangoes() {

  }

  // Get some fruits
  harvest() {

    let good = 0
    let bad = 0

    let berbuah = Math.floor(1 + Math.random() * (1 + Math.random()*2)) * Math.floor(1 + Math.random() * 8)

    for (var i = 0; i < berbuah; i++) {

      let random = Math.floor(Math.random() * 2)

      if (random == 0) {
        good++
      } else {
        bad++
      }

    }

    this._harvest = `${good + bad} (${good} good ${bad} bad)`

    return this

  }

}
