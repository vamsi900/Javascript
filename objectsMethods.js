// //extract keys from object
// var obj1 = {
//     name: 'vamsi',
//     lname: 'reddy',
//     id: {
//         previous: 1234,
//         present: 0987,
//     },
//     k1: "ascsds",
//     k2: "aygjhas"
// }
// console.log(obj1.id.previous);
// console.log(Object.keys(obj1));
// console.log(Object.getOwnPropertyNames(obj1));//same as keys
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));
// var entries = Object.entries(obj1);
// console.log(entries[0][1]);

var obj2 = { a: 10, b:20, c:10 };
var obj3 = { b:15, c:20 };
var obj4 = { c:30 }
        var new_obj = Object.assign(obj2, obj3, obj4);
        console.log(new_obj);

// var test1 = Object.keys(obj1);

// for (i = 0; i < test1.length; i++)
// console.log(test1[i]);

// //change the values in an object
// Object.defineProperty(obj1, 'k1', {value:"abcd"});
// console.log(obj1);


// Object.defineProperty(obj1, "year", {value:"2008"});

// var obj2 = {
//     name: ['vamsi'],
//     lname: ['reddy'],
//     id: [1234],
//     k1: ["ascsds"],
//     k2: ["aygjhas"]
// }
// console.log(Object.values(obj2));
//  var A = Object.values(obj2);
//  var x = A.map((e) => {
//     //  console.log("------------------------------------");
//     // console.log(e);
//     return e[0];
//  })
//  console.log(x);

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
 ];

//  for(i=0; i<some.length; i++){
//      var x = Object.values(some[i]);
//     //  console.log(x);
//      var z = x.map((e) => {
//         //  console.log(e);
//          return e;
//      })
//      var a = [];
//      a.push(z);
//      console.log(a);
// }

