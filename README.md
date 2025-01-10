# Dokumentacja zadania rekrutacyjnego - PL

Ten projekt oblicza medianę wydatków od pierwszej niedzieli każdego miesiąca na podstawie dostarczonych danych wejściowych. Dwa różne rozwiązania implementują algorytmy o różnej złożoności:

- **Solution1:** Pierwsze rozwiązanie wykorzystuje standardowe sortowanie do obliczenia mediany.
- **Solution2:** Drugie rozwiązanie wykorzystuje algorytm `quickSelect()` co pozwala na szybsze obliczenia przy dużych zbiorach danych.

## Dane wejściowe

Struktura danych wejściowych

```javascript
    "YYYY-MM": {
        "DD":{
            "category":[kwoty wydatków]
        }
    }
```

- `YYYY-MM` - Rok i miesiąc
- `DD` - Dzień miesiąca
- `category` - Kategorie wydatków np. `food` i `fuel`.

## Funkcjonalności

### Znalezienie pierwszej niedzieli miesiąca

Funkcja `findFirstSunday(month)` znajduje pierwszy dzień miesiąca, który przypada na niedzielę.

### Agregacja wydatków

Funkcja `aggregateExpanses(expenses)` gromadzi wszystkie wydatki począwszy od pierwszej niedzieli każdego miesiąca.

### Obliczenie mediany

- **Solution1:** Używa pełnego sortowania i funkcji `calculateMediana()`,
- **Solution2:** Używa algorytmu `quickSelect()` z funkcją `quickSelectMedian()`

## Jak uruchomić?

1. Umieść plik script.js w tym samym katalogu co plik HTML.
2. Dodaj następujący element `<script>` w pliku HTML:

```html
<script src="script.js" defer></script>
```

3. Otwórz plik HTML w przeglądarce i sprawdź konsolę, aby sprawdzić wyniki

## Wyniki

Mediana obliczona z użyciem obu funkcji `solution1()` oraz `solution2()` wynosi **19.5**.

---

# Recruitment Task Documentation - EN

This project calculates the median of expenses starting from the first Sunday of each month based on the provided input data. Two different solutions implement algorithms with varying complexity:

- **Solution1:** The first solution uses standard sorting to calculate the median.
- **Solution2:** The second solution uses the `quickSelect()` algorithm, allowing faster calculations for large datasets.

## Input Data

Input data structure:

```javascript
"YYYY-MM": {
    "DD":{
        "category":[amounts of expenses]
    }
}
```

- `YYYY-MM` - Year and month
- `DD` - Day of the month
- `category` - Expense categories, e.g., `food` and `fuel`.

## Functionalities

### Finding the First Sunday of the Month

The `findFirstSunday(month)` function finds the first day of the month that falls on a Sunday.

### Expense Aggregation

The `aggregateExpanses(expenses)` function collects all expenses starting from the first Sunday of each month.

### Median Calculation

- **Solution1:** Uses full sorting and the `calculateMediana()` function.
- **Solution2:** Uses the `quickSelect()` algorithm with the `quickSelectMedian()` function.

## How to Run?

1. Place the `script.js` file in the same directory as the HTML file.
2. Add the following `<script>` element to the HTML file:

```html
<script src="script.js" defer></script>
```

3. Open the HTML file in a browser and check the console to view the results.

## Results

The median calculated using both `solution1()` and `solution2()` functions is **19.5**.
