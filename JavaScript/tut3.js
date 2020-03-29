// DOM
// Select items from the DOM

// Single select
const form = document.getElementById('my-form');
const qForm = document.querySelector('.formcontainer');

console.log(qForm);

// Multiple selector

// querySelectorAll gets us a list of multiple dom nodes 
// This list behaves as an array and all the operations of arr can be perfomed on it
const listItems = document.querySelectorAll('.item');
console.log(listItems);

listItems.forEach( function(item) { console.log(item.textContent) } )


// Manipulating dom
const ul = document.querySelector('.myUL');

ul.firstChild.textContent = 'Modified'