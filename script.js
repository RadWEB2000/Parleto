//  Link do dokumentacji w repozytorium Github: https://github.com/RadWEB2000/Parleto

const expenses = {
  "2023-01": {
    "01": {
      food: [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
      fuel: [210.22],
    },
    "09": {
      food: [11.9],
      fuel: [190.22],
    },
  },
  "2023-03": {
    "07": {
      food: [20, 11.9, 30.2, 11.9],
    },
    "04": {
      food: [10.2, 11.5, 2.5],
      fuel: [],
    },
  },
  "2023-04": {},
};

function findFirstSunday(month) {
  const [year, monthDay] = month.split("-").map(Number);
  for (let day = 1; day <= 7; day++) {
    const date = new Date(year, monthDay - 1, day);
    if (date.getDay() === 0) {
      return day;
    }
  }
  return null;
}

function calculateMediana(array) {
  const sorted = array.slice().sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

function quickSelect(arr, k) {
  if (arr.length === 1) return arr[0];
  const pivot = arr[Math.floor(Math.random() * arr.length)];
  const lows = arr.filter((el) => el < pivot);
  const highs = arr.filter((el) => el > pivot);
  const pivots = arr.filter((el) => el === pivot);

  if (k < lows.length) {
    return quickSelect(lows, k);
  } else if (k < lows.length + pivots.length) {
    return pivots[0];
  } else {
    return quickSelect(highs, k - lows.length - pivots.length);
  }
}

function quickSelectMedian(arr) {
  const len = arr.length;
  const mid = Math.floor(len / 2);
  if (len % 2 === 0) {
    return (quickSelect(arr, mid - 1) + quickSelect(arr, mid)) / 2;
  } else {
    return quickSelect(arr, mid);
  }
}

function aggregateExpanses(expanses) {
  const allExpanses = [];
  for (const month in expanses) {
    const days = expanses[month];
    const firstSunday = findFirstSunday(month);
    for (const day in days) {
      if (parseInt(day) >= firstSunday) {
        for (const category in days[day]) {
          allExpanses.push(...days[day][category]);
        }
      }
    }
  }
  return allExpanses;
}

function solution1(expenses) {
  const allExpenses = aggregateExpanses(expenses);
  if (allExpenses.length === 0) return null;
  return calculateMediana(allExpenses);
}

function solution2(expenses) {
  const allExpenses = aggregateExpanses(expenses);
  if (allExpenses.length === 0) return null;
  return quickSelectMedian(allExpenses);
}

const result1 = solution1(expenses);
const result2 = solution2(expenses);

console.log(`Solution1: ${result1} | Solution2: ${result2}`);

const resultField = (document.querySelector(
  "#result-field"
).textContent = `${result2}`);
