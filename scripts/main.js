// 1.1
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getEvenNums1(arr) {
  if (!Array.isArray(arr)) throw new TypeError;

  let evNums1 = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    // Skip if element is not a number.
    if (typeof arr[i] !== 'number') {
      continue;
    }

    if (arr[i] % 2 != 0) continue;
    evNums1[evNums1.length] = arr[i];
  }
  return evNums1.reverse();
}

console.log('evNums1 = ', getEvenNums1([10, '12aa', ['test', 2,], 45, 60, 34]));

// 1.2
function getEvenNums2(arr) {
  return arr.filter(num => num % 2 == 0);
}

console.log('evNums2 = ', getEvenNums2(nums));


// 2.1
nums = [121, 17, 2, 3, 4, 5, 454, 88, 6, 7, 8, 9, -251, 10];

function biggestNum1(arr) {
  let biggestNum1 = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (biggestNum1 < arr[i]) {
      biggestNum1 = arr[i]
    }
  }
  return biggestNum1;
}

console.log('the biggest with loop = ', biggestNum1(nums));

// 2.2
function biggestNum2(arr) {
  return arr.reduce((total, currVal) => (total < currVal) ? currVal : total, arr[0]);
}

console.log('the biggest with total= ', biggestNum2([121, -220, 17, 2, 3, 4, 5, 88, 6, 7, 8, 9, 150, 10]));


// 3.1
var sliceArr = [1, 2, 3, 4, 5, 6, 7];

function sliceCopy1(arr, pos1 = 0, pos2 = arr.length) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i > pos1 && i <= pos2) {
      res[res.length] = i;
    }
  }
  return res;
}

console.log('Slice copy = ', sliceCopy1(sliceArr, 1, 4));

// 3.2
function sliceCopy2(arr, pos1 = 0, pos2 = arr.length) {
  return arr.slice(pos1, pos2);
}

console.log('Slice usual = ', sliceCopy2(sliceArr, 1, 4));


// 4.1
var arrData = [12, 22, 33, 44, 55];

function plusTen(num) {
  return num + 10;
}

function mapCopy1(arr, callback) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res[res.length] = callback(arr[i]);
  }
  return res;
}

console.log('Map copy = ', mapCopy1(arrData, plusTen));

// 4.2
function mapCopy2(arr, callback) {
  return arr.map(item => callback(item));
}

console.log('Map usual = ', mapCopy2(arrData, plusTen));


// 5 
arrData = [3, 5, 7.281, 0.625, 13, -0.987654, 27, 0.00729];

function isPrimeFn(num) {
  if(!Number.isInteger(num)) return false;
  else if (num === 1) return false;
  else if (num === 2) return true;
  else {
    for (let x = 2; x < num; x++) {
      if (num % x === 0) {
        return false;
      }
    }
    return true;
  }
}

function isLessThan1Fn(num) {
  return num < 1;
}

function arrTransform(arr, isPrime, isLessThan1) {
  let res = [];
  arr.forEach(item => {
    if(isPrime(item)) {
      item +=` – a prime number’`;
    } else if (isLessThan1(item)) {
      item = item.toFixed(4);
    } else {
      item = item.toFixed(2);
    }
    res.push(item);
  });
  return res;
}

console.log('Array Transform = ', arrTransform(arrData, isPrimeFn, isLessThan1Fn));