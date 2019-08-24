//house

this.table = 'kitchen table';
console.log(this.table);


this.garage = {
    table: 'garage table',
};
console.log(this.garage.table);

//'this' inside an object
let johnsRoom = {
    table: 'johns table',
};
console.log(johnsRoom.table);

//'this' inside a method
let johnRoom = {
    table: 'johns table',
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
};  
johnRoom.cleanTable();


//'this' inside a function
const cleanTable = function(soap){
    console.log(`Cleaning ${this.table} using ${soap}`);
};
cleanTable.call(this, 'some soap');//use 'call' when 'use strict'
cleanTable.bind(this)('some soap');//same as above
