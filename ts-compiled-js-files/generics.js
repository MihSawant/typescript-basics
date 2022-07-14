"use strict";
/*This will compile peacefully and during the
time of execution, We will get an error as
the split is not function we can call on number
type.

*/
const o1 = { value: 12 };
// Now we get an error at compile time only.
// o1.value.split(' ');
const o2 = { value: 'Hello,World' };
console.log(o2.value.split(','));
