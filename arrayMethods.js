var test = [1,2,3,4,5,6,7,8,9,10];
console.log(test[2]);
console.log(test.length);
console.log(test[test.length - 2]);

//concat()
var x = ['welcome', 'to'];
var y = ['hello', 'world'];
var a = ['it', 'works']
var z = x.concat(y,a);
console.log(z);

//copyWithin()
var cars = ['city', 'swift', 'i20', 'seltos', 'ciaz','x','y','z'];
function func1(){
    return cars.copyWithin(5,3);
}
console.log(func1());

//entries()
// function func2(){
//     return cars.entries();
// }
// for(x of func2){
    
// }
// console.log(func2());

//every()
//checks the given condition for all the elememnts of the array
var ages = [18, 21, 12, 60, 25];

function checkAdult(age){
    return age>=18;
}
function func3(){
    return ages.every(checkAdult);
}
console.log(func3());


var survey = [
    {
        name: 'vamsi',
        answer: 'no'
    },
    {
        name: 'mahesh',
        answer: 'yes'
    },
    {
        name: 'bharath',
        answer: 'no'
    },
    {
        name: 'vishal',
        answer: 'no'
    }
];

function isSameAnswer(el,index,arr){
    if (index === 0){
        return true;
    }
    else{
        return (el.answer === arr[index - 1].answer)
    }
}

function func4(){
    return survey.every(isSameAnswer);
}
console.log(func4());


//fill()
var fruits = ['apple', 'mango', 'banana', 'pineapple'];
var fillFruits = fruits.fill('kiwi', 1,3);
console.log(fillFruits);


//filter()
//filters all the data that passes the condition
function func5(){
    return ages.filter(checkAdult);
}
console.log(func5());


var filteredSurvey = survey.filter((survey) => {
    return survey.answer == 'no'
});
console.log(filteredSurvey);


//map()
var surveyNames = survey.map((survey) => {
    return survey.name;
});
console.log(surveyNames);

var persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  function getFullName(item) {
    return fullname = [item.firstname,item.lastname].join(" ");
  }
  
  function myFunction() {
    return join = persons.map(getFullName);
  }
console.log(myFunction());


//find()
//Get the value of the first element in the array that passes the condition
function func6(){
    return ages.find(checkAdult);
}
console.log(func6());

var findName = survey.find((survey) => {
    return survey.name == 'vamsi'; 
})
console.log(findName);


//findIndex()
//Get the index value of the first element in the array that passes the condition
function func7(){
    return ages.findIndex(checkAdult);
}
console.log(func7());


//forEach()
survey.forEach((survey) => {
    console.log(survey.answer);
})


//includes()
//returns true/false 
var numbers = [1,2,3,4,5]
var includesNumber = numbers.includes(7);
console.log(includesNumber);


//join()
//concats two elements with the keyword
var joinNumbers1 = numbers.join();
var joinNumbers2 = numbers.join(' and ');
console.log(joinNumbers1);
console.log(joinNumbers2);


//isArray()
//check if it is array or not
var checkArray = Array.isArray(numbers);
console.log(checkArray);


//indexOf()
//returns the index of the array element
var findIndex = numbers.indexOf(3);
console.log(findIndex);

//flat
// const matrix = [[1,1], [1,[[[[[[1]]]]]]]];
// const flatMatrix = matrix.flat(1);
// console.log(flatMatrix);

//foreach()
var children = [
    {firstname : "Malcom", lastname: "Reynolds", year:1800},
    {firstname : "Kaylee", lastname: "Frye", year:1995},
    {firstname : "Jayne", lastname: "Cobb", year:1885},
    {firstname: "vamsi", lastname:"reddy", year:1900},
    {firstname: "abcd", lastname: "xyz", year:1998}
  ];

children.forEach(function(child){
    console.log(child.firstname);
});

var ages = [12,34,23,16,56,42,35,11,78,1,54];
//filter()
var sortedAges = [];
for(i=0; i<ages.length; i++){
    if(ages[i]>=18){
        sortedAges.push(ages[i]);
    }
};
console.log(sortedAges);

// var sortAges = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// })

var sortAges = ages.filter(age => age>=18);
console.log(sortAges);

var nineteenChildren = children.filter((child) => {
    if(child.year >= 1900 && child.year<=1998){
        return true;
    }
})
console.log(nineteenChildren);

nineteenChildren.forEach(function(nineteen){
    console.log(nineteen.year);
})

var people=[
    {name:'a', age:43, place:"hyderabad"},
    {name:'b', age:20, place:"guntur"},
    {name:'c', age:35, place:"khammam"},
    {name:'d', age:18, place:"vizag"},
    {name:'e', age:21, place:"kukatpally"},
];

var filterAge = people.filter(person => person.age>=30);
// console.log(filterAge);

var filterPlace = filterAge.filter(person => person.place == "hyderabad");
// console.log(filterPlace);

//returns a string
filterPlace.forEach(function(people){
    console.log(people.name);
})

//returns a string in an array
var filterName = filterPlace.map((people) => {
    return people.name;
})
console.log(filterName);


var squares = [1,4,9,16,25,36,49,64,81,100,121];

var sqrRoots = squares.map((square) => Math.sqrt(square));
console.log(sqrRoots);


//reduceRight()
const test9 = ['i', 's', 'm', 'a', 'v'];
let vamsi = test9.reduceRight((a, b) => a+b);
console.log(vamsi);


const str = "vamsi";
console.log([...str]);