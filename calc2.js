var a = [];
var $__0 = function(i) {
  a[i] = function() {
    console.log(i);
  };
};
for (var i = 0; i < 10; i++) {
  $__0(i);
}
a[6]();
function bar() {
  var x = arguments[0] !== (void 0) ? arguments[0] : y;
  var y = arguments[1] !== (void 0) ? arguments[1] : 2;
  return [x, y];
}
function bar() {
  var x = arguments[0] !== (void 0) ? arguments[0] : 2;
  var y = arguments[1] !== (void 0) ? arguments[1] : x;
  return [x, y];
}
console.log(bar());
var tmp = new Date();
console.log(tmp);
function f() {
  console.log(tmp);
  if (false) {
    var tmp = "hello world";
  }
}
f();
if (true) {
  var f$__1 = function() {
    console.log('true');
  };
  f$__1();
}
function f() {
  console.log('I am outside!');
}
(function() {
  f();
}());
function f() {
  console.log('I am outside!');
}
(function() {
  function f() {
    console.log('I am inside!');
  }
  if (false) {}
  f();
}());
