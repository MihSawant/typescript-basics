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
