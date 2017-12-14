// // {
// //   let a = 10;
// //   var b = 1;
// // }

// // console.log(a);
// // console.log(b);

// var a = [];
// for (let i = 0; i < 10; i++) {
//     // console.log(i)
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[6](); // 10

// // typeof x;
// // let x;

// // console.log(x); 


// function bar(x = y, y = 2) {
//   return [x, y];
// }

// function bar(x = 2, y = x) {
//   return [x, y];
// }

// console.log(bar()); // 报错

// var tmp = new Date();
// console.log(tmp);
// function f() {
//   console.log(tmp);
//   if (false) {
//     var tmp = "hello world";
//   }
// }

// f(); 

// if (true) {
//   function f() {console.log('true')}
//   f();
// }

// function f() { console.log('I am outside!'); }
// (function () {
//   f();
// }());


// function f() { console.log('I am outside!'); }
// (function () {
//   function f() { console.log('I am inside!'); }
//   if (false) {
//   }
//   f();
// }());


var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});

console.log(Object.create(proxy));
// console.log(obj.time) // 35
{ foo, bar } = { foo: "aaa", bar: "bbb" };
console.log(foo);
console.log(bar);