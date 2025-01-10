// Funkcja oblicza wszystkie daty od 1 do pierwszej niedzieli włącznie
const getDaysToFirstSunday = (year, month) => {
  const days = [];
  for (let day = 1; day <= 7; day++) {
      const date = new Date(year, month - 1, day);
      days.push(day);
      if (date.getDay() === 0) break; // Niedziela
  }
  return days;
};

// Rozwiązanie 1: Niezoptymalizowane
function solution1(expenses) {
  if (!expenses) return null;

  let allExpenses = [];

  for (const [monthYear, days] of Object.entries(expenses)) {
      const [year, month] = monthYear.split("-").map(Number);
      const daysToSunday = getDaysToFirstSunday(year, month);

      for (const day of daysToSunday) {
          const dayStr = day.toString().padStart(2, "0");
          if (days[dayStr]) {
              for (const category of Object.values(days[dayStr])) {
                  allExpenses = allExpenses.concat(category);
              }
          }
      }
  }

  if (allExpenses.length === 0) return null;

  // Sortujemy dane i obliczamy medianę
  allExpenses.sort((a, b) => a - b);
  const mid = Math.floor(allExpenses.length / 2);
  return allExpenses.length % 2 === 0
      ? (allExpenses[mid - 1] + allExpenses[mid]) / 2
      : allExpenses[mid];
}

// Rozwiązanie 2: Zoptymalizowane (quick select)
function solution2(expenses) {
  if (!expenses) return null;

  let allExpenses = [];

  for (const [monthYear, days] of Object.entries(expenses)) {
      const [year, month] = monthYear.split("-").map(Number);
      const daysToSunday = getDaysToFirstSunday(year, month);

      for (const day of daysToSunday) {
          const dayStr = day.toString().padStart(2, "0");
          if (days[dayStr]) {
              for (const category of Object.values(days[dayStr])) {
                  allExpenses = allExpenses.concat(category);
              }
          }
      }
  }

  if (allExpenses.length === 0) return null;

  // Quick Select do obliczenia mediany
  const quickSelect = (arr, k) => {
      if (arr.length <= 1) return arr[0];

      const pivot = arr[Math.floor(arr.length / 2)];
      const lows = arr.filter(x => x < pivot);
      const highs = arr.filter(x => x > pivot);
      const pivots = arr.filter(x => x === pivot);

      if (k < lows.length) {
          return quickSelect(lows, k);
      } else if (k < lows.length + pivots.length) {
          return pivot;
      } else {
          return quickSelect(highs, k - lows.length - pivots.length);
      }
  };

  const mid = Math.floor(allExpenses.length / 2);
  if (allExpenses.length % 2 === 0) {
      const left = quickSelect([...allExpenses], mid - 1);
      const right = quickSelect([...allExpenses], mid);
      return (left + right) / 2;
  } else {
      return quickSelect([...allExpenses], mid);
  }
}

// Przykład danych
const expenses = {
  "2023-01": {
      "01": {
          "food": [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
          "fuel": [210.22]
      },
      "09": {
          "food": [11.9],
          "fuel": [190.22]
      }
  },
  "2023-03": {
      "07": {
          "food": [20, 11.9, 30.20, 11.9]
      },
      "04": {
          "food": [10.20, 11.50, 2.5],
          "fuel": []
      }
  },
  "2023-04": {}
};

// Testy
console.log("Solution 1 (Niezoptymalizowane):", solution1(expenses)); // Oczekiwane: 11.72
console.log("Solution 2 (Zoptymalizowane):", solution2(expenses));   // Oczekiwane: 11.72
