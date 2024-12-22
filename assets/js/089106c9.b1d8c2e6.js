"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2439],{4677:(i,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>j,frontMatter:()=>s,metadata:()=>l,toc:()=>r});const l=JSON.parse('{"id":"location/location","title":"Dokumentacja Pobierania Lokalizacji","description":"Wst\u0119p","source":"@site/docs/location/location.md","sourceDirName":"location","slug":"/location/","permalink":"/docs/location/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var a=e(4848),o=e(8453);const s={},d="Dokumentacja Pobierania Lokalizacji",c={},r=[{value:"Wst\u0119p",id:"wst\u0119p",level:2},{value:"Klasa <code>LocationController</code>",id:"klasa-locationcontroller",level:2},{value:"Endpointy",id:"endpointy",level:3},{value:"<code>GET /api/locations</code>",id:"get-apilocations",level:4},{value:"<code>GET /api/locations/{id}</code>",id:"get-apilocationsid",level:4},{value:"Klasa <code>LocationService</code>",id:"klasa-locationservice",level:2},{value:"Metody",id:"metody",level:3},{value:"<code>List&lt;Location&gt; getAllLocations()</code>",id:"listlocation-getalllocations",level:4},{value:"<code>Optional&lt;Location&gt; getLocationById(Long id)</code>",id:"optionallocation-getlocationbyidlong-id",level:4},{value:"Klasa <code>LocationRepository</code>",id:"klasa-locationrepository",level:2},{value:"Metody",id:"metody-1",level:3},{value:"<code>Optional&lt;Location&gt; findById(Long id)</code>",id:"optionallocation-findbyidlong-id",level:4},{value:"<code>List&lt;Location&gt; findAll()</code>",id:"listlocation-findall",level:4},{value:"Model <code>Location</code>",id:"model-location",level:2},{value:"Pola",id:"pola",level:3},{value:"Przyk\u0142adowe zapytania API",id:"przyk\u0142adowe-zapytania-api",level:2},{value:"Pobranie listy lokalizacji",id:"pobranie-listy-lokalizacji",level:3},{value:"Pobranie szczeg\xf3\u0142\xf3w lokalizacji",id:"pobranie-szczeg\xf3\u0142\xf3w-lokalizacji",level:3}];function t(i){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...i.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"dokumentacja-pobierania-lokalizacji",children:"Dokumentacja Pobierania Lokalizacji"})}),"\n",(0,a.jsx)(n.h2,{id:"wst\u0119p",children:"Wst\u0119p"}),"\n",(0,a.jsxs)(n.p,{children:["W tym rozdziale om\xf3wiono proces pobieranie lokalizacji w aplikacji ",(0,a.jsx)(n.code,{children:"czas-na-wypad"}),"."]}),"\n",(0,a.jsxs)(n.h2,{id:"klasa-locationcontroller",children:["Klasa ",(0,a.jsx)(n.code,{children:"LocationController"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Opis:"}),(0,a.jsx)(n.br,{}),"\n","Klasa kontrolera odpowiedzialna za obs\u0142ug\u0119 \u017c\u0105da\u0144 HTTP zwi\u0105zanych z lokalizacjami. Oferuje endpointy pozwalaj\u0105ce na pobranie wszystkich lokalizacji lub szczeg\xf3\u0142\xf3w dla okre\u015blonej lokalizacji."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"endpointy",children:"Endpointy"}),"\n",(0,a.jsx)(n.h4,{id:"get-apilocations",children:(0,a.jsx)(n.code,{children:"GET /api/locations"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Opis:"}),(0,a.jsx)(n.br,{}),"\n","Zwraca list\u0119 wszystkich dost\u0119pnych lokalizacji."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Przyk\u0142ad zapytania:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:"GET /api/locations\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Przyk\u0142ad odpowiedzi:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\r\n  {\r\n    "id": 1,\r\n    "name": "Warszawa",\r\n    "latitude": 52.2297,\r\n    "longitude": 21.0122,\r\n    "description": "Stolica Polski."\r\n  },\r\n  {\r\n    "id": 2,\r\n    "name": "Krak\xf3w",\r\n    "latitude": 50.0647,\r\n    "longitude": 19.9450,\r\n    "description": "Historyczne miasto w Polsce."\r\n  }\r\n]\n'})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h4,{id:"get-apilocationsid",children:(0,a.jsx)(n.code,{children:"GET /api/locations/{id}"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Opis:"}),(0,a.jsx)(n.br,{}),"\n","Zwraca szczeg\xf3\u0142y lokalizacji na podstawie jej identyfikatora."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Parametry \u015bcie\u017cki:"})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Nazwa"}),(0,a.jsx)(n.th,{children:"Typ"}),(0,a.jsx)(n.th,{children:"Wymagane"}),(0,a.jsx)(n.th,{children:"Opis"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"id"})}),(0,a.jsx)(n.td,{children:"Long"}),(0,a.jsx)(n.td,{children:"Tak"}),(0,a.jsx)(n.td,{children:"Identyfikator lokalizacji"})]})})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Przyk\u0142ad zapytania:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:"GET /api/locations/1\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Przyk\u0142ad odpowiedzi:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\r\n  "id": 1,\r\n  "name": "Warszawa",\r\n  "latitude": 52.2297,\r\n  "longitude": 21.0122,\r\n  "description": "Stolica Polski."\r\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"B\u0142\u0119dy:"})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Kod HTTP"}),(0,a.jsx)(n.th,{children:"Opis"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"404"})}),(0,a.jsxs)(n.td,{children:["Lokalizacja o podanym ",(0,a.jsx)(n.code,{children:"id"})," nie istnieje."]})]})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h2,{id:"klasa-locationservice",children:["Klasa ",(0,a.jsx)(n.code,{children:"LocationService"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Opis:"}),(0,a.jsx)(n.br,{}),"\n","Klasa odpowiedzialna za logik\u0119 biznesow\u0105 zwi\u0105zan\u0105 z lokalizacjami."]}),"\n",(0,a.jsx)(n.h3,{id:"metody",children:"Metody"}),"\n",(0,a.jsx)(n.h4,{id:"listlocation-getalllocations",children:(0,a.jsx)(n.code,{children:"List<Location> getAllLocations()"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Opis:"}),(0,a.jsx)(n.br,{}),"\n","Zwraca list\u0119 wszystkich lokalizacji w systemie."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Zwraca:"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.code,{children:"List<Location>"})," - Lista wszystkich lokalizacji."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h4,{id:"optionallocation-getlocationbyidlong-id",children:(0,a.jsx)(n.code,{children:"Optional<Location> getLocationById(Long id)"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Opis:"}),(0,a.jsx)(n.br,{}),"\n","Zwraca szczeg\xf3\u0142y lokalizacji na podstawie identyfikatora."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Parametry:"})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Nazwa"}),(0,a.jsx)(n.th,{children:"Typ"}),(0,a.jsx)(n.th,{children:"Wymagane"}),(0,a.jsx)(n.th,{children:"Opis"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"id"})}),(0,a.jsx)(n.td,{children:"Long"}),(0,a.jsx)(n.td,{children:"Tak"}),(0,a.jsx)(n.td,{children:"Identyfikator lokalizacji"})]})})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Zwraca:"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.code,{children:"Optional<Location>"})," - Szczeg\xf3\u0142y lokalizacji lub pusty obiekt, je\u015bli lokalizacja nie istnieje."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h2,{id:"klasa-locationrepository",children:["Klasa ",(0,a.jsx)(n.code,{children:"LocationRepository"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Opis:"}),(0,a.jsx)(n.br,{}),"\n","Repozytorium odpowiedzialne za komunikacj\u0119 z baz\u0105 danych w kontek\u015bcie lokalizacji."]}),"\n",(0,a.jsx)(n.h3,{id:"metody-1",children:"Metody"}),"\n",(0,a.jsx)(n.h4,{id:"optionallocation-findbyidlong-id",children:(0,a.jsx)(n.code,{children:"Optional<Location> findById(Long id)"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Opis:"}),(0,a.jsx)(n.br,{}),"\n","Znajduje lokalizacj\u0119 na podstawie jej identyfikatora."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h4,{id:"listlocation-findall",children:(0,a.jsx)(n.code,{children:"List<Location> findAll()"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Opis:"}),(0,a.jsx)(n.br,{}),"\n","Zwraca list\u0119 wszystkich lokalizacji dost\u0119pnych w bazie danych."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h2,{id:"model-location",children:["Model ",(0,a.jsx)(n.code,{children:"Location"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Opis:"}),(0,a.jsx)(n.br,{}),"\n","Encja reprezentuj\u0105ca lokalizacj\u0119 w systemie."]}),"\n",(0,a.jsx)(n.h3,{id:"pola",children:"Pola"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Nazwa"}),(0,a.jsx)(n.th,{children:"Typ"}),(0,a.jsx)(n.th,{children:"Opis"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"id"})}),(0,a.jsx)(n.td,{children:"Long"}),(0,a.jsx)(n.td,{children:"Unikalny identyfikator lokalizacji"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"name"})}),(0,a.jsx)(n.td,{children:"String"}),(0,a.jsx)(n.td,{children:"Nazwa miejscowo\u015bci lub miejsca"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"latitude"})}),(0,a.jsx)(n.td,{children:"Double"}),(0,a.jsx)(n.td,{children:"Szeroko\u015b\u0107 geograficzna"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"longitude"})}),(0,a.jsx)(n.td,{children:"Double"}),(0,a.jsx)(n.td,{children:"D\u0142ugo\u015b\u0107 geograficzna"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"description"})}),(0,a.jsx)(n.td,{children:"String"}),(0,a.jsx)(n.td,{children:"Opis lokalizacji (opcjonalne)"})]})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"przyk\u0142adowe-zapytania-api",children:"Przyk\u0142adowe zapytania API"}),"\n",(0,a.jsx)(n.h3,{id:"pobranie-listy-lokalizacji",children:"Pobranie listy lokalizacji"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Zapytanie:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:"GET /api/locations\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Odpowied\u017a:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\r\n  {\r\n    "id": 1,\r\n    "name": "Warszawa",\r\n    "latitude": 52.2297,\r\n    "longitude": 21.0122,\r\n    "description": "Stolica Polski."\r\n  },\r\n  {\r\n    "id": 2,\r\n    "name": "Krak\xf3w",\r\n    "latitude": 50.0647,\r\n    "longitude": 19.9450,\r\n    "description": "Historyczne miasto w Polsce."\r\n  }\r\n]\n'})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"pobranie-szczeg\xf3\u0142\xf3w-lokalizacji",children:"Pobranie szczeg\xf3\u0142\xf3w lokalizacji"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Zapytanie:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",children:"GET /api/locations/1\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Odpowied\u017a:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\r\n  "id": 1,\r\n  "name": "Warszawa",\r\n  "latitude": 52.2297,\r\n  "longitude": 21.0122,\r\n  "description": "Stolica Polski."\r\n}\n'})})]})}function j(i={}){const{wrapper:n}={...(0,o.R)(),...i.components};return n?(0,a.jsx)(n,{...i,children:(0,a.jsx)(t,{...i})}):t(i)}},8453:(i,n,e)=>{e.d(n,{R:()=>s,x:()=>d});var l=e(6540);const a={},o=l.createContext(a);function s(i){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof i?i(n):{...n,...i}}),[n,i])}function d(i){let n;return n=i.disableParentContext?"function"==typeof i.components?i.components(a):i.components||a:s(i.components),l.createElement(o.Provider,{value:n},i.children)}}}]);