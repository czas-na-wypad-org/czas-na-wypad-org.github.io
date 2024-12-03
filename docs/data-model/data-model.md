# Dokumentacja Modelu Bazy Danych

## Wstęp

W tym dokumencie omówiono strukturę modelu bazy danych aplikacji `czas-na-wypad`. Jest to relacyjna baza danych oparta na silniku `MySQL`.

## Przegląd Architektury

Powyższy model składa się z następujących głównych tabel:

1. **user** – przechowuje informacje o użytkownikach aplikacji.
2. **attraction** – reprezentuje atrakcje dostępne w systemie.
3. **attraction_ratings** – przechowuje oceny atrakcji wystawiane przez użytkowników.
4. **attraction_favourite** – przechowuje informacje o ulubionych atrakcjach użytkowników.
5. **attraction_reservation** – przechowuje informacje o rezerwacjach atrakcji.
6. **attraction_hour** – określa godziny otwarcia atrakcji.

<!-- Zdjęcie diagramu modelu bazy danych -->
![Diagram Modelu Danych](/img/czasnawypad_baza.png)

---

## Tabele i Modele

### Tabela `user`

Tabela przechowuje dane użytkowników aplikacji.

| Pole         | Typ danych        | Opis                                       |
|--------------|-------------------|--------------------------------------------|
| `id`         | INT (PRIMARY KEY) | Klucz główny, automatycznie inkrementowany.|
| `login`      | VARCHAR(50)       | Nazwa użytkownika (unikalna).              |
| `password`   | VARCHAR(100)      | Hasło użytkownika.                         |
| `name`       | VARCHAR(100)      | Imię użytkownika.                          |
| `surname`    | VARCHAR(200)      | Nazwisko użytkownika.                      |
| `email`      | VARCHAR(320)      | Adres e-mail.                              |
| `photo`      | VARCHAR(500)      | URL zdjęcia użytkownika.                   |
| `is_deleted` | BOOLEAN           | Flaga oznaczająca usunięcie użytkownika.   |

---

### Tabela `attraction`

Tabela reprezentuje atrakcje w systemie.

| Pole               | Typ danych         | Opis                                                   |
|--------------------|--------------------|-------------------------------------------------------|
| `id`               | INT (PRIMARY KEY) | Klucz główny, automatycznie inkrementowany.          |
| `name`             | VARCHAR(200)      | Nazwa atrakcji.                                       |
| `type`             | VARCHAR(100)      | Typ atrakcji (np. muzeum, park).                     |
| `price_level`      | VARCHAR(50)       | Poziom cenowy.                                        |
| `description`      | VARCHAR(5000)     | Opis atrakcji.                                        |
| `post_code`        | VARCHAR(6)        | Kod pocztowy.                                         |
| `city`             | VARCHAR(100)      | Miasto.                                               |
| `street`           | VARCHAR(200)      | Ulica.                                                |
| `building_number`  | VARCHAR(20)       | Numer budynku.                                        |
| `local_number`     | VARCHAR(20)       | Numer lokalu.                                         |
| `localization`     | POINT (SRID 4326) | Lokalizacja przestrzenna.                            |
| `phone`            | VARCHAR(20)       | Numer telefonu.                                       |
| `email`            | VARCHAR(320)      | Adres e-mail.                                         |
| `website`          | VARCHAR(500)      | Strona internetowa.                                   |
| `photo`            | VARCHAR(500)      | URL zdjęcia atrakcji.                                 |
| `is_deleted`       | BOOLEAN           | Flaga oznaczająca usunięcie atrakcji.                |

---

### Tabela `attraction_ratings`

Tabela przechowuje oceny atrakcji wystawiane przez użytkowników.

| Pole         | Typ danych        | Opis                                      |
|--------------|-------------------|-------------------------------------------|
| `id`         | INT (PRIMARY KEY) | Klucz główny, automatycznie inkrementowany.|
| `attraction_id` | INT           | Klucz obcy do tabeli `attraction`.        |
| `user_id`    | INT              | Klucz obcy do tabeli `user`.              |
| `rating`     | TINYINT          | Ocena atrakcji (wartość od 1 do 10).      |
| `notes`      | VARCHAR(5000)    | Uwagi użytkownika.                        |
| `date`       | DATE             | Data wystawienia oceny.                   |

---
### Tabela `attraction_favourite`

Tabela przechowuje informacje o ulubionych atrakcjach użytkowników.

| Pole            | Typ danych        | Opis                                     |
|------------------|-------------------|------------------------------------------|
| `id`            | INT (PRIMARY KEY) | Klucz główny. Automatycznie inkrementowany. |
| `attraction_id` | INT               | Klucz obcy do tabeli `attraction`.       |
| `user_id`       | INT               | Klucz obcy do tabeli `user`.             |

#### Relacje:
- Usunięcie atrakcji powoduje usunięcie powiązanych rekordów (`ON DELETE CASCADE`).
- Usunięcie użytkownika powoduje usunięcie powiązanych rekordów.

---

### Tabela `attraction_reservation`

Tabela przechowuje informacje o rezerwacjach atrakcji.

| Pole              | Typ danych        | Opis                                     |
|--------------------|-------------------|------------------------------------------|
| `id`              | INT (PRIMARY KEY) | Klucz główny. Automatycznie inkrementowany. |
| `user_id`         | INT               | Klucz obcy do tabeli `user`.             |
| `attraction_id`   | INT               | Klucz obcy do tabeli `attraction`.       |
| `hour_from`       | TIME              | Godzina rozpoczęcia rezerwacji.          |
| `hour_to`         | TIME              | Godzina zakończenia rezerwacji.          |
| `date`            | DATE              | Data rezerwacji.                         |
| `price`           | DECIMAL(9,2)      | Cena rezerwacji.                         |
| `payed`           | BOOLEAN           | Status płatności (`TRUE`/`FALSE`).       |
| `number_of_tickets` | INT             | Liczba biletów.                          |

#### Relacje:
- Usunięcie użytkownika lub atrakcji powoduje usunięcie powiązanych rezerwacji (`ON DELETE CASCADE`).

---

### Tabela `attraction_hour`

Tabela określa godziny otwarcia atrakcji.

| Pole            | Typ danych        | Opis                                     |
|------------------|-------------------|------------------------------------------|
| `id`            | INT (PRIMARY KEY) | Klucz główny. Automatycznie inkrementowany. |
| `attraction_id` | INT               | Klucz obcy do tabeli `attraction`.       |
| `hour_from`     | TIME              | Godzina otwarcia atrakcji.               |
| `hour_to`       | TIME              | Godzina zamknięcia atrakcji.             |
| `day_of_week`   | VARCHAR(20)       | Dzień tygodnia (np. Monday, Tuesday).    |

#### Relacje:
- Usunięcie atrakcji powoduje usunięcie powiązanych rekordów (`ON DELETE CASCADE`).

---
### Trigger `after_attraction_insert`

Trigger wstawia automatycznie dni tygodnia do tabeli `attraction_hour` po dodaniu nowej atrakcji.

#### Logika:

Przy dodaniu nowej atrakcji (`INSERT` do tabeli `attraction`), trigger wstawia do tabeli `attraction_hour` rekordy dla każdego dnia tygodnia.
