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


//