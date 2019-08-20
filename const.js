const pi = 1.14;

function areaCircle(r){
    const pi = 2;
    // Inside a function, we can assign new value to const pi.
    // Whereas assigning new value to pi returns error.
    console.log("The area of circle is "+ pi * r * r);
}
console.log(pi);

areaCircle(5);