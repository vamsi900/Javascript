//extract keys from object
var obj1 = {
    name: 'vamsi',
    lname: 'reddy',
    id: 1234,
    k1: "ascsds",
    k2: "aygjhas"
}
console.log(Object.keys(obj1));
console.log(Object.getOwnPropertyNames(obj1));
console.log(Object.values(obj1));

var test1 = Object.keys(obj1);

for (i = 0; i < test1.length; i++)
console.log(test1[i]);

//change the values in an object
Object.defineProperty(obj1, 'k1', {value:"abcd"});
console.log(obj1);


Object.defineProperty(obj1, "year", {value:"2008"});

var obj2 = {
    name: ['vamsi'],
    lname: ['reddy'],
    id: [1234],
    k1: ["ascsds"],
    k2: ["aygjhas"]
}
// console.log(Object.values(obj2));
 var A = Object.values(obj2);
 var x = A.map((e) => {
     console.log("------------------------------------");
    console.log(e);
    return e[0];
 })
 console.log(x);

 //arrange values in ascending order
 var some = [
     {"key1": 9},
     {"key2": 4},
     {"key3": 0},
     {"key4": 8},
     {"key5": 1},
     {"key6": 3},
     {"key7": 6},
     {"key8": 2},
     {"key9": 5},
 ]

 var x = some.map((e) => {
     return e;
 })
//  console.log(x);




