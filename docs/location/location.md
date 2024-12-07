
# Dokumentacja Pobierania Lokalizacji

## Wstęp

W tym rozdziale omówiono proces pobieranie lokalizacji w aplikacji `czas-na-wypad`.


## Klasa `LocationController`


**Opis:**  
Klasa kontrolera odpowiedzialna za obsługę żądań HTTP związanych z lokalizacjami. Oferuje endpointy pozwalające na pobranie wszystkich lokalizacji lub szczegółów dla określonej lokalizacji.

---

### Endpointy

#### `GET /api/locations`

**Opis:**  
Zwraca listę wszystkich dostępnych lokalizacji.

**Przykład zapytania:**
```http
GET /api/locations
```

**Przykład odpowiedzi:**
```json
[
  {
    "id": 1,
    "name": "Warszawa",
    "latitude": 52.2297,
    "longitude": 21.0122,
    "description": "Stolica Polski."
  },
  {
    "id": 2,
    "name": "Kraków",
    "latitude": 50.0647,
    "longitude": 19.9450,
    "description": "Historyczne miasto w Polsce."
  }
]
```

---

#### `GET /api/locations/{id}`

**Opis:**  
Zwraca szczegóły lokalizacji na podstawie jej identyfikatora.

**Parametry ścieżki:**

| Nazwa | Typ  | Wymagane | Opis                     |
|-------|------|----------|--------------------------|
| `id`  | Long | Tak      | Identyfikator lokalizacji |

**Przykład zapytania:**
```http
GET /api/locations/1
```

**Przykład odpowiedzi:**
```json
{
  "id": 1,
  "name": "Warszawa",
  "latitude": 52.2297,
  "longitude": 21.0122,
  "description": "Stolica Polski."
}
```

**Błędy:**

| Kod HTTP | Opis                                     |
|----------|------------------------------------------|
| `404`    | Lokalizacja o podanym `id` nie istnieje. |

---

## Klasa `LocationService`



**Opis:**  
Klasa odpowiedzialna za logikę biznesową związaną z lokalizacjami.

### Metody

#### `List<Location> getAllLocations()`

**Opis:**  
Zwraca listę wszystkich lokalizacji w systemie.

**Zwraca:**  
`List<Location>` - Lista wszystkich lokalizacji.

---

#### `Optional<Location> getLocationById(Long id)`

**Opis:**  
Zwraca szczegóły lokalizacji na podstawie identyfikatora.

**Parametry:**

| Nazwa | Typ  | Wymagane | Opis                     |
|-------|------|----------|--------------------------|
| `id`  | Long | Tak      | Identyfikator lokalizacji |

**Zwraca:**  
`Optional<Location>` - Szczegóły lokalizacji lub pusty obiekt, jeśli lokalizacja nie istnieje.

---

## Klasa `LocationRepository`


**Opis:**  
Repozytorium odpowiedzialne za komunikację z bazą danych w kontekście lokalizacji.

### Metody

#### `Optional<Location> findById(Long id)`

**Opis:**  
Znajduje lokalizację na podstawie jej identyfikatora.

---

#### `List<Location> findAll()`

**Opis:**  
Zwraca listę wszystkich lokalizacji dostępnych w bazie danych.

---

## Model `Location`



**Opis:**  
Encja reprezentująca lokalizację w systemie.

### Pola

| Nazwa        | Typ     | Opis                                 |
|--------------|---------|--------------------------------------|
| `id`         | Long    | Unikalny identyfikator lokalizacji   |
| `name`       | String  | Nazwa miejscowości lub miejsca       |
| `latitude`   | Double  | Szerokość geograficzna               |
| `longitude`  | Double  | Długość geograficzna                |
| `description`| String  | Opis lokalizacji (opcjonalne)        |

---

## Przykładowe zapytania API

### Pobranie listy lokalizacji

**Zapytanie:**
```http
GET /api/locations
```

**Odpowiedź:**
```json
[
  {
    "id": 1,
    "name": "Warszawa",
    "latitude": 52.2297,
    "longitude": 21.0122,
    "description": "Stolica Polski."
  },
  {
    "id": 2,
    "name": "Kraków",
    "latitude": 50.0647,
    "longitude": 19.9450,
    "description": "Historyczne miasto w Polsce."
  }
]
```

---

### Pobranie szczegółów lokalizacji

**Zapytanie:**
```http
GET /api/locations/1
```

**Odpowiedź:**
```json
{
  "id": 1,
  "name": "Warszawa",
  "latitude": 52.2297,
  "longitude": 21.0122,
  "description": "Stolica Polski."
}
```


