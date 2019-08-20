"use strict";

//declaration
var name;

//assign value
name = "vamsi";

//console log
// console.log(name);


//LEXICAL SCOPING
//variable defined outside the function is available in all subsequent functions
var i = 1;
(function(){
    console.log(i);
    (function(){
        console.log(i);
        (function(){
            console.log(i);
        })();
    })();
})();

//BLOCK SCOPE
//