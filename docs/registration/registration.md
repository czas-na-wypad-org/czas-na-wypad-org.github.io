# Dokumentacja Rejestracji Użytkownika

## Wstęp

Ten dokument opisuje proces rejestracji użytkownika w aplikacji `czas-na-wypad`, wykorzystujący autoryzację, serwisy użytkownika, oraz konfigurację zabezpieczeń. Proces rejestracji obejmuje tworzenie konta oraz generowanie tokenu uwierzytelniającego.

## Przegląd Architektury

Przegląd procesu rejestracji użytkownika obejmuje:

- **Kontrolery**: `UserController` odpowiada za zarządzanie żądaniami HTTP związanymi z rejestracją.
- **Serwisy**: `UserService`, `TokenService` obsługują logikę biznesową.
- **Repozytoria**: `UserRepository`, `SqlUserRepository` obsługują dostęp do bazy danych.
- **Konfiguracja Bezpieczeństwa**: `SecurityConfig`, `RsaKeyProperties` zarządzają konfiguracją uwierzytelnienia i tokenów.

## Modele Danych

### Klasa `User`

Klasa `User` reprezentuje użytkownika aplikacji, zawierając pola takie jak:
- **ID** - unikalny identyfikator
- **username** - nazwa użytkownika
- **password** - zaszyfrowane hasło
- **roles** - role przypisane użytkownikowi

### Klasa `SecurityUser`

`SecurityUser` to klasa opakowująca `User`, dostosowując jego właściwości do wymagań Spring Security.

## Usługi Rejestracji i Logowania

### `UserService`

`UserService` zarządza logiką rejestracji, tworzeniem użytkownika oraz sprawdzaniem jego poprawności. Implementuje metody do zapisywania użytkownika i walidacji danych.

### `TokenService`

`TokenService` zajmuje się generowaniem i zarządzaniem tokenami JWT dla uwierzytelnienia użytkownika.

### `JpaUserDetailsService`

Klasa implementująca interfejs `UserDetailsService`, która dostarcza szczegóły dotyczące użytkownika na podstawie danych zapisanych w bazie.

## Konfiguracja Zabezpieczeń

### `SecurityConfig`

Konfiguracja klasy `SecurityConfig` obejmuje:
- Ustawienia zabezpieczeń Spring Security.
- Implementację filtrowania żądań HTTP.
- Integrację tokenów JWT i `RsaKeyProperties` dla uwierzytelnienia.

### `RsaKeyProperties`

Plik konfiguracyjny zarządzający kluczami RSA, które są wykorzystywane do podpisywania tokenów JWT.

## Instrukcja Krok po Kroku

### Krok 1: Utworzenie Konta Użytkownika

1. Klient wysyła żądanie POST na endpoint `/register`, zawierające dane nowego użytkownika (np. `username` i `password`).
2. `UserController` odbiera żądanie i przekazuje je do `UserService`.
3. `UserService` sprawdza, czy użytkownik o podanej nazwie już istnieje i w razie potrzeby tworzy nowy rekord w bazie danych.

### Krok 2: Zabezpieczenie Hasła

- Hasło użytkownika jest haszowane przed zapisaniem w bazie przy użyciu BCryptPasswordEncoder, co zapewnia dodatkową warstwę zabezpieczeń.

### Krok 3: Generowanie Tokenu JWT

1. Po zakończeniu rejestracji `TokenService` generuje token JWT dla nowego użytkownika.
2. Token ten jest zwracany do klienta, umożliwiając użytkownikowi autoryzację bez ponownego logowania.