const person = {
    name: 'Random Person',
    age: 20
}

// Exporting the whole class
class Student
{

    consturctor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Hey there.. I am ${this.name} and I am ${this.age}`)
    }
}


// // To use the person object
// module.exports = person;

// Export the whole class
module.exports = Student;