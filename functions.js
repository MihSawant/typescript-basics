var PI_VALUE = Math.PI;
// We can also assign explicit return type, but TS infers it automatically.
function areaOfCircle(radius) {
    var area = PI_VALUE * (radius * radius);
    return area.toFixed(2);
}
console.log('Area of Circle: ' + areaOfCircle(4.5));
// Function returns nothing, so return type void.
function println(value) {
    console.log(value + '\n');
}
println('Hello');
println('World !');
