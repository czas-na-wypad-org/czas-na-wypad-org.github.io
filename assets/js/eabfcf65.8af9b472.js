"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3293],{2912:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"registration/registration-test-scenarios","title":"Scenariusze Testowe dla Rejestracji U\u017cytkownika","description":"| Scenariusz                                                           | Warunki pocz\u0105tkowe                                                | Kroki testowe                                                                                                                                                  | Oczekiwany rezultat                                                                                                                          |","source":"@site/docs/registration/registration-test-scenarios.md","sourceDirName":"registration","slug":"/registration/registration-test-scenarios","permalink":"/docs/registration/registration-test-scenarios","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/registration/registration-test-scenarios.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Dokumentacja Rejestracji U\u017cytkownika","permalink":"/docs/registration/"},"next":{"title":"Create a Page","permalink":"/docs/tutorial-basics/create-a-page"}}');var i=n(4848),r=n(8453);const a={},o="Scenariusze Testowe dla Rejestracji U\u017cytkownika",d={},c=[];function j(e){const s={code:"code",h1:"h1",header:"header",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"scenariusze-testowe-dla-rejestracji-u\u017cytkownika",children:"Scenariusze Testowe dla Rejestracji U\u017cytkownika"})}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Scenariusz"}),(0,i.jsx)(s.th,{children:"Warunki pocz\u0105tkowe"}),(0,i.jsx)(s.th,{children:"Kroki testowe"}),(0,i.jsx)(s.th,{children:"Oczekiwany rezultat"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.strong,{children:"Scenariusz 1:"})," Rejestracja nowego u\u017cytkownika z poprawnymi danymi"]}),(0,i.jsxs)(s.td,{children:["U\u017cytkownik o podanym ",(0,i.jsx)(s.code,{children:"username"})," nie istnieje w bazie danych."]}),(0,i.jsxs)(s.td,{children:["1. Wy\u015blij \u017c\u0105danie POST na endpoint ",(0,i.jsx)(s.code,{children:"/register"})," z danymi: ",(0,i.jsx)(s.code,{children:'{ "username": "nowyuzytkownik", "password": "bezpiecznehaslo123" }'}),"2. Odbierz odpowied\u017a serwera."]}),(0,i.jsxs)(s.td,{children:["- Kod odpowiedzi HTTP 201 (Created).",(0,i.jsx)("br",{}),"- U\u017cytkownik zapisany w bazie z zaszyfrowanym has\u0142em.",(0,i.jsx)("br",{}),"- Brak b\u0142\u0119d\xf3w."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.strong,{children:"Scenariusz 2:"})," Rejestracja u\u017cytkownika z istniej\u0105c\u0105 nazw\u0105"]}),(0,i.jsxs)(s.td,{children:["U\u017cytkownik o nazwie ",(0,i.jsx)(s.code,{children:"nowyuzytkownik"})," istnieje ju\u017c w bazie danych."]}),(0,i.jsxs)(s.td,{children:["1. Wy\u015blij \u017c\u0105danie POST na endpoint ",(0,i.jsx)(s.code,{children:"/register"})," z danymi: ",(0,i.jsx)(s.code,{children:'{ "username": "nowyuzytkownik", "password": "innehaslo123" }'}),"2. Odbierz odpowied\u017a serwera."]}),(0,i.jsxs)(s.td,{children:["- Kod odpowiedzi HTTP 409 (Conflict).",(0,i.jsx)("br",{}),"- Komunikat, \u017ce u\u017cytkownik o podanej nazwie ju\u017c istnieje.",(0,i.jsx)("br",{}),"- U\u017cytkownik nie jest ponownie dodawany do bazy."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.strong,{children:"Scenariusz 3:"})," Rejestracja u\u017cytkownika z pustym polem ",(0,i.jsx)(s.code,{children:"username"})]}),(0,i.jsx)(s.td,{children:"Brak specyficznych warunk\xf3w pocz\u0105tkowych."}),(0,i.jsxs)(s.td,{children:["1. Wy\u015blij \u017c\u0105danie POST na endpoint ",(0,i.jsx)(s.code,{children:"/register"})," z danymi: ",(0,i.jsx)(s.code,{children:'{ "username": "", "password": "haslo123" }'}),"2. Odbierz odpowied\u017a serwera."]}),(0,i.jsxs)(s.td,{children:["- Kod odpowiedzi HTTP 400 (Bad Request).",(0,i.jsx)("br",{}),"- Komunikat b\u0142\u0119du wskazuj\u0105cy, \u017ce pole ",(0,i.jsx)(s.code,{children:"username"})," jest wymagane.",(0,i.jsx)("br",{}),"- U\u017cytkownik nie jest zapisany w bazie."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.strong,{children:"Scenariusz 4:"})," Rejestracja u\u017cytkownika z pustym polem ",(0,i.jsx)(s.code,{children:"password"})]}),(0,i.jsx)(s.td,{children:"Brak specyficznych warunk\xf3w pocz\u0105tkowych."}),(0,i.jsxs)(s.td,{children:["1. Wy\u015blij \u017c\u0105danie POST na endpoint ",(0,i.jsx)(s.code,{children:"/register"})," z danymi: ",(0,i.jsx)(s.code,{children:'{ "username": "uzytkownik", "password": "" }'}),"2. Odbierz odpowied\u017a serwera."]}),(0,i.jsxs)(s.td,{children:["- Kod odpowiedzi HTTP 400 (Bad Request).",(0,i.jsx)("br",{}),"- Komunikat b\u0142\u0119du wskazuj\u0105cy, \u017ce pole ",(0,i.jsx)(s.code,{children:"password"})," jest wymagane.",(0,i.jsx)("br",{}),"- U\u017cytkownik nie jest zapisany w bazie."]})]})]})]})]})}function l(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var t=n(6540);const i={},r=t.createContext(i);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);