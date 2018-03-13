"use strict"

// release 0

class MangoTree {
  // Initialize a new MangoTree
  constructor(umur, height, max, jumlah, picked, status, mature, die, good, bad) {
    this.umur = umur;
    this.tinggi = height;
    this.maxBuah = max;
    this.jumlahAda = [];
    this.jumlahSudahDipetik = picked;
    this.sehat = status;
    this.mature = mature;
    this.dying = die
    this.good = good
    this.bad = bad
  }

  get age() {
    return this.umur
  }

  get height() {
    return this.tinggi
  }

  get fruits() {
    return this.jumlahAda;
  }

  get healtyStatus() {
    return this.sehat
  }

  get harvested() {
    return this.jumlahSudahDipetik;
  }

  get goods() {
    return this.good;
  }

  get bads() {
    return this.bad;
  }


  // Get current states here

  // Grow the tree
  grow() {
    // var umurDewasa = 5;
    // var mati = 10;

    if (this.umur < this.mature) {
      this.umur += 1;
      this.tinggi += Math.floor(Math.random() * 5);
    } else if (this.umur >= this.mature && this.umur <= this.dying) {
      this.umur += 1;
      this.tinggi += Math.floor(Math.random() * 5);
    } else if (this.umur >= this.dying) {
      this.sehat = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    if (this.umur < this.mature) {
      this.jumlahSudahDipetik += 0;
    } else if (this.umur >= this.mature && this.umur < this.dying) {
      var quality = ['good', 'bad'];
      this.jumlahSudahDipetik = Math.floor(Math.random() * this.maxBuah);
    } else {
      this.jumlahSudahDipetik = 0
    }
  }

  // Get some fruits
  harvest() {
    // var good = 0;
    // var bad = 0;
    this.good = 0;
    this.bad = 0;
    for (var i = 0; i < this.jumlahSudahDipetik; i++) {
      let random = Math.round(Math.random())
      if (random == 0) {
        this.bad += 1
      } else {
        this.good += 1
      }
    }
    // console.log(`${this.good} good, ${this.bad} bad`)
  }

}
//
// class Mango extends mangoTree {
//   // Produce a mango
//   constructor(quality) {
//     super();
//   }
// }

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
var mangotree = new MangoTree(0, 12, 14, 0, 0, true, 5, 11, 0, 0);
// console.log(mangotree.grow)
console.log('The tree is alive! :smile:')
do {
  mangotree.grow();
  mangotree.produceMangoes();
  mangotree.harvest();
  console.log(`[Year ${mangotree.age} Report] Height = ${mangotree.height} m | Fruits harvested = ${mangotree.harvested} (${mangotree.goods} good, ${mangotree.bads} bad)`)
} while ((mangotree.healtyStatus != false)) {
  console.log('The tree has met its end. :sad:')
}


// Release 1
class AppleTree {
  constructor(umur, height, max, jumlah, picked, status, mature, die, good, bad) {
    this.umur = umur;
    this.tinggi = height;
    this.maxBuah = max;
    this.jumlahAda = [];
    this.jumlahSudahDipetik = picked;
    this.sehat = status;
    this.mature = mature;
    this.dying = die
    this.good = good
    this.bad = bad
  }

  get age() {
    return this.umur
  }

  get height() {
    return this.tinggi
  }

  get fruits() {
    return this.jumlahAda;
  }

  get healtyStatus() {
    return this.sehat
  }

  get harvested() {
    return this.jumlahSudahDipetik;
  }

  get goods() {
    return this.good;
  }

  get bads() {
    return this.bad;
  }


  // Get current states here

  // Grow the tree
  grow() {
    // var umurDewasa = 5;
    // var mati = 10;

    if (this.umur < this.mature) {
      this.umur += 1;
      this.tinggi += Math.floor(Math.random() * 5);
    } else if (this.umur >= this.mature && this.umur <= this.dying) {
      this.umur += 1;
      this.tinggi += Math.floor(Math.random() * 5);
    } else if (this.umur >= this.dying) {
      this.sehat = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    if (this.umur < this.mature) {
      this.jumlahSudahDipetik += 0;
    } else if (this.umur >= this.mature && this.umur < this.dying) {
      var quality = ['good', 'bad'];
      this.jumlahSudahDipetik = Math.floor(Math.random() * this.maxBuah);
    } else {
      this.jumlahSudahDipetik = 0
    }
  }

  // Get some fruits
  harvest() {
    // var good = 0;
    // var bad = 0;
    this.good = 0;
    this.bad = 0;
    for (var i = 0; i < this.jumlahSudahDipetik; i++) {
      let random = Math.round(Math.random())
      if (random == 0) {
        this.bad += 1
      } else {
        this.good += 1
      }
    }
    // console.log(`${this.good} good, ${this.bad} bad`)
  }

}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
