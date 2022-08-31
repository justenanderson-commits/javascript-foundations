class Dragon {
    constructor(name, rider) {
    this.name = name;
    this.rider = rider
    this.hungry = true;
    this.needsToEat = 0;
    }
    greet() {
        return `Hi, ${this.rider}!`
    }
    eat() {
        this.needsToEat++;
        console.log('Hungry before: ', this.hungry)
        this.needsToEat < 3 ? this.hungry = true : this.hungry =  false
        console.log('Hungry after: ', this.hungry)
        console.log('Needs to eat value: ', this.needsToEat)
        }
        
    }


module.exports =  Dragon;