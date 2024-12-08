"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3552],{2085:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"favourites/favourites-test-scenarios","title":"Scenariusze Testowe dla Ulubionych U\u017cytkownika","description":"| Scenariusz                                                        | Warunki pocz\u0105tkowe                                                | Kroki testowe                                                                                                                                         | Oczekiwany rezultat                                                                                                             |","source":"@site/docs/favourites/favourites-test-scenarios.md","sourceDirName":"favourites","slug":"/favourites/favourites-test-scenarios","permalink":"/docs/favourites/favourites-test-scenarios","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/favourites/favourites-test-scenarios.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Dokumentacja Ulubionych U\u017cytkownika","permalink":"/docs/favourites/"}}');var t=s(4848),d=s(8453);const r={},o="Scenariusze Testowe dla Ulubionych U\u017cytkownika",a={},c=[];function j(e){const i={code:"code",h1:"h1",header:"header",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"scenariusze-testowe-dla-ulubionych-u\u017cytkownika",children:"Scenariusze Testowe dla Ulubionych U\u017cytkownika"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Scenariusz"}),(0,t.jsx)(i.th,{children:"Warunki pocz\u0105tkowe"}),(0,t.jsx)(i.th,{children:"Kroki testowe"}),(0,t.jsx)(i.th,{children:"Oczekiwany rezultat"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"Scenariusz 1:"})," Dodanie atrakcji do ulubionych"]}),(0,t.jsxs)(i.td,{children:["U\u017cytkownik ",(0,t.jsx)(i.code,{children:"testuser"})," jest zalogowany, a atrakcja o ",(0,t.jsx)(i.code,{children:"id=1"})," istnieje w bazie danych."]}),(0,t.jsxs)(i.td,{children:["1. Wy\u015blij \u017c\u0105danie POST na endpoint ",(0,t.jsx)(i.code,{children:"/favorites"})," z danymi: ",(0,t.jsx)(i.code,{children:'{ "attraction_id": 1 }'}),".",(0,t.jsx)("br",{}),"2. Odbierz odpowied\u017a serwera."]}),(0,t.jsxs)(i.td,{children:["- Kod odpowiedzi HTTP 200 (OK).",(0,t.jsx)("br",{}),"- Atrakcji przypisanej do u\u017cytkownika dodano do ulubionych.",(0,t.jsx)("br",{}),"- Rekord widoczny w tabeli ",(0,t.jsx)(i.code,{children:"attraction_favourite"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"Scenariusz 2:"})," Dodanie tej samej atrakcji do ulubionych ponownie"]}),(0,t.jsxs)(i.td,{children:["U\u017cytkownik ",(0,t.jsx)(i.code,{children:"testuser"})," jest zalogowany, a atrakcja o ",(0,t.jsx)(i.code,{children:"id=1"})," ju\u017c znajduje si\u0119 w ulubionych."]}),(0,t.jsxs)(i.td,{children:["1. Wy\u015blij \u017c\u0105danie POST na endpoint ",(0,t.jsx)(i.code,{children:"/favorites"})," z danymi: ",(0,t.jsx)(i.code,{children:'{ "attraction_id": 1 }'}),".",(0,t.jsx)("br",{}),"2. Odbierz odpowied\u017a serwera."]}),(0,t.jsxs)(i.td,{children:["- Kod odpowiedzi HTTP 400 (Bad Request).",(0,t.jsx)("br",{}),"- Komunikat b\u0142\u0119du wskazuj\u0105cy, \u017ce atrakcja ju\u017c znajduje si\u0119 w ulubionych."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"Scenariusz 3:"})," Usuni\u0119cie atrakcji z ulubionych"]}),(0,t.jsxs)(i.td,{children:["U\u017cytkownik ",(0,t.jsx)(i.code,{children:"testuser"})," jest zalogowany, a atrakcja o ",(0,t.jsx)(i.code,{children:"id=1"})," znajduje si\u0119 w ulubionych."]}),(0,t.jsxs)(i.td,{children:["1. Wy\u015blij \u017c\u0105danie DELETE na endpoint ",(0,t.jsx)(i.code,{children:"/favorites/1"}),".",(0,t.jsx)("br",{}),"2. Odbierz odpowied\u017a serwera."]}),(0,t.jsxs)(i.td,{children:["- Kod odpowiedzi HTTP 200 (OK).",(0,t.jsx)("br",{}),"- Atrakcji przypisanej do u\u017cytkownika usuni\u0119to z ulubionych.",(0,t.jsx)("br",{}),"- Rekord usuni\u0119ty z tabeli ",(0,t.jsx)(i.code,{children:"attraction_favourite"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"Scenariusz 4:"})," Usuni\u0119cie atrakcji, kt\xf3ra nie znajduje si\u0119 w ulubionych"]}),(0,t.jsxs)(i.td,{children:["U\u017cytkownik ",(0,t.jsx)(i.code,{children:"testuser"})," jest zalogowany, ale atrakcja o ",(0,t.jsx)(i.code,{children:"id=2"})," nie znajduje si\u0119 w ulubionych."]}),(0,t.jsxs)(i.td,{children:["1. Wy\u015blij \u017c\u0105danie DELETE na endpoint ",(0,t.jsx)(i.code,{children:"/favorites/2"}),".",(0,t.jsx)("br",{}),"2. Odbierz odpowied\u017a serwera."]}),(0,t.jsxs)(i.td,{children:["- Kod odpowiedzi HTTP 404 (Not Found).",(0,t.jsx)("br",{}),"- Komunikat b\u0142\u0119du wskazuj\u0105cy, \u017ce atrakcja nie znajduje si\u0119 w ulubionych."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"Scenariusz 5:"})," Wy\u015bwietlenie listy ulubionych atrakcji"]}),(0,t.jsxs)(i.td,{children:["U\u017cytkownik ",(0,t.jsx)(i.code,{children:"testuser"})," jest zalogowany, a w ulubionych znajduj\u0105 si\u0119 atrakcje o ",(0,t.jsx)(i.code,{children:"id=1"})," i ",(0,t.jsx)(i.code,{children:"id=3"}),"."]}),(0,t.jsxs)(i.td,{children:["1. Wy\u015blij \u017c\u0105danie GET na endpoint ",(0,t.jsx)(i.code,{children:"/favorites"}),".",(0,t.jsx)("br",{}),"2. Odbierz odpowied\u017a serwera."]}),(0,t.jsxs)(i.td,{children:["- Kod odpowiedzi HTTP 200 (OK).",(0,t.jsx)("br",{}),"- Lista ulubionych atrakcji zawiera atrakcje o ",(0,t.jsx)(i.code,{children:"id=1"})," i ",(0,t.jsx)(i.code,{children:"id=3"}),".",(0,t.jsx)("br",{}),"- Dane s\u0105 zgodne z tabel\u0105 ",(0,t.jsx)(i.code,{children:"attraction_favourite"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"Scenariusz 6:"})," Dodanie atrakcji do ulubionych bez zalogowania"]}),(0,t.jsxs)(i.td,{children:["U\u017cytkownik ",(0,t.jsx)(i.code,{children:"testuser"})," nie jest zalogowany."]}),(0,t.jsxs)(i.td,{children:["1. Wy\u015blij \u017c\u0105danie POST na endpoint ",(0,t.jsx)(i.code,{children:"/favorites"})," z danymi: ",(0,t.jsx)(i.code,{children:'{ "attraction_id": 1 }'}),".",(0,t.jsx)("br",{}),"2. Odbierz odpowied\u017a serwera."]}),(0,t.jsxs)(i.td,{children:["- Kod odpowiedzi HTTP 401 (Unauthorized).",(0,t.jsx)("br",{}),"- Komunikat b\u0142\u0119du wskazuj\u0105cy na brak uprawnie\u0144 do wykonania operacji."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"Scenariusz 7:"})," Usuni\u0119cie atrakcji z ulubionych bez zalogowania"]}),(0,t.jsxs)(i.td,{children:["U\u017cytkownik ",(0,t.jsx)(i.code,{children:"testuser"})," nie jest zalogowany."]}),(0,t.jsxs)(i.td,{children:["1. Wy\u015blij \u017c\u0105danie DELETE na endpoint ",(0,t.jsx)(i.code,{children:"/favorites/1"}),".",(0,t.jsx)("br",{}),"2. Odbierz odpowied\u017a serwera."]}),(0,t.jsxs)(i.td,{children:["- Kod odpowiedzi HTTP 401 (Unauthorized).",(0,t.jsx)("br",{}),"- Komunikat b\u0142\u0119du wskazuj\u0105cy na brak uprawnie\u0144 do wykonania operacji."]})]})]})]})]})}function l(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>r,x:()=>o});var n=s(6540);const t={},d=n.createContext(t);function r(e){const i=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(d.Provider,{value:i},e.children)}}}]);