function greet1(): void {
  console.log('greet1');
}

const greet2 = function (): void {
  console.log('greet2');
}

const greet3 = (): void => {
  console.log('greet3');
}

greet1();
greet2();
greet3();

const sumTwoNos = (num1: number, num2: number): number => num1 + num2;

console.log(sumTwoNos(1, 2));

const greet4 = (name: string): void => console.log(`Hello ${name}`);

greet4('John')