class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || 'white';
    }
    isWhite() {
      return this.color === 'white';
    }
    says(unicornSays) {
      return '**;* ' + unicornSays + ' *;**'
    }
  }
  console.log('Unicorn name and color: ', )


module.exports = Unicorn;




