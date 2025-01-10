# Median Expenses Calculator

## Opis projektu
Ten projekt zawiera implementację funkcji w JavaScript do obliczania mediany wydatków do pierwszej niedzieli włącznie dla każdego miesiąca, na podstawie danych wejściowych o strukturze podobnej do JSON. Kod zawiera dwie wersje rozwiązania:

- **Solution 1:** Niezoptymalizowana metoda, używająca sortowania i tradycyjnego obliczania mediany.
- **Solution 2:** Zoptymalizowana metoda wykorzystująca algorytm Quick Select.

---

## Funkcjonalności

1. **Obliczanie dat do pierwszej niedzieli włącznie:**
   - Wyznaczanie wszystkich dni od 1. dnia miesiąca do pierwszej niedzieli włącznie.
   - Funkcja dynamicznie generuje listę dat na podstawie roku i miesiąca.

2. **Zbieranie wydatków:**
   - Dane o wydatkach są odczytywane dla odpowiednich dni z podanej struktury danych.

3. **Obliczanie mediany:**
   - **Solution 1:** Sortuje dane i oblicza medianę w sposób tradycyjny.
   - **Solution 2:** Wykorzystuje algorytm Quick Select dla bardziej efektywnego obliczania mediany.

---

## Struktura danych wejściowych
Dane wejściowe muszą mieć poniższą strukturę:

```json
{
    "YYYY-MM": {
        "DD": {
            "category": [ wartości... ]
        },
        ...
    },
    ...
}
```

### Przykład danych wejściowych:

```json
{
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
}
```

---

## Funkcje

### 1. `getDaysToFirstSunday(year, month)`

Wyznacza dni od 1. do pierwszej niedzieli włącznie.

**Parametry:**
- `year` *(number)*: Rok.
- `month` *(number)*: Miesiąc (1-12).

**Zwraca:**
- Tablica dni *(array of numbers)*.

---

### 2. `solution1(expenses)`

Implementacja niezoptymalizowana.

**Opis:**
- Pobiera wydatki dla dni do pierwszej niedzieli każdego miesiąca.
- Sortuje wydatki i oblicza medianę.

**Parametry:**
- `expenses` *(object)*: Dane wejściowe o wydatkach.

**Zwraca:**
- Mediana wydatków *(number)* lub `null` jeśli brak danych.

---

### 3. `solution2(expenses)`

Implementacja zoptymalizowana z użyciem algorytmu Quick Select.

**Opis:**
- Pobiera wydatki dla dni do pierwszej niedzieli każdego miesiąca.
- Wykorzystuje Quick Select do efektywnego obliczenia mediany.

**Parametry:**
- `expenses` *(object)*: Dane wejściowe o wydatkach.

**Zwraca:**
- Mediana wydatków *(number)* lub `null` jeśli brak danych.

---

## Instrukcja użycia

1. Skopiuj kod z pliku `medianExpenses.js`.
2. Zaimportuj funkcje do swojego projektu.
3. Użyj funkcji z danymi wejściowymi o odpowiedniej strukturze.

### Przykład:

```javascript
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

console.log("Solution 1:", solution1(expenses)); // Wynik: 11.72
console.log("Solution 2:", solution2(expenses)); // Wynik: 11.72
```

---

## Testy

### Dane testowe:

```javascript
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

console.log("Solution 1 (Niezoptymalizowana):", solution1(expenses)); // Wynik: 11.72
console.log("Solution 2 (Zoptymalizowana):", solution2(expenses));   // Wynik: 11.72
```


