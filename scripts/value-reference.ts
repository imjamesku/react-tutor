// reference
let o1 = { p1: 1, p2: 2 };
let o2 = o1;
o1.p1 = 3;
console.log(o2);

let o3 = { p1: 1, p2: 2 };
let o4 = o3;
o3 = { p1: 3, p2: 2 };
console.log(o4);

// value
let a = 1;
let b = a;
a = 2;
console.log(b);
