"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3980],{8302:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"login/login","title":"Dokumentacja Logowania U\u017cytkownika","description":"Wst\u0119p","source":"@site/docs/login/login.md","sourceDirName":"login","slug":"/login/","permalink":"/docs/login/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/login/login.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Scenariusze Testowe dla Rejestracji U\u017cytkownika","permalink":"/docs/registration/registration-test-scenarios"},"next":{"title":"Scenariusze Testowe dla Logowania U\u017cytkownika","permalink":"/docs/login/login-test-scenarios"}}');var a=n(4848),r=n(8453);const s={},c="Dokumentacja Logowania U\u017cytkownika",l={},d=[{value:"Wst\u0119p",id:"wst\u0119p",level:2},{value:"Przegl\u0105d Architektury Logowania",id:"przegl\u0105d-architektury-logowania",level:2},{value:"Modele Danych",id:"modele-danych",level:2},{value:"Klasa <code>LoginUserDto</code>",id:"klasa-loginuserdto",level:3},{value:"Klasa <code>SecurityUser</code>",id:"klasa-securityuser",level:3},{value:"Us\u0142ugi Logowania",id:"us\u0142ugi-logowania",level:2},{value:"<code>UserService</code>",id:"userservice",level:3},{value:"<code>TokenService</code>",id:"tokenservice",level:3},{value:"<code>JpaUserDetailsService</code>",id:"jpauserdetailsservice",level:3},{value:"Konfiguracja Zabezpiecze\u0144 Logowania",id:"konfiguracja-zabezpiecze\u0144-logowania",level:2},{value:"<code>SecurityConfig</code>",id:"securityconfig",level:3},{value:"<code>RsaKeyProperties</code>",id:"rsakeyproperties",level:3},{value:"Instrukcja Krok po Kroku",id:"instrukcja-krok-po-kroku",level:2},{value:"Krok 1: Wys\u0142anie \u017b\u0105dania Logowania",id:"krok-1-wys\u0142anie-\u017c\u0105dania-logowania",level:3},{value:"Krok 2: Weryfikacja To\u017csamo\u015bci",id:"krok-2-weryfikacja-to\u017csamo\u015bci",level:3},{value:"Krok 3: Zwr\xf3cenie Tokenu JWT",id:"krok-3-zwr\xf3cenie-tokenu-jwt",level:3}];function t(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"dokumentacja-logowania-u\u017cytkownika",children:"Dokumentacja Logowania U\u017cytkownika"})}),"\n",(0,a.jsx)(i.h2,{id:"wst\u0119p",children:"Wst\u0119p"}),"\n",(0,a.jsxs)(i.p,{children:["W tym rozdziale om\xf3wiono proces logowania u\u017cytkownika w aplikacji ",(0,a.jsx)(i.code,{children:"czas-na-wypad"}),", z uwzgl\u0119dnieniem wykorzystywanych us\u0142ug, metod uwierzytelnienia oraz konfiguracji zabezpiecze\u0144 opartych na tokenach JWT."]}),"\n",(0,a.jsx)(i.h2,{id:"przegl\u0105d-architektury-logowania",children:"Przegl\u0105d Architektury Logowania"}),"\n",(0,a.jsx)(i.p,{children:"Proces logowania u\u017cytkownika obejmuje:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Kontroler"}),": ",(0,a.jsx)(i.code,{children:"UserController"})," odbiera \u017c\u0105dania logowania i przekazuje je do odpowiednich us\u0142ug."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Serwis"}),": ",(0,a.jsx)(i.code,{children:"UserService"})," zarz\u0105dza logik\u0105 logowania, weryfikacj\u0105 to\u017csamo\u015bci u\u017cytkownika oraz generowaniem tokenu."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"TokenService"}),": odpowiada za generowanie token\xf3w JWT na podstawie danych u\u017cytkownika."]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"modele-danych",children:"Modele Danych"}),"\n",(0,a.jsxs)(i.h3,{id:"klasa-loginuserdto",children:["Klasa ",(0,a.jsx)(i.code,{children:"LoginUserDto"})]}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"LoginUserDto"})," to obiekt transferowy, kt\xf3ry przechowuje dane logowania przes\u0142ane przez klienta, zawieraj\u0105c:"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"username"})," - nazwa u\u017cytkownika"]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"password"})," - has\u0142o u\u017cytkownika"]}),"\n"]}),"\n",(0,a.jsxs)(i.h3,{id:"klasa-securityuser",children:["Klasa ",(0,a.jsx)(i.code,{children:"SecurityUser"})]}),"\n",(0,a.jsxs)(i.p,{children:["Klasa ",(0,a.jsx)(i.code,{children:"SecurityUser"})," rozszerza model u\u017cytkownika, dostosowuj\u0105c go do wymaga\u0144 Spring Security, co umo\u017cliwia bezpieczne uwierzytelnienie u\u017cytkownika."]}),"\n",(0,a.jsx)(i.h2,{id:"us\u0142ugi-logowania",children:"Us\u0142ugi Logowania"}),"\n",(0,a.jsx)(i.h3,{id:"userservice",children:(0,a.jsx)(i.code,{children:"UserService"})}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"UserService"})," obs\u0142uguje logik\u0119 logowania:"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Weryfikuje poprawno\u015b\u0107 nazwy u\u017cytkownika i has\u0142a."}),"\n",(0,a.jsx)(i.li,{children:"Generuje token JWT przy pomy\u015blnej weryfikacji."}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"tokenservice",children:(0,a.jsx)(i.code,{children:"TokenService"})}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"TokenService"})," generuje i obs\u0142uguje token JWT, kt\xf3ry jest zwracany u\u017cytkownikowi po poprawnym zalogowaniu."]}),"\n",(0,a.jsx)(i.h3,{id:"jpauserdetailsservice",children:(0,a.jsx)(i.code,{children:"JpaUserDetailsService"})}),"\n",(0,a.jsxs)(i.p,{children:["Implementacja ",(0,a.jsx)(i.code,{children:"UserDetailsService"})," dla integracji z Spring Security, kt\xf3ra pobiera u\u017cytkownika z bazy danych na podstawie jego nazwy u\u017cytkownika."]}),"\n",(0,a.jsx)(i.h2,{id:"konfiguracja-zabezpiecze\u0144-logowania",children:"Konfiguracja Zabezpiecze\u0144 Logowania"}),"\n",(0,a.jsx)(i.h3,{id:"securityconfig",children:(0,a.jsx)(i.code,{children:"SecurityConfig"})}),"\n",(0,a.jsxs)(i.p,{children:["Konfiguracja ",(0,a.jsx)(i.code,{children:"SecurityConfig"})," obejmuje:"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Autoryzacj\u0119 dost\u0119pu do zasob\xf3w chronionych."}),"\n",(0,a.jsx)(i.li,{children:"Filtrowanie \u017c\u0105da\u0144 HTTP, by umo\u017cliwi\u0107 logowanie oraz autoryzacj\u0119 przy u\u017cyciu token\xf3w JWT."}),"\n",(0,a.jsxs)(i.li,{children:["Integracj\u0119 ",(0,a.jsx)(i.code,{children:"JwtAuthenticationFilter"}),", kt\xf3ry przechwytywany token w nag\u0142\xf3wku HTTP."]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"rsakeyproperties",children:(0,a.jsx)(i.code,{children:"RsaKeyProperties"})}),"\n",(0,a.jsx)(i.p,{children:"Klasa ta zarz\u0105dza kluczami RSA, kt\xf3re s\u0105 u\u017cywane do podpisywania i weryfikacji token\xf3w JWT w procesie logowania."}),"\n",(0,a.jsx)(i.h2,{id:"instrukcja-krok-po-kroku",children:"Instrukcja Krok po Kroku"}),"\n",(0,a.jsx)(i.h3,{id:"krok-1-wys\u0142anie-\u017c\u0105dania-logowania",children:"Krok 1: Wys\u0142anie \u017b\u0105dania Logowania"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:["Klient wysy\u0142a \u017c\u0105danie POST na endpoint ",(0,a.jsx)(i.code,{children:"/login"}),", zawieraj\u0105ce ",(0,a.jsx)(i.code,{children:"username"})," oraz ",(0,a.jsx)(i.code,{children:"password"})," w tre\u015bci \u017c\u0105dania."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"UserController"})," odbiera \u017c\u0105danie i przekazuje je do ",(0,a.jsx)(i.code,{children:"UserService"}),"."]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"krok-2-weryfikacja-to\u017csamo\u015bci",children:"Krok 2: Weryfikacja To\u017csamo\u015bci"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.code,{children:"UserService"})," weryfikuje poprawno\u015b\u0107 danych logowania."]}),"\n",(0,a.jsx)(i.li,{children:"Je\u015bli dane s\u0105 prawid\u0142owe, generowany jest token JWT."}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"krok-3-zwr\xf3cenie-tokenu-jwt",children:"Krok 3: Zwr\xf3cenie Tokenu JWT"}),"\n",(0,a.jsx)(i.p,{children:"Token JWT jest zwracany do klienta, kt\xf3ry przechowuje go lokalnie (np. w pami\u0119ci lokalnej przegl\u0105darki) i u\u017cywa do uwierzytelnienia w przysz\u0142ych \u017c\u0105daniach.\r\nchcesz rozwin\u0105\u0107 szczeg\xf3\u0142y poszczeg\xf3lnych krok\xf3w lub doda\u0107 specyficzne informacje, mog\u0119 dostosowa\u0107 dokumentacj\u0119, aby by\u0142a bardziej szczeg\xf3\u0142owa lub uwzgl\u0119dnia\u0142a dodatkowe aspekty techniczne."})]})}function u(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>c});var o=n(6540);const a={},r=o.createContext(a);function s(e){const i=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:i},e.children)}}}]);