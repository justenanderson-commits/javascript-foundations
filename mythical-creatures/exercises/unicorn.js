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



// 1 : Read the test
// 2 : ask yourself if it's going to fail
// 3: Run test
// 4: make it pass

// assert is our assertion library
// equal is a method within it
// 1st param to compare against
// 2nd param is what's expected to create a true result
