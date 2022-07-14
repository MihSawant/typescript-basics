"use strict";
class Employee {
    constructor(name, designation) {
        this.name = name;
        this.designation = designation;
        this.counter = 0;
        this.id = this.counter + 1;
        this.name = name;
        this.designation = designation;
    }
    changeDesignation(newDesignation) {
        this.designation = newDesignation;
    }
}
const e1 = new Employee('Foo Bar', 'Manager');
console.log(e1);
let bmw = {
    speed: 75,
    distCovered: 2,
    changeGear() {
        console.log('Bmw, Changing the Gear');
    },
};
bmw.changeGear();
class Mercedes {
    constructor(speed, distCovered) {
        this.speed = speed;
        this.distCovered = distCovered;
    }
    changeGear() {
        const newSpeed = this.speed + 20;
        console.log('Changing Gear, Speed incresing from ' + this.speed + ' to: ' + newSpeed);
    }
    ;
}
let mercedesCar = new Mercedes(40, 2);
// console.log(mercedesCar.changeGear());
