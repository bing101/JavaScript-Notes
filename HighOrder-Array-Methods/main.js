// High order array methods

const workers = [
  {
    id: 1,
    name: "James Pascal",
    age: 32,
    working: true,
    address: "24th Avenu"
  },
  {
    id: 2,
    name: "Natalie Humerberg",
    age: 29,
    working: true,
    address: "Nervada"
  },
  {
    id: 3,
    name: "Fin Abraham",
    age: 30,
    working: false,
    address: "Lane drive, sf"
  },
  {
    id: 4,
    name: "Robert Pedro",
    age: 24,
    working: true,
    address: "Long island"
  },
  {
    id: 5,
    name: "Norman Redus",
    age: 40,
    working: false,
    address: "Bonham drive"
  }
];

// forEach
// filter
// map
// reduce
// sort

// forEach

workers.forEach(function(worker) {
  console.log(worker.name);
});

// Suppoose we want to get an array of workers whose age is aboce 30

// conventional method
let above30 = [];

for (let i = 0; i < workers.length; i++) {
  if (workers[i].age >= 30) above30.push(workers[i]);
}

// Efficient method
// Filter
let Arr = workers.filter(function(w) {
  if (w.age >= 30) return true;
});

// Here => can be used to make it look good

let newArr = workers.filter(w => w.age >= 30);

console.log(newArr);

// Map

let add = workers.map(w => w.address);
console.log(add);

let ages = workers.map(w => `${w.name} - ${w.age}`);
console.log(ages);

// Sort
const sortedAge = workers.sort(function(a, b) {
  if (a.age > b.age) return 1;
  else return -1;
});

// Another approach

const sortedAges = workers.sort( (a, b) => a.age > b.age ? 1 : -1 )
console.log(sortedAges)


// Reduce
const sumAge = sortedAges.reduce( (total, w) => total + w.age, 0 )
console.log(sumAge)


// Combined
const combined = workers.map( w => w.age*2 ).filter( w => w.age >= 60 ).sort( (a, b) => a.age > b.age ? 1 : -1)
console.log(combined)
