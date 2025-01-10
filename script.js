// Repozytorium Github: https://github.com/RadWEB2000/Parleto

// Niezoptymalizowane rozwiązanie
function solution1(expenses) {
  const allExpenses = [];

  for (const month in expenses) {
    const days = expenses[month];

    // Dodajemy wydatki tylko z pierwszej niedzieli i jej tygodnia
    for (const day in days) {
      if (["01", "02", "03"].includes(day)) {
        for (const category in days[day]) {
          allExpenses.push(...days[day][category]);
        }
      }
    }
  }

  if (allExpenses.length === 0) {
    return null;
  }

  allExpenses.sort((a, b) => a - b);

  const mid = Math.floor(allExpenses.length / 2);
  return allExpenses.length % 2 !== 0
    ? allExpenses[mid]
    : (allExpenses[mid - 1] + allExpenses[mid]) / 2;
}

// Zoptymalizowane rozwiązanie z użyciem Quick Select
/**
 * Quick Select: Umożliwia efektywne wyznaczenie mediany, unika pełnego sortowania.
 * Zalety:
 * - Średnia złożoność O(n) (choć w najgorszym przypadku O(n^2)).
 * - Lepsza wydajność przy dużych zbiorach danych niż pełne sortowanie.
 * Wady:
 * - Trudniejsza implementacja.
 */
function solution2(expenses) {
  const allExpenses = [];

  for (const month in expenses) {
    const days = expenses[month];

    for (const day in days) {
      if (["01", "02", "03"].includes(day)) {
        for (const category in days[day]) {
          allExpenses.push(...days[day][category]);
        }
      }
    }
  }

  if (allExpenses.length === 0) {
    return null;
  }

  function quickSelect(arr, k) {
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    const left = arr.filter((x) => x < pivot);
    const right = arr.filter((x) => x > pivot);
    const pivotCount = arr.length - left.length - right.length;

    if (k < left.length) {
      return quickSelect(left, k);
    } else if (k < left.length + pivotCount) {
      return pivot;
    } else {
      return quickSelect(right, k - left.length - pivotCount);
    }
  }

  const mid = Math.floor(allExpenses.length / 2);

  if (allExpenses.length % 2 !== 0) {
    return quickSelect(allExpenses, mid);
  } else {
    const left = quickSelect(allExpenses, mid - 1);
    const right = quickSelect(allExpenses, mid);
    return (left + right) / 2;
  }
}

// Testowe dane
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

console.log(solution1(expenses)); // Niezoptymalizowane: 20,5
console.log(solution2(expenses)); // Zoptymalizowane: 20,5
