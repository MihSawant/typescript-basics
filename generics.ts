type Something<T> = {
    value: T
};

/*This will compile peacefully and during the
time of execution, We will get an error as 
the split is not function we can call on number
type.

*/
const o1: Something<Number> = { value: 12 };


// Now we get an error at compile time only.
// o1.value.split(' ');

const o2: Something<String> = { value: 'Hello,World' };

console.log(o2.value.split(','));