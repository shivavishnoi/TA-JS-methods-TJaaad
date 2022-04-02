// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
// console.log(numbers.indexOf(101))
// - Find the last index of `9` in numbers
// console.log(numbers.lastIndexOf(9))
// - Convert value of strings array into a sentance like "This is a collection of words"
let one = strings.reduce((acc, word) => {
  return acc + " " + word
}, " ")
let two = strings.join(" ")
// - Add two new words in the strings array "called" and "sentance"
let newStringArray = [...strings]
newStringArray.push('called', 'sentence')

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
newStringArray.join(" ")
// - Remove the first word in the array (strings)
// newStringArray.shift()
// - Find all the words that contain 'is' use string method 'includes'
let filetrArr = newStringArray.filter((word) => word.includes('is'))
// - Find index of the words that contain 'is' use string method 'indexOf'
newStringArray.forEach((word, index) => {
  // if (word.includes('is')) console.log(index)
})
// - Check if all the numbers in numbers array are divisible by three use array method (every)
let res = numbers.every((num) => num % 3 == 0)
// -  Sort Array from smallest to largest
let newNumberArray = [...numbers]
newNumberArray.sort((a, b) => a - b)
// - Remove the last word in strings
newStringArray.pop()
// - Find largest number in numbers
let max = numbers[0]
numbers.forEach((num) => {
  if (num > max) max = num
})
// - Find longest string in strings
let long = ''
strings.forEach((word) => {
  if (word.length > long.length) long = word
})
// - Find all the even numbers
res = numbers.filter((num) => num % 2 == 0)
// - Find all the odd numbers
res = numbers.filter((num) => num % 2 != 0)
// - Place a new word at the start of the array use (unshift)
strings.unshift('New')
// - Make a subset of numbers array [18,9,7,11]

// - Make a subset of strings array ['a','collection']

// - Replace 12 & 18 with 1221 and 1881

// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
customers.forEach((person) => {
  if (person.firstname.startsWith('J')) console.log(person.firstname + ' ' + person.lastname)
})
// - Create new array with only first name
res = customers.map((person) => person.firstname)
// - Create new array with all the full names (ex: "Joe Blogs")
res = customers.map((person) => person.firstname + ' ' + person.lastname)
// - Sort the array created above alphabetically
res.sort()
// - Create a new array that contains only user who has at least one vowel in the firstname.
// vowel = [`a`,`e`,`i`,`o`,`u`]
res = customers.filter((person) => {
  if (person.firstname.includes(`a`)) return person.firstname
  if (person.firstname.includes(`e`)) return person.firstname
  if (person.firstname.includes(`i`)) return person.firstname
  if (person.firstname.includes(`o`)) return person.firstname
  if (person.firstname.includes(`u`)) return person.firstname
})
