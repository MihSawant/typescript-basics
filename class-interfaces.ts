class Employee {
    private id: number;
    private counter: number = 0;

    constructor(private name: string, private designation: string) {
        this.id = this.counter + 1;
        this.name = name;
        this.designation = designation;

    }

    changeDesignation(newDesignation: string) {
        this.designation = newDesignation
    }


}

const e1: Employee = new Employee('Foo Bar', 'Manager');
console.log(e1);

interface Car {
    speed: number;
    distCovered: number;

    changeGear: () => void;
}

let bmw: Car = {
    speed: 75,
    distCovered: 2,

    changeGear() {
        console.log('Bmw, Changing the Gear');
    },
};

bmw.changeGear();

class Mercedes implements Car {

    speed: number;
    distCovered: number;

    constructor(speed: number, distCovered: number) {
        this.speed = speed;
        this.distCovered = distCovered;
    }

    changeGear() {
        const newSpeed = this.speed + 20;
        console.log('Changing Gear, Speed incresing from ' + this.speed + ' to: ' + newSpeed);
    };
}

let mercedesCar = new Mercedes(40, 2);
// console.log(mercedesCar.changeGear());