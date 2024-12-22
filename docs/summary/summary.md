# Podsumowanie projektu oraz problemów

## CzasNaWypad
Zgodnie z założeniami - CzasNaWypad to aplikacja internetowa służąca jako wyszukiwarka różnego rodzaju atrakcji, dostosowana do preferencji użytkowników. Jej głównym celem jest ułatwienie planowania wyjazdów poprzez umożliwienie użytkownikom wyszukiwania atrakcji w oparciu o ich lokalizację oraz promień wyszukiwania (np. w promieniu 10 km).

### Kluczowe funkcje aplikacji:
1. **Rejestracja i logowanie:**
    - Użytkownicy mogą tworzyć konta, logować się i zarządzać swoimi profilami.
2. **Wyszukiwanie atrakcji:**
    - Możliwość filtrowania atrakcji według różnych kryteriów, takich jak typ atrakcji, lokalizacja i promień wyszukiwania.
3. **Ulubione użytkownika:**
    - Dodawanie atrakcji do listy ulubionych oraz zarządzanie tą listą (dodawanie/usuwanie).
4. **Oceny i komentarze:**
    - Użytkownicy mogą dodawać oceny oraz komentarze do odwiedzonych miejsc.

# Problemy

## Problemy techniczne
### Dodawanie do ulubionych użytkownika
Jednym z głównych problemów technicznych w aplikacji jest niestabilne działanie funkcjonalności dodawania atrakcji do listy ulubionych użytkownika. W momencie gdy zarówno backend jak i frontend uruchomili aplikacje w 100% lokalnie - te problemy zniknęły.

### Opis problemu:
- **Kod HTTP 500:**
    - W niektórych przypadkach dodawanie atrakcji do ulubionych skutkuje błędem serwera (HTTP 500). Problem ten występuje nieregularnie i zależy od aktualnego obciążenia serwera.

- **Przyczyny problemu:**
    - Funkcjonalność aplikacji wykorzystuje chmurowe usługi Azure, które czasami nie radzą sobie z obciążeniem wynikającym z dużej liczby równoczesnych żądań.
    - W szczególności, problem może dotyczyć zarządzania sesjami lub synchronizacji danych w bazie danych, co prowadzi do chwilowych niepowodzeń w przetwarzaniu żądań.

- **Objawy:**
    - W momencie dużego obciążenia serwery zwracają kod błędu 500, sugerując wewnętrzny problem serwera.
    - Po pewnym czasie aplikacja zaczyna działać poprawnie, co sugeruje, że problem jest związany z dynamicznym zarządzaniem zasobami w chmurze Azure.

### Potencjalne rozwiązania:
1. **Optymalizacja kodu:**
    - Ulepszenie sposobu zarządzania danymi użytkownika i listą ulubionych, aby uniknąć błędów w zapytaniach do bazy danych.
2. **Skalowanie zasobów w chmurze:**
    - Zwiększenie dostępnych zasobów chmurowych w celu obsługi większej liczby równoczesnych żądań.
3. **Monitorowanie i analiza logów:**
    - Zastosowanie narzędzi monitorujących do dokładniejszej analizy błędów serwera i identyfikacji miejsc wymagających poprawy.
4. **Implementacja kolejki zadań:**
    - Wprowadzenie mechanizmu kolejkowania żądań, co pozwoli na równomierne rozłożenie obciążenia na serwerze.

### Wnioski:
Problem z dodawaniem atrakcji do ulubionych użytkownika jest istotny, ale możliwy do rozwiązania poprzez zastosowanie odpowiednich praktyk optymalizacyjnych i monitorowania. Poprawa tej funkcjonalności wpłynie na zwiększenie satysfakcji użytkowników i stabilność aplikacji.
