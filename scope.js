var global = "global";



// (function a(){
//     var aa = "aa";
//     console.log(aa);
// })();

// is same as
var aa;
function a(){
     aa = "aa";
    
}
a();
console.log(aa);
