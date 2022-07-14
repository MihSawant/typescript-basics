type Box = {
    value: any
};

/*This will compile peacefully and during the
time of execution, We will get an error as 
the split is not function we can call on number
type.

*/
const o1: Box = { value: 12 };

o1.value.split(' ');
