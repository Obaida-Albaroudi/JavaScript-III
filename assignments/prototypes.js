/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
function GameObject(details){
  this.createdAt = details.createdAt;
  this.name = details.name;
  this.dimensions = details.dimensions;
};

GameObject.prototype.destroy = function(){
  return this.name + " was removed from the game."
};


//  === CharacterStats ===

function CharacterStats(playerstats){
  GameObject.call(this, playerstats);
  this.healthPoints = playerstats.healthPoints;
};
CharacterStats.prototype= Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return this.name + " took damage."
};


//  === Humanoid (Having an appearance or character resembling that of a human.) ===

function Humanoid(info){
  GameObject.call(this, info);
  CharacterStats.call(this, info);
  this.team = info.team;
  this.weapons = info.weapons;
  this.language = info.language;
};

Humanoid.prototype= Object.create(GameObject.prototype);
Humanoid.prototype= Object.create(CharacterStats.prototype);

Humanoid.prototype.greet= function(){
  return this.name + " offers a greeting in " + this.language
};


// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});


const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  // Stretch task: 


function Villain(bad){
  GameObject.call(this, bad);
  CharacterStats.call(this, bad);
  Humanoid.call(this, bad)
};

Villain.prototype= Object.create(GameObject.prototype);
Villain.prototype= Object.create(CharacterStats.prototype);
Villain.prototype= Object.create(Humanoid.prototype);




function Hero(good){
  GameObject.call(this, good);
  CharacterStats.call(this, good);
  Humanoid.call(this, good);
};

Hero.prototype= Object.create(GameObject.prototype);
Hero.prototype= Object.create(CharacterStats.prototype);
Hero.prototype= Object.create(Humanoid.prototype);


  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!