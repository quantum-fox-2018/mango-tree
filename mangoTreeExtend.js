class FruitTree {
  constructor(age, height, dying, maxJumlahBuah, arrBuah, status, jumlahPetik, mature, good, bad) {
    this.ages = age;
    this.heights = height;
    this.dying = dying;
    this.mature = mature
    this.fruitMax = maxJumlahBuah;
    this.kumpulanBuah = arrBuah
    this.status = status
    this.jumlahBuah = jumlahPetik
    this.goods = good;
    this.bads = bad;
  }

  get age() {
    return this.ages;
  }

  get height() {
    return this.heights;
  }

  get fruits() {
    return this.kumpulanBuah;
  }

  get healtyStatus() {
    return this.status;
  }

  get harvested() {
    return this.jumlahBuah;
  }

  get goodQuality() {
    return this.goods
  }

  get badQuality() {
    return this.bads
  }
  //get current states here

  //grow tree here

  grow() {
    if (this.ages < this.dying && this.status != false) {
      this.ages++
      this.heights += Math.floor(Math.random() * 7)
    } else {
      this.status = false;
    }
  }

  produceFruits() {
    if (this.ages >= this.mature) {
      this.jumlahBuah = Math.floor(Math.random() * this.fruitMax);
    }
  }

  harvest() {
    // this.goodQuality = 0;
    // this.badQuality = 0;
    for (var i = 0; i < this.jumlahBuah; i++) {
      let random = Math.round(Math.random())
      if (random == 0) {
        this.goods += 1
      } else {
        this.bads += 1
      }
    }
  }
}

class Fruits {
  constructor(quality) {
    this.quality = quality
  }
}

class mangoTree extends FruitTree {
  constructor(age, height, dying, maxJumlahBuah, arrBuah, status, jumlahPetik, mature, good, bad) {
    super(age, height, dying, maxJumlahBuah, arrBuah, status, jumlahPetik, mature, good, bad);
  }
}

var buah = new Fruits()
var fruit = new FruitTree(0, 0, 14, 5, 0, true, 0, 0, 0, 0);
var mangotree = new mangoTree(0, 0, 14, 5, 0, true, 0, 0, 0, 0)

// console.log(mangotree)

do {
  mangotree.grow();
  mangotree.produceFruits();
  mangotree.harvest();
  console.log(`[Year ${mangotree.age} Report] Height = ${mangotree.height} m | Fruits harvested = ${mangotree.harvested} (${mangotree.goodQuality} good, ${mangotree.badQuality} bad)`)
} while ((mangotree.healtyStatus != false)) {
  console.log('The tree has met its end. :sad:')
}
