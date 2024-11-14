# Dokumentacja Logowania Użytkownika

## Wstęp

W tym rozdziale omówiono proces logowania użytkownika w aplikacji `czas-na-wypad`, z uwzględnieniem wykorzystywanych usług, metod uwierzytelnienia oraz konfiguracji zabezpieczeń opartych na tokenach JWT.

## Przegląd Architektury Logowania

Proces logowania użytkownika obejmuje:

- **Kontroler**: `UserController` odbiera żądania logowania i przekazuje je do odpowiednich usług.
- **Serwis**: `UserService` zarządza logiką logowania, weryfikacją tożsamości użytkownika oraz generowaniem tokenu.
- **TokenService**: odpowiada za generowanie tokenów JWT na podstawie danych użytkownika.

## Modele Danych

### Klasa `LoginUserDto`

`LoginUserDto` to obiekt transferowy, który przechowuje dane logowania przesłane przez klienta, zawierając:
- **username** - nazwa użytkownika
- **password** - hasło użytkownika

### Klasa `SecurityUser`

Klasa `SecurityUser` rozszerza model użytkownika, dostosowując go do wymagań Spring Security, co umożliwia bezpieczne uwierzytelnienie użytkownika.

## Usługi Logowania

### `UserService`

`UserService` obsługuje logikę logowania:
- Weryfikuje poprawność nazwy użytkownika i hasła.
- Generuje token JWT przy pomyślnej weryfikacji.

### `TokenService`

`TokenService` generuje i obsługuje token JWT, który jest zwracany użytkownikowi po poprawnym zalogowaniu.

### `JpaUserDetailsService`

Implementacja `UserDetailsService` dla integracji z Spring Security, która pobiera użytkownika z bazy danych na podstawie jego nazwy użytkownika.

## Konfiguracja Zabezpieczeń Logowania

### `SecurityConfig`

Konfiguracja `SecurityConfig` obejmuje:

- Autoryzację dostępu do zasobów chronionych.
- Filtrowanie żądań HTTP, by umożliwić logowanie oraz autoryzację przy użyciu tokenów JWT.
- Integrację `JwtAuthenticationFilter`, który przechwytywany token w nagłówku HTTP.

### `RsaKeyProperties`

Klasa ta zarządza kluczami RSA, które są używane do podpisywania i weryfikacji tokenów JWT w procesie logowania.

## Instrukcja Krok po Kroku

### Krok 1: Wysłanie Żądania Logowania

1. Klient wysyła żądanie POST na endpoint `/login`, zawierające `username` oraz `password` w treści żądania.
2. `UserController` odbiera żądanie i przekazuje je do `UserService`.

### Krok 2: Weryfikacja Tożsamości

1. `UserService` weryfikuje poprawność danych logowania.
2. Jeśli dane są prawidłowe, generowany jest token JWT.

### Krok 3: Zwrócenie Tokenu JWT

Token JWT jest zwracany do klienta, który przechowuje go lokalnie (np. w pamięci lokalnej przeglądarki) i używa do uwierzytelnienia w przyszłych żądaniach.
chcesz rozwinąć szczegóły poszczególnych kroków lub dodać specyficzne informacje, mogę dostosować dokumentację, aby była bardziej szczegółowa lub uwzględniała dodatkowe aspekty techniczne.