var Employee = /** @class */ (function () {
    function Employee(name, designation) {
        this.name = name;
        this.designation = designation;
        this.counter = 0;
        this.id = this.counter + 1;
        this.name = name;
        this.designation = designation;
    }
    Employee.prototype.changeDesignation = function (newDesignation) {
        this.designation = newDesignation;
    };
    return Employee;
}());
var e1 = new Employee('Foo Bar', 'Manager');
console.log(e1);
var bmw = {
    speed: 75,
    distCovered: 2,
    changeGear: function () {
        console.log('Bmw, Changing the Gear');
    }
};
bmw.changeGear();
var Mercedes = /** @class */ (function () {
    function Mercedes(speed, distCovered) {
        this.speed = speed;
        this.distCovered = distCovered;
    }
    Mercedes.prototype.changeGear = function () {
        var newSpeed = this.speed + 20;
        console.log('Changing Gear, Speed incresing from ' + this.speed + ' to: ' + newSpeed);
    };
    ;
    return Mercedes;
}());
var mercedesCar = new Mercedes(40, 2);
// console.log(mercedesCar.changeGear());
