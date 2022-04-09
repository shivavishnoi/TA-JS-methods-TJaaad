// NOTE: You can not use reduce methods to solve this exercise

function countAllPeople() {
  // your code goes here
  let count = 0
  for (let house of got.houses) {
    count += house.people.length
  }
  return count
}

function peopleByHouses() {
  // your code goes here
  let count = {}
  for (let i = 0; i < got.houses.length; i++) {
    count[got.houses[i].name] = got.houses[i].people.length
  }
  return count
}

function everyone() {
  // your code goes here
  let res = []
  for (let house of got.houses) {
    for (let person of house.people) {
      res.push(person.name)
    }
  }
  return res
}

function nameWithS() {
  // your code goes here
  let preRes = everyone()
  let res = []
  for (let name of preRes) {
    if (name.includes(`s`) || name.includes(`S`)) res.push(name)
  }
  return res
}

function nameWithA() {
  // your code goes here
  let preRes = everyone()
  let res = []
  for (let name of preRes) {
    if (name.includes(`a`) || name.includes(`A`)) res.push(name)
  }
  return res
}

function surnameWithS() {
  // your code goes here  
  let res = []
  let splitted = ''
  for (let house of got.houses) {
    for (let person of house.people) {
      splitted = person.name.split(' ')
      if (splitted[1].startsWith(`s`) || splitted[1].startsWith(`S`)) res.push(person.name)
    }
  }
  return res
}

function surnameWithA() {
  // your code goes here
  let res = []
  let splitted = ''
  for (let house of got.houses) {
    for (let person of house.people) {
      splitted = person.name.split(' ')
      if (splitted[1].startsWith(`a`) || splitted[1].startsWith(`A`)) res.push(person.name)
    }
  }
  return res
}

function peopleNameOfAllHouses() {
  // your code goes here
  let res = {}
  let name = []
  for (let house of got.houses) {
    for (let person of house.people) {
      name.push(person.name)
      res[house.name] = name
    }
    name = []
  }
  return res
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
