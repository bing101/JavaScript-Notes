// Using arrow function

let subNumb = (a, b) => {return a - b};

// parenthesis are optional when we have one argument
let square = a => a*a;

const hloMsg = () => "Hello There !!";

console.log(subNumb(40, 36));
console.log(square(4));
console.log(hloMsg());

// Object Oriented
// using constructor

function Student(firstName, lastName, age, roll){
    this.firstName = firstName;
    this.lastName = lastName
    this.age = age;
    this.roll = roll;
};

// Prototyping a method
Student.prototype.getFullName = function() { return `${this.firstName} ${this.lastName}` }

const s1 = new Student('Arjun', 'Kashyap',21, 11172544);
const s2 = new Student('Devika', 19, 11179102);

console.log(s1);
console.log(s1.getFullName())


// OOPS using ES6

class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
        console.log(this.dob);
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getDOB(){
         return this.dob.getDate();
    }
}


const p1 = new Person('Ramesh', 'Kumar', '4-3-1992');

console.log(p1)
console.log(p1.getFullName());
console.log(p1.getDOB());














