// Задание 1

function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i];

    if (min >= arr[i]) {
      min = arr[i];
    }

    if (max <= arr[i]) {
      max = arr[i];
    }
  }

  avg = sum / arr.length;
  avg = Number(avg.toFixed(2));
  
  return { min: min, max: max, avg: `${avg}` };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // for (let i = 0; i < arrOfArr.length; i++) {
  //   for (let j = 0; j < arrOfArr.length; j++) {
  //     worker(arrr);
  //   }
  //   return worker(arrr);
  // }

  return max;
}

let arrr = [[10, 9, 8], [1, 2, 3]];
// Задание 3
function worker2(arr) {
  // Ваш код
}
