
# Dokumentacja Ulubionych Użytkownika

## Wstęp

W tym rozdziale omówiono proces obsługi ulubionych atrakcji w aplikacji `czas-na-wypad`. Moduł ten pozwala użytkownikom na zarządzanie listą ulubionych atrakcji turystycznych.

## Klasa `AttractionFavouriteController`

**Opis:**  
Klasa odpowiedzialna za obsługę żądań HTTP związanych z ulubionymi atrakcjami.

### Endpointy

#### `GET /favourites/{userId}`

**Opis:**  
Zwraca listę ulubionych atrakcji dla użytkownika o podanym identyfikatorze.

**Parametry ścieżki:**

| Nazwa    | Typ     | Wymagane | Opis                              |
|----------|---------|----------|-----------------------------------|
| `userId` | Integer | Tak       | Identyfikator użytkownika.        |

**Przykład zapytania:**
```http
GET /favourites/1
```

**Przykład odpowiedzi:**
```json
[
  {
    "id": 1,
    "attractionId": 101,
    "userId": 1
  },
  {
    "id": 2,
    "attractionId": 102,
    "userId": 1
  }
]
```

---

#### `POST /favourites`

**Opis:**  
Dodaje nową atrakcję do listy ulubionych dla użytkownika.

**Body żądania:**

| Nazwa         | Typ     | Wymagane | Opis                              |
|---------------|---------|----------|-----------------------------------|
| `attractionId`| Integer | Tak       | Identyfikator atrakcji.           |
| `userId`      | Integer | Tak       | Identyfikator użytkownika.        |

**Przykład zapytania:**
```http
POST /favourites
Content-Type: application/json

{
  "attractionId": 101,
  "userId": 1
}
```

**Przykład odpowiedzi:**
```json
{
  "id": 3,
  "attractionId": 101,
  "userId": 1
}
```

**Błędy:**

| Kod HTTP | Opis                                      |
|----------|-------------------------------------------|
| `400`    | Nieprawidłowe dane wejściowe.             |
| `404`    | Użytkownik lub atrakcja nie istnieje.       |

---

## Klasa `FavouriteAttractionService`

**Opis:**  
Klasa zawierająca logikę biznesową dotyczącą obsługi ulubionych atrakcji.

### Metody

#### `List<FavouriteAttractionDTO> getFavouritesByUser(Integer userId)`

**Opis:**  
Zwraca listę ulubionych atrakcji dla użytkownika o podanym identyfikatorze.

**Parametry:**

| Nazwa    | Typ     | Wymagane | Opis                              |
|----------|---------|----------|-----------------------------------|
| `userId` | Integer | Tak       | Identyfikator użytkownika.        |

**Zwraca:**  
`List<FavouriteAttractionDTO>` - Lista ulubionych atrakcji.

---

#### `FavouriteAttractionDTO addFavourite(CreateFavouriteAttractionDTO dto)`

**Opis:**  
Dodaje nową atrakcję do listy ulubionych.

**Parametry:**

| Nazwa    | Typ                           | Wymagane | Opis                        |
|----------|-------------------------------|----------|-----------------------------|
| `dto`    | CreateFavouriteAttractionDTO  | Tak       | Obiekt DTO zawierający dane |

**Zwraca:**  
`FavouriteAttractionDTO` - Szczegóły dodanej atrakcji.

---

## Klasa `FavouriteAttractionDTOMapper`

**Opis:**  
Mapper odpowiedzialny za przekształcenie encji `FavouriteAttraction` na DTO oraz odwrotnie.

### Metody

#### `FavouriteAttractionDTO toDto(FavouriteAttraction fav)`

**Opis:**  
Mapuje encję `FavouriteAttraction` na obiekt DTO.

**Parametry:**

| Nazwa    | Typ                  | Wymagane | Opis                            |
|----------|----------------------|----------|---------------------------------|
| `fav`    | FavouriteAttraction  | Tak       | Obiekt encji ulubionej atrakcji |

**Zwraca:**  
`FavouriteAttractionDTO` - Obiekt DTO.

#### `List<FavouriteAttractionDTO> toDtoList(List<FavouriteAttraction> fav)`

**Opis:**  
Mapuje listę encji `FavouriteAttraction` na listę DTO.

**Parametry:**

| Nazwa    | Typ                     | Wymagane | Opis                            |
|----------|-------------------------|----------|---------------------------------|
| `fav`    | `List<FavouriteAttraction>` | Tak       | Lista encji ulubionych atrakcji |

**Zwraca:**  
`List<FavouriteAttractionDTO>` - Lista obiektów DTO.

---

## Klasa `FavouriteAttractionRepository`

**Opis:**  
Repozytorium odpowiedzialne za komunikację z bazą danych dla obiektów `FavouriteAttraction`.

### Metody

#### `List<FavouriteAttraction> findByUserId(Integer userId)`

**Opis:**  
Zwraca listę ulubionych atrakcji dla użytkownika o podanym identyfikatorze.

**Parametry:**

| Nazwa    | Typ     | Wymagane | Opis                              |
|----------|---------|----------|-----------------------------------|
| `userId` | Integer | Tak       | Identyfikator użytkownika.        |

**Zwraca:**  
`List<FavouriteAttraction>` - Lista ulubionych atrakcji.

#### `List<FavouriteAttraction> findByAttractionId(Integer attractionId)`

**Opis:**  
Zwraca listę ulubionych dla konkretnej atrakcji.

**Parametry:**

| Nazwa          | Typ     | Wymagane | Opis                           |
|----------------|---------|----------|--------------------------------|
| `attractionId` | Integer | Tak       | Identyfikator atrakcji.        |

**Zwraca:**  
`List<FavouriteAttraction>` - Lista ulubionych dla danej atrakcji.

---

## Modele danych

### `FavouriteAttractionDTO`

**Opis:**  
DTO zawierające dane ulubionej atrakcji.

| Nazwa         | Typ     | Opis                          |
|---------------|---------|-------------------------------|
| `id`          | Integer | Identyfikator ulubionej.       |
| `attractionId`| Integer | Identyfikator atrakcji.        |
| `userId`      | Integer | Identyfikator użytkownika.    |

### `CreateFavouriteAttractionDTO`

**Opis:**  
DTO zawierające dane do utworzenia ulubionej atrakcji.

| Nazwa         | Typ     | Wymagane | Opis                           |
|---------------|---------|----------|--------------------------------|
| `attractionId`| Integer | Tak       | Identyfikator atrakcji.        |
| `userId`      | Integer | Tak       | Identyfikator użytkownika.    |

