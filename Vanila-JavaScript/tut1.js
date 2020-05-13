//  JavaScript Notes:

// Primitive Data types:
const name = 'Arjun';
let age = 21;
const st = 'This is a string';

// Strings
// Template string for formating
console.log(`Hey My name is ${name} and I am ${age}`);

console.log(st.length);
console.log(st.substring(0, 7).toUpperCase())

let tags = 'Technology, Robots, AI, Machines';
let tagArray = tags.split(',')

console.log(tagArray)

// Arrays
// Method One
let numbers = new Array(1, 2, 3, 4);

// Method Two
const randomThings = ['Orange', 'Lamp', 12, true];
console.log(randomThings);

randomThings.push('Iron');
randomThings.unshift(2444);

console.log(randomThings);

// Object Literals
const person = {
    firstName: 'Smooth',
    lastName: 'Blackwell',
    yr: 21,
    hobbies: ['Books', 'Music', 'Sleeping'],
    address: {
        city: 'Sunder Nagar',
        State: 'HP',
        Pin: '175002',
    }
}

console.log(`Object literal : ${person}`);
console.log(`First Name: ${person.firstName}`);
// Destructuring
const {lastName, yr, address: {city}} = person;
console.log(`Last Name: ${lastName}, Address: ${city} and age: ${yr}`);

// Adding
person.email = 'smoothBlackwell@gmail.com';
console.log(person);

// Array of objects
let books = [
    {
        id: 1,
        title: 'Inferno',
        author: 'Dante',
        cat: 'Classic'
    },
    {
        id: 2,
        title: 'The conte of monte cristo',
        author: 'Adam Douglas',
        cat: 'Classical fiction'
    },
    {
        id: 3,
        title: 'The wise man\'s fear',
        author: 'Patrick Rothfuss',
        cat: 'Fantasy fiction'
    },
    {
        id: 4,
        title: 'White tiger',
        author: 'Shirney Roy',
        cat: 'Fiction'
    },
     
];


// converting objects to JSON format

let booksJSON = JSON.stringify(books);

// For while loop are the same


// Looping through the array
for(let book of books){
    console.log(`Book name: ${book.title} by ${book.author}`);
}

// For Each, map and filter
books.forEach(
    function(book){
        console.log(book.id + " " + book.title)        
    }
);

// Map returns an array
let authors = books.map(function(book){return book.author});

// Filter method
let evenBooks = books.filter(function(book){
    return book.id % 2 === 0;
});

let evenBookNames = books.filter(function(book){
    return book.id % 2 === 0;
}).map(function(book){
    return book.title;
})

/*
    Conditional statements are the some..
    === matches data type 
    == does not match the data type and will return true for
    if( 2 == '2' )  
*/


// Functions

function addNum(a, b){
    return a + b;
}

console.log(addNum(4, 5));