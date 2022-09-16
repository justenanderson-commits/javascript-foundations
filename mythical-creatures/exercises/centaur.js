class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.crankinessLevel = 0;
    this.layingDown = false;
  }

  makeCranky() {
    this.crankinessLevel++;
    if (this.crankinessLevel >= 3) {
      this.cranky = true;
    }
  }

  shootBow() {
    if (this.crankinessLevel < 3 && this.layingDown === false) {
      this.makeCranky();
      return 'Twang!!!';
    } else {
      return 'NO!';
    }
  } 

  run() {
    if (this.crankinessLevel < 3 && this.layingDown === false) {
      this.makeCranky();
      return 'Clop clop clop clop!!!';
  } else {
      return 'NO!';
    }
  }
  
  sleep() {
    this.cranky = false;
    this.crankinessLevel = 0;
    return(this.standing ? 'NO!' : 'ZZZZ');
    }
  
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.standing === true) {
      this.cranky = false;
      this.crankinessLevel = 0;
    } else { 
      
      return 'Not while I\'m laying down!';
    }
  }
}

module.exports = Centaur;