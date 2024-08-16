// find, filter, map

const employees = [
  {
      "code": "CT7207",
      "salary": 40000,
      "id": 1007,
      "job": "Manager",
      "department": "Operations",
      "name": "Bently Smith",
      "hobbies": ["Sports", "Reading", "Painting"]
  },
  {
      "code": "CT7210",
      "salary": 80000,
      "id": 1010,
      "job": "Director",
      "department": "Operations",
      "name": "Isla Morris",
      "hobbies": ["Sports", "Reading"]
  },
  {
      "code": "CT7202",
      "salary": 15000,
      "id": 1002,
      "job": "Salesman",
      "department": "Sales",
      "name": "Allen Green",
      "hobbies": ["Sports", "Painting"]
  },
  {
      "code": "CT7208",
      "salary": 60000,
      "id": 1008,
      "job": "Analyst",
      "department": "Research",
      "name": "Xavier Campbell",
      "hobbies": ["Reading", "Painting"]
  },
  {
      "code": "CT7209",
      "salary": 50000,
      "id": 1009,
      "job": "Analyst",
      "department": "Research",
      "name": "Ethan Kumar",
      "hobbies": ["Crafting", "Painting"]
  },
  {
      "code": "CT7201",
      "salary": 20000,
      "id": 1001,
      "job": "Clerk",
      "department": "Accounting",
      "name": "John Marshal",
      "hobbies": ["Singing", "Painting"]
  },
  {
      "code": "CT7205",
      "salary": 15000,
      "id": 1005,
      "job": "Salesman",
      "department": "Sales",
      "name": "Ethan Almaas",
      "hobbies": ["Singing", "Dancing"]
  },
  {
      "code": "CT7211",
      "salary": 15000,
      "id": 1011,
      "job": "Salesman",
      "department": "Sales",
      "name": "Natalie Robinson",
      "hobbies": ["Writing"]
  },
  {
      "code": "CT7212",
      "salary": 15000,
      "id": 1012,
      "job": "Salesman",
      "department": "Sales",
      "name": "Earl Rose",
      "hobbies": ["Singing", "Sports"]
  },
  {
      "code": "CT7206",
      "salary": 20000,
      "id": 1006,
      "job": "Clerk",
      "department": "Accounting",
      "name": "Ilija Seifert",
      "hobbies": ["Singing", "Cooking"]
  },
  {
      "code": "CT7204",
      "salary": 20000,
      "id": 1004,
      "job": "Clerk",
      "department": "Accounting",
      "name": "Annette Burke",
      "hobbies": ["Reading", "Teaching"]
  },
  {
      "code": "CT7203",
      "salary": 15000,
      "id": 1003,
      "job": "Salesman",
      "department": "Sales",
      "name": "Fernando Gordon",
      "hobbies": []
  },
  {
      "code": "CT7213",
      "salary": 15000,
      "id": 1013,
      "job": "Salesman",
      "department": "Sales",
      "name": "Catherine Foster",
      "hobbies": []
  }
];

// fin -> get employee with id 1003
let result = employees.find((i) => i.id === 1003);

console.log('find: ', result);

// findIndex -> get index of an employee having id 1008
result = employees.findIndex((i) => i.id === 1008);
console.log('findIndex: ', result);

//some
result = employees.some((employee) => employee.department === "Sales")
console.log("some: ",result)

//filter
result = employees.filter((employee) => employee.job === "Salesman")
// console.log("filter: ",result)

result = employees.map((employee) => employee.salary+10000)
console.log("Map: ",result)

//foreach
let sum = 0;
employees.forEach((employee) => {
    sum += employee.salary;
    return sum;
}
)
console.log("ForEach: ",sum)

//reduce method 1
result = employees.reduce(getSum,0);

function getSum(total, employee){
    return total + employee.salary;
}
console.log("reduce: ",result)

//reduce method 2 using arrow
result = employees.reduce((total, employee) => {
    return total + employee.salary;
},0)
console.log("reduce2: ",result)

//sort
// result = employees.sort((a, b) => a.id - b.id);
// console.log("Sort: ", result)

// result = employees.sort()
// console.log("Sort: ", result)

// Reverse
result = employees.reverse()
console.log("Reverse: ", result)

newEmployee = {
    "code": "CT7215",
    "salary": 25000,
    "id": 1014,
    "job": "Engineer",
    "department": "Engineering",
    "name": "Ishita",
    "hobbies": []
};

result = employees.unshift(newEmployee)
console.log("Length of array after unshift: ", result)
console.log("Unshift: ", employees)

result = employees.every( (employee) => employee.salary>15000)
console.log("every: ", result)

result = employees.fill(newEmployee,2,4)
console.log("fill 2,4: ", result)

// refer https://github.com/ZakiMohammed/javascript-array-methods/blob/master/scripts.js