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