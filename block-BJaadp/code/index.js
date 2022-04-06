let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
console.log(persons.reduce((acc, person) => {
  return acc += person.grade
}, 0) / persons.length)
// Find the average grade of male
let males = persons.filter((person) => person.sex == `M`)
console.log(males.reduce((acc, person) => {
  return acc += person.grade
}, 0) / males.length)
// Find the average grade of female
let females = persons.filter((person) => person.sex == `F`)
console.log(females.reduce((acc, person) => {
  return acc += person.grade
}, 0) / females.length)
// Find the highest grade
let high = persons[0].grade
persons.forEach((person) => {
  if (person.grade > high) {
    high = person.grade
  }
})
console.log(high)
// Find the highest grade in male
let highMale = males[0].grade
males.forEach((person) => {
  if (person.grade > highMale) highMale = person.grade
})
console.log(highMale)
// Find the highest grade in female
let highfeMale = females[0].grade
females.forEach((person) => {
  if (person.grade > highfeMale) highfeMale = person.grade
})
console.log(highfeMale)
// Find the highest grade for people whose name starts with 'J' or 'P'
let highJP = 1
console.log(persons.forEach((person) => {
  if (person.name.startsWith(`J`) || person.name.startsWith('P')) {
    if (person.grade > highJP) {
      highJP = person.grade
    }
  }
}))
console.log(highJP)

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj
Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
let fruitsObj = fruitBasket.reduce((acc, fruit) => {
  if (!acc[fruit]) {
    acc[fruit] = 1
  }
  else {
    acc[fruit] = acc[fruit] + 1
  }
  return acc
}, {})

/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/
let fruitsArr = Object.keys(fruitsObj).reduce((acc, fruit) => {
  acc = acc.concat([[fruit, fruitsObj[fruit]]])
  return acc
}, [])

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array
let newArr = data.reduce((acc, arr) => {
  return acc.concat(arr)
}, [])

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
let dataTwoArr = dataTwo.reduce((acc, arr) => {
  for (let element in arr) {
    if (Array.isArray(element)) { acc = acc.concat(element) }
  }
  acc = acc.concat(arr)
  return acc
}, [])
/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value
  - `triple` triples the input
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/
let increment = (num) => num + 1
let double = (num) => num * 2
let decrement = (num) => num - 1
let triple = (num) => num * 3
let half = (num) => Math.round(num / 2)

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/
let res = pipeline.reduce((acc, fun) => {
  acc = fun(acc)
  return acc
}, 1)

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8

let res2 = pipeline2.reduce((acc, fun) => {
  acc = fun(acc)
  return acc
}, 8)
