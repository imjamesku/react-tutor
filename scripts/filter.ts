const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(list.filter((num) => num % 2 === 0 && num % 3 === 0));

// && and
// || or
// console.log(true && true);
// true && true  =>  true
// true && false => false
// false && true => false
// false && false => false

// true && false && true && true && true => false
// a % 2==0 && <p>123</p>

// true || true  =>  true
// true || false => true
// false || true => true
// false || false => false

// true || false || false || false

// truthy 1, 2, 3,-1
// falsy 0, null, undefined
function fun() {
  return 1;
}
function hof() {
  return function () {
    return 1;
  };
}

const fn = hof();
console.log(fn());
