class Hobbit {
  constructor(newHobbitName, age) {
  this.name = newHobbitName.name;
  this.age = 0;
  this.adult = false;
  this.old = false;
  this.hasRing = false;
  }
  celebrateBirthday(){
    this.age++;
    if(this.age > 100) {
      this.adult = true;
      this.old = true;
  } else if (this.age > 32) {
      this.adult = true;
  }
  } 
  getRing() {
    if (this.name != 'Frodo') {
      return 'You can\'t have it!';
  } else if (this.name = 'Frodo') {
    this.hasRing = true;
    return 'Here is the ring!'
    }
  }
};

module.exports = Hobbit;