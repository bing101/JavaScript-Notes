// DOM

// Examine the DOM
console.log(document.all)
console.log(document.title)
console.log(document.body.childNodes)
console.log(document.head.childNodes)


// Get element by id
let header = document.getElementById('header-title')

console.log(header.textContent)

header.textContent = 'Heading'

header.innerHTML = '<h6>Modified Heading</h6>'

let subTitle = document.querySelector('.title')

console.log(subTitle.textContent);

subTitle.innerHTML = '<h6>Select and Add</h6>'

subTitle.style.border = 'solid 1px blue'

let itemList = document.getElementsByClassName('list-group-item')
console.log(itemList)
console.log(itemList[1].textContent)
itemList[1].textContent = 'Item modified'