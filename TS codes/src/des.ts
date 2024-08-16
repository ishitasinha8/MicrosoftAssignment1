// destructuring arrays

const wizard: [string, string] = ['Harry', 'Potter']

// console.log(wizard[0], wizard[1])  // Harry Potter

const [firstName, lastName]: [string, string] = wizard

console.log(firstName, lastName)    // Harry Potter

// destructuring objects

const person: {id: number, name: string, age: number} = { id: 1, name: 'John Doe', age: 21 }

// console.log(person.name);

const { name: personName } = person

console.log(personName)   // John Doe