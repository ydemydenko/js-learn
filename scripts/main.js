// 1
function createBase(x) {
  return function (y) {
    return x + y;
  }
}
var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27



// 2
function creatButtons(num) {
  for (var i=1; i<= num; i++){
    var el = document.createElement('button');
    el.innerText = `Label ${i}`;
    el.setAttribute("style", "cursor:pointer; margin: 10px");
    // IIFE
    ((iNum) => {
      el.addEventListener('click',(e) => console.log(`You've cliked on ${iNum}`))
    })(i);
    document.body.appendChild(el);
  }
}
document.addEventListener('DOMContentLoaded', () => creatButtons(2));



// 3
function funaverage(...rest) {
  return rest.reduce((total, num) => total += num, 0)/rest.length;
}
function funaverage2() {
  var sum = 0;
  // var args = Array.prototype.slice.call(arguments) || Array.from(arguments) || [...arguments]
  for (var num of arguments) {
    sum += num;
  }
  return sum/arguments.length
}
console.log(funaverage(2,4,8,2,2,4,6));
console.log(funaverage2(3,6,9));



// 4
const militaryMan = {
  name: 'Gregor',
  placeOfService: 'army'
}
const civil = {
  name: 'John',
  placeOfService: 'factory'
}

function militaryGreeting() {
  console.log(`${this.name} to your service`)
}

function civilGreeting() {
  console.log(`Hi, I’m ${this.name}`)
}

function getGreeting(person) {
  if (person.placeOfService == 'army') {
    militaryGreeting.call(person);
  } else {
    civilGreeting.bind(person)();
  }
}

let gregorsGreeting = getGreeting(militaryMan);
let jhonsGreeting = getGreeting(civil);

