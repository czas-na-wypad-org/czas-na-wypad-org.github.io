---
sidebar_position: 1
---
# O projekcie

Projekt **czas-na-wypad** jest projektem stworzonym w ramach zajęć z przedmiotu Aplikacje Wielowarstwowe na uczelni SGGW. Projektem jest aplikacja webowa umożliwiająca użytkownikom wyszukiwanie i interakcję z lokalnymi atrakcjami. Aplikacja jest zbudowana w architekturze wielowarstwowej i ma na celu ułatwienie planowania czasu wolnego poprzez dostarczenie intuicyjnych funkcji wyszukiwania, rezerwacji, ulubionych oraz oceny atrakcji.

## Funkcje aplikacji

### Podstawowe funkcje

1. **Rejestracja i logowanie**  
   Użytkownicy mogą zakładać konta, logować się do aplikacji, a także zarządzać swoimi danymi. Bezpieczeństwo haseł zapewnia algorytm hashujący BCrypt, natomiast sesje użytkowników obsługiwane są przez tokeny JWT.

2. **Wyszukiwanie atrakcji**  
   Aplikacja umożliwia wyszukiwanie atrakcji w oparciu o lokalizację użytkownika oraz zastosowane filtry, takie jak typ atrakcji, godziny otwarcia i oceny użytkowników. Wyniki mogą być sortowane według ocen, popularności oraz odległości.

3. **Filtrowanie i sortowanie wyników**  
   Użytkownicy mogą dostosowywać wyniki wyszukiwania do swoich preferencji, zawężając je według wybranych kryteriów, takich jak typ atrakcji, oceny, godziny otwarcia lub cena.

4. **Ulubione**  
   Funkcja umożliwia dodanie atrakcji do listy ulubionych, co pozwala użytkownikom na szybki dostęp do najczęściej odwiedzanych miejsc, dostępnych z poziomu ich profilu.

### Dodatkowe funkcje

1. **Rezerwacja biletów**  
   Użytkownicy mogą rezerwować bilety na wybrane atrakcje. Informacje o rezerwacjach są przechowywane w profilu użytkownika, a proces rezerwacji jest zintegrowany z zewnętrznymi systemami rezerwacyjnymi.

2. **Mapa z pinezkami**  
   Aplikacja oferuje interaktywną mapę, na której wyświetlane są lokalizacje atrakcji. Kliknięcie na pinezkę umożliwia użytkownikowi przegląd szczegółowych informacji o danej atrakcji.

3. **Opinie i oceny**  
   Użytkownicy mogą oceniać i dodawać opinie o atrakcjach. Opinie są wyświetlane przy każdej atrakcji, co pomaga innym użytkownikom w wyborze miejsca do odwiedzenia.

## Architektura wielowarstwowa

Aplikacja `czas-na-wypad` została zaprojektowana w architekturze wielowarstwowej, co ułatwia zarządzanie kodem, testowanie i skalowanie aplikacji.

1. **Warstwa prezentacji (frontend)**  
   Frontend aplikacji jest zbudowany z wykorzystaniem ReactJS. Użytkownicy mają dostęp do stron rejestracji, logowania, wyszukiwania atrakcji, szczegółów atrakcji, ulubionych i profilu. Komunikacja z backendem odbywa się za pomocą REST API.

2. **Warstwa logiki biznesowej (backend)**  
   Backend aplikacji został zrealizowany w języku Java przy użyciu Spring Boot. Odpowiada za zarządzanie użytkownikami, sesjami (JWT), wyszukiwanie atrakcji i rezerwacje. Dane dotyczące opinii i ocen również są zarządzane przez tę warstwę.

3. **Warstwa danych (baza danych)**  
   Dane aplikacji są przechowywane w relacyjnej bazie danych (np. PostgreSQL lub MySQL). Zawiera tabele przechowujące informacje o użytkownikach, atrakcjach, rezerwacjach, opiniach i ulubionych miejscach, co umożliwia skuteczne zarządzanie relacjami między tymi danymi.

## Zagadnienia techniczne

1. **Hashowanie haseł**  
   Bezpieczeństwo haseł jest zapewniane przez algorytm BCrypt, który zapobiega przechowywaniu haseł w postaci tekstowej.

2. **Autoryzacja i sesje**  
   Sesje użytkowników są zarządzane przy użyciu JWT (JSON Web Tokens), co umożliwia bezpieczne zarządzanie dostępem do chronionych zasobów.

3. **Komunikacja frontend-backend**  
   Komunikacja między frontendem a backendem odbywa się za pośrednictwem REST API, co umożliwia wymianę danych i zapewnia wydajność aplikacji.

4. **Zarządzanie bazą danych**  
   Relacyjne tabele przechowują dane o użytkownikach, atrakcjach, rezerwacjach i opiniach. Struktura bazy danych została zoptymalizowana pod kątem wydajności zapytań i łatwości zarządzania danymi.
