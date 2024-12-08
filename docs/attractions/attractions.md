

# Dokumentacja wyszukiwania atakcji


## Wstęp

W tym rozdziale omówiono proces wyszukiwania atrakcji w aplikacji `czas-na-wypad` moduł wyszukiwania atrakcji umożliwia użytkownikom odnajdywanie interesujących miejsc na podstawie określonych kryteriów, takich jak lokalizacja, typ atrakcji czy ocena.



## Klasa `AttractionController`


**Opis:**  
Klasa odpowiedzialna za obsługę żądań HTTP związanych z wyszukiwaniem atrakcji turystycznych.

### Endpointy

#### `GET /api/attractions`

**Opis:**  
Zwraca listę atrakcji na podstawie określonych kryteriów filtrowania.

##### Parametry zapytania:

| Nazwa       | Typ     | Wymagane | Opis                                         |
|-------------|---------|----------|----------------------------------------------|
| `location`  | String  | Nie       | Nazwa miejscowości lub współrzędne.          |
| `type`      | String  | Nie       | Typ atrakcji (np. `muzeum`, `park`).         |
| `rating`    | Float   | Nie       | Minimalna ocena atrakcji.                    |
| `page`      | Integer | Nie       | Numer strony wyników (domyślnie `0`).        |
| `size`      | Integer | Nie       | Liczba wyników na stronę (domyślnie `10`).   |

##### Przykład zapytania:
```http
GET /api/attractions?location=Warszawa&type=muzeum&rating=4&page=1&size=5
```

##### Przykład odpowiedzi:
```json
{
  "content": [
    {
      "id": 1,
      "name": "Muzeum Narodowe w Warszawie",
      "location": "Warszawa",
      "type": "muzeum",
      "rating": 4.5
    },
    {
      "id": 2,
      "name": "Łazienki Królewskie",
      "location": "Warszawa",
      "type": "park",
      "rating": 4.8
    }
  ],
  "page": 1,
  "size": 5,
  "totalElements": 12,
  "totalPages": 3
}
```

---

#### `GET /api/attractions/{id}`

**Opis:**  
Zwraca szczegółowe informacje o atrakcji na podstawie identyfikatora.

##### Parametry ścieżki:

| Nazwa  | Typ  | Wymagane | Opis                     |
|--------|------|----------|--------------------------|
| `id`   | Long | Tak       | Identyfikator atrakcji.  |

##### Przykład zapytania:
```http
GET /api/attractions/1
```

##### Przykład odpowiedzi:
```json
{
  "id": 1,
  "name": "Muzeum Narodowe w Warszawie",
  "location": "Warszawa",
  "type": "muzeum",
  "description": "Jedno z największych muzeów w Polsce.",
  "rating": 4.5
}
```

##### Błędy:

| Kod HTTP | Opis                              |
|----------|-----------------------------------|
| `404`    | Atrakcja o podanym `id` nie istnieje. |

---

## Klasa `AttractionService`



**Opis:**  
Klasa zawierająca logikę biznesową dotyczącą wyszukiwania atrakcji.

### Metody

#### `List<Attraction> findAttractions(String location, String type, Float rating, Pageable pageable)`

**Opis:**  
Zwraca listę atrakcji spełniających podane kryteria filtrowania.

##### Parametry:

| Nazwa       | Typ      | Wymagane | Opis                                    |
|-------------|----------|----------|-----------------------------------------|
| `location`  | String   | Nie       | Filtr miejscowości lub współrzędnych.   |
| `type`      | String   | Nie       | Typ atrakcji (np. `muzeum`, `park`).    |
| `rating`    | Float    | Nie       | Minimalna ocena atrakcji.               |
| `pageable`  | Pageable | Tak       | Parametry paginacji.                    |

**Zwraca:**  
`List<Attraction>` - Lista atrakcji spełniających kryteria.

---

#### `Optional<Attraction> getAttractionById(Long id)`

**Opis:**  
Zwraca szczegóły atrakcji na podstawie jej identyfikatora.

##### Parametry:

| Nazwa  | Typ  | Wymagane | Opis                    |
|--------|------|----------|-------------------------|
| `id`   | Long | Tak       | Identyfikator atrakcji. |

**Zwraca:**  
`Optional<Attraction>` - Szczegóły atrakcji lub pusty obiekt, jeśli atrakcja nie istnieje.

---

## Klasa `AttractionRepository`


**Opis:**  
Repozytorium odpowiedzialne za komunikację z bazą danych dla obiektów `Attraction`.

### Metody

#### `List<Attraction> findByLocationAndTypeAndRating(String location, String type, Float rating, Pageable pageable)`

**Opis:**  
Zwraca listę atrakcji na podstawie filtrów lokalizacji, typu i oceny.


### Scenariusze Użycia - Wyszukiwanie Atrakcji


1. **Przeglądanie atrakcji według kategorii i lokalizacji**

      Użytkownik chce zobaczyć atrakcje w określonej kategorii, np. „Muzea”, w wybranej miejscowości, np. „Warszawa”.

2. **Szczegóły atrakcji**

      Użytkownik wybiera konkretną atrakcję z listy wyników, aby zobaczyć szczegółowe informacje, takie jak opis, lokalizacja, godziny otwarcia i oceny.


