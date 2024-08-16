// data types - number, boolean, string, null, undefined, object, array

var a:number = 10;
var b:string = 'hello';
var c:boolean = true;
var d: null = null;
var e: undefined = undefined;

var f: { name: string; age: number} = {
  name: 'John',
  age: 25,
};

var g: { [key: string]: any } = new Object();
g.name = 'John';
g.age = 25;

var h: number[] = [1, 2, 3, 4, 5];
var i: number[] = new Array(1, 2, 3, 4, 5);
var j:any = ['John', 25, true, null, undefined, { name: 'John', age: 25 }, [1, 2, 3, 4, 5]];

console.log(a, b, c, d, e, f, g, h, i, j);

console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g, typeof h, typeof i, typeof j);