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

// Create an array peopleName and store value of sex key from persons array
let peoplelName = persons.map((person) => person.name)
// Create an array peopleGrade and store the value of grade key from persons array
let peoplelGrade = persons.map((person) => person.grade)
// Create an array peopleSex and store the value of sex key from persons array
let peoplelSex = persons.map((person) => person.sex)
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
// console.log(persons.filter((person) => {
//   if (person.name.startsWith(`J`) ||
//     person.name.startsWith('P')) return person.name
// }))
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
// console.log(persons.filter((person) => {
//   if (person.name.startsWith(`A`) ||
//     person.name.startsWith('C')) return person.name
// }).length)
// Log all the filtered male ('M') in persons array
// console.log(persons.filter((person) => {
//   if (person.sex == `M`) return person
// }))
// Log all the filtered female ('F') in persons array
// console.log(persons.filter((person) => {
//   if (person.sex == `F`) return person
// }))
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
// console.log(persons.filter((person) => {
//   if (person.sex == `F` && (person.name.startsWith(`J`) || person.name.startsWith(`C`))) return person
// }))
// Log all the even numbers from peopleGrade array
// persons.forEach((person) => {
//   if (person.grade % 2 == 0) console.log(person.grade)
// })
// Find the first name that starts with 'J' in persons array and log the object
// console.log(persons.find((person) => {
//   if (person.name.startsWith(`J`)) return person
// }))
// Find the first name that starts with 'P' in persons array and log the object
// console.log(persons.find((person) => {
//   if (person.name.startsWith(`P`)) return person
// }))
// Find the first name that starts with 'J', grade is greater than 10 and is a female
// console.log(persons.find((person) => {
//   if (person.name.startsWith(`J`) && person.grade > 10 && person.sex == `F`) return person
// }))
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((person) => person.sex == `F`)
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((person) => person.sex == `M`)
// Find the sum of all grades and store in gradeTotal
let gradeTotal = persons.reduce((acc, person) => {
  return acc += person.grade
}, 0)
// Find the average grade
console.log(gradeTotal / persons.length)
// Find the average grade of male
console.log(malePersons.reduce((acc, person) => {
  return acc += person.grade
}, 0) / malePersons.length)
// Find the average grade of female
console.log(femalePersons.reduce((acc, person) => {
  return acc += person.grade
}, 0) / femalePersons.length)
// Find the highest grade
// let highGrade = [...peoplelGrade].sort((a, b) => a - b)
// console.log(highGrade[highGrade.length - 1])
// Find the highest grade in male
let highMale = malePersons.map((person) => person.grade).sort((a, b) => a - b).pop()
// Find the highest grade in female
let higFemale = femalePersons.map((person) => person.grade).sort((a, b) => a - b).pop()
// Find the highest grade for people whose name starts with 'J' or 'P'
let highJP = persons.filter((person) => {
  return (person.name.startsWith('J') || person.name.startsWith('P'))
}).sort((a, b) => a.grade - b.grade).pop()
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
// peoplelGrade.sort((a, b) => a - b)//yes changed
// Sort the peopleGrade in descending order
// peoplelGrade.sort((a, b) => b - a)
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peoplelGrade].sort((a, b) => b - a))
// Sort the array peopelName in ascending `ABCD..Za....z`
// peoplelName.sort()
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log([...peoplelName].sort())
