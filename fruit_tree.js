class FruitTree {

  // Initialize a new MangoTree
  constructor(maxAge, treeName) {
    this._age = 0;
    this._height = 0;
    this._fruits = 0;
    this.healthStatus = true;
    this._harvested = [];
    this.maxAge = maxAge;
    this.treeName = treeName;
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
    return this.healthStatus;
  }

  get harvested() {
    return `${this._fruits} (${this._harvested})`;
  }

  // Grow the tree
  grow() {
    this._age = this._age+1;

    //menmabahkan tinggi
    if(this._age < (this.maxAge-2)){
      let randomHeight = Math.random();
      randomHeight = parseFloat(randomHeight).toFixed(1); // toFixed membatasi angka di belakang koma
      let currHeight = String(this._height);
      //parsefloat membuat string / angka yng ada koma menjadi number
      let heightResult = parseFloat(currHeight) + parseFloat(randomHeight);
      this._height = parseFloat(heightResult).toFixed(1);

    }

    //umur maksimal pohon
    if(this._age >= this.maxAge){
        this.healthStatus = false;
    }
  }

  produceFruits(){
    if (this._age > (this.maxAge-2)) {
        this._fruits = 0; //umur pohon saat tidak berbuah
    }else if(this._age >=4 ){
        //menentukan jumlah buah yang di hasilkan pohon
        let fuitsTotal = Math.round(Math.random() * (7-4)+7);
        this._fruits = fuitsTotal;
    }
  }
  // Get some fruits
  harvest() {
    let fruits = new Fruit(this._fruits);
    this._harvested = fruits.quality;
  }

}

class Fruit {
  // Produce a mango
  constructor(fruits) {
    this.quality = [];
    let good = 0;
    let bad = 0;
    for(let i = 0; i < fruits; i++){
        let randomQuality = Math.round(Math.random());
        if(randomQuality == 0){
            good += 1;
        }else{
            bad += 1;
        }
    }
    this.quality.push(good+' good');
    this.quality.push(bad+' bad');
  }
}

//MangoTree
class MangoTree extends FruitTree {
  constructor(maxAges, treeName){
    super(maxAges, treeName);
  }
}

//AppleTree
class AppleTree extends FruitTree {
  constructor(maxAges, treeName){
    super(maxAges, treeName);
  }
}

//PearTree
class PearTree extends FruitTree {
  constructor(maxAges, treeName){
    super(maxAges, treeName);
  }
}

//Test Case Manggo
let mangoTree = new MangoTree(20, 'Manggo');
console.log(`${mangoTree.treeName} tree is alive! :smile:`);
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`);
} while(mangoTree.healthStatus != false);

console.log(`${mangoTree.treeName} tree has met its end. :sad:`);



//Test Case Apple
let appleTree = new AppleTree(14, 'Apple');
console.log(`\n${appleTree.treeName} tree is alive! :smile:`);
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`);
} while(appleTree.healthStatus != false);

console.log(`${appleTree.treeName} tree has met its end. :sad:`);


//Test Case Pear
let pearTree = new PearTree(10, 'Pear');
console.log(`\n${pearTree.treeName} tree is alive! :smile:`);
do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} m | Fruits harvested = ${pearTree.harvested}`);
} while(pearTree.healthStatus != false);

console.log(`${pearTree.treeName} tree has met its end. :sad:`);











//
