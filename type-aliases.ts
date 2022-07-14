type Student = {
    name: string,
    dept: string,
    rollNo: number
}

// We can assign our own types
let s1: Student = {
    name: 'Foo',
    dept: 'Comp-Sci',
    rollNo: 16
};

let s2: Student = {
    name: 'Bar',
    dept: 'IT',
    rollNo: 21
};

let students: Student[] = [s1, s2];
