//constructor

function Book(title, author, year){
    this.title = title;
    this.author= author;
    this.year = year;
    // this.getSummary = function(){
    //     return `${this.title} is written by ${this.author} in the year ${this.year}`;
    // }
};

Book.prototype.getSummary = function(){
    return `${this.title} is written by ${this.author} in the year ${this.year}`;
};
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
};

//instantiate an object
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2015');
console.log(book1.getAge());
book2.revise(2019);
console.log(book2);