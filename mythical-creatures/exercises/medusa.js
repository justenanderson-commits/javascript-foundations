var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
    if (this.statues.length < 3) {
      var newStatue = new Statue(victim.name);
    this.statues.push(newStatue);
    } else {
      var aPersonAgain = new Person(this.statues.splice(0, 1));
      var noLongerStone = aPersonAgain.name[0];
      console.log('aPersonAgain: ', aPersonAgain)
      console.log('noLongerStone', noLongerStone)
     // var newPerson = new Person(noLongerStone);
      var newPerson = new Person(noLongerStone);
      var newStatue = new Statue(victim.name);
      this.statues.push(newStatue);
      console.log('newStatue: ', newStatue)

      // The goal of this test is to remove an object from the statues array and to instantiate a new person object.

      
    }
  }
}

module.exports = Medusa;
