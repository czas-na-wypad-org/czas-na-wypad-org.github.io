---
sidebar_position: 3
---

# Dokumentacja Filtrowanie i Sortowanie Wyników

Filtrowanie i sortowanie wyników w aplikacji **czas-na-wypad** umożliwia użytkownikom personalizację wyników wyszukiwania zgodnie z ich preferencjami. Dzięki temu użytkownicy mogą łatwo znaleźć najciekawsze atrakcje odpowiadające ich wymaganiom.

## Funkcjonalność

### **Filtrowanie wyników**
Użytkownik może zawęzić wyniki wyszukiwania poprzez zastosowanie następujących filtrów:
- **Kategoria**: Wybór rodzaju atrakcji (np. muzea, parki, wydarzenia).
- **Miejscowość**: Wybór miasta, w którym znajdują się atrakcje.
- **W promieniu**: Ograniczenie wyników do atrakcji znajdujących się w określonej odległości od użytkownika (w kilometrach).
- **Data**: Wybór konkretnej daty odwiedzin.
- **Godzina otwarcia**: Wyświetlanie atrakcji otwartych od wybranego czasu.
- **Godzina zamknięcia**: Wyświetlanie atrakcji otwartych do określonego czasu.
- **Najniższa cena**: Minimalna cena atrakcji.
- **Najwyższa cena**: Maksymalna cena atrakcji.
- **Ocena**: Wyświetlanie atrakcji z określoną minimalną oceną użytkowników.
- **Liczba uczestników**: Wybór atrakcji, które obsługują określoną liczbę uczestników.

### **Sortowanie wyników**
Dane mogą być sortowane według następujących kryteriów:
- **Popularność**: Najczęściej odwiedzane atrakcje.
- **Oceny**: Najwyżej oceniane atrakcje.
- **Odległość**: Atrakcje najbliższe lokalizacji użytkownika.
- **Cena**: Wzrostowo lub malejąco w zależności od preferencji użytkownika.

## Scenariusze Użycia

1. **Filtrowanie według kategorii i miejscowości**  
   Użytkownik wybiera kategorię „Muzea” i miejscowość „Warszawa”, aby przeglądać atrakcje spełniające te kryteria.

2. **Sortowanie według ocen**  
   Lista wyników jest uporządkowana od najwyżej ocenianych atrakcji do najniżej ocenianych.

3. **Łączenie filtrów i sortowania**  
   Użytkownik wybiera atrakcje dostępne w określonym promieniu 10 km, otwarte od 10:00 do 18:00, i sortuje wyniki według popularności.

## Przykłady

### **Filtrowanie w kodzie**
Filtrowanie wyników na podstawie kategorii, miejscowości i oceny:
```javascript
function filterResults(data, filters) {
    return data.filter(item => 
        item.category === filters.category &&
        item.city === filters.city &&
        item.rating >= filters.minRating
    );
}
