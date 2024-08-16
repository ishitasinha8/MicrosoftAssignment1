// arrays, objects, strings, function arguments

// concat arrays

const arr1: [number, number] = [10, 20]
const arr2: [number, number] = [30, 40]

const arr3: number[] = [...arr1, ...arr2]

console.log(arr3)

// cloning arrays

const arr4: number[] = [10, 20]
const arr5: number[] = [...arr4]
const arr6: number[] = arr4

console.log(arr4, arr5, arr6) /**[ 10, 20 ] [ 10, 20 ] [ 10, 20 ] */
console.log(arr4 === arr5) /* false because arr5 points to diff memory location */
console.log(arr4 === arr6) /* true because arr6 points to same memory location */

arr4.splice(1,1)
console.log(arr4, arr5, arr6) /**[ 10 ] [ 10, 20 ] [ 10 ] */


const persons: {name: string, age: number} = {
    name: "John",
    age: 30
};

const employee: {name: string, age: number, salary: number}= {
    ...persons,
    salary: 50000
};

console.log(employee)