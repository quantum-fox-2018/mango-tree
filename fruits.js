class Fruits {
  constructor() {
    this._quality = this.randomQuality()
  }

  randomQuality() {
    let random = Math.floor(Math.random() * 2)
    if (random == 1) {
      this._quality = 'good'
    } else {
      this._quality = 'bad'
    }
    return this._quality
  }
}

class Mango extends Fruits {
  constructor() {
    super()
  }
}
class Apple extends Fruits {
  constructor() {
    super()
  }
}
class Pear extends Fruits {
  constructor() {
    super()
  }
}

module.exports = {
  Fruits: Fruits,
  Mango: Mango,
  Apple: Apple,
  Pear: Pear,
}