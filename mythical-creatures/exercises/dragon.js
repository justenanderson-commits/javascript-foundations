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
        this.needsToEat < 3 ? this.hungry = true : this.hungry =  false
        }

    }


module.exports =  Dragon;
