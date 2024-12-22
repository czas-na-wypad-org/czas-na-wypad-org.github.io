"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1676],{4494:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var o=s(9558),r=s(4848),i=s(8453);const t={sidebar_position:1},d="Manage Docs Versions",c={authorsImageUrls:[]},a=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}];function l(e){const n={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Docusaurus can manage multiple versions of your docs."}),"\n",(0,r.jsx)(n.h2,{id:"create-a-docs-version",children:"Create a docs version"}),"\n",(0,r.jsx)(n.p,{children:"Release a version 1.0 of your project:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus docs:version 1.0\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"docs"})," folder is copied into ",(0,r.jsx)(n.code,{children:"versioned_docs/version-1.0"})," and ",(0,r.jsx)(n.code,{children:"versions.json"})," is created."]}),"\n",(0,r.jsx)(n.p,{children:"Your docs now have 2 versions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"1.0"})," at ",(0,r.jsx)(n.code,{children:"http://localhost:3000/docs/"})," for the version 1.0 docs"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"current"})," at ",(0,r.jsx)(n.code,{children:"http://localhost:3000/docs/next/"})," for the ",(0,r.jsx)(n.strong,{children:"upcoming, unreleased docs"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"add-a-version-dropdown",children:"Add a Version Dropdown"}),"\n",(0,r.jsx)(n.p,{children:"To navigate seamlessly across versions, add a version dropdown."}),"\n",(0,r.jsxs)(n.p,{children:["Modify the ",(0,r.jsx)(n.code,{children:"docusaurus.config.js"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\r\n  themeConfig: {\r\n    navbar: {\r\n      items: [\r\n        // highlight-start\r\n        {\r\n          type: 'docsVersionDropdown',\r\n        },\r\n        // highlight-end\r\n      ],\r\n    },\r\n  },\r\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"The docs version dropdown appears in your navbar:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Docs Version Dropdown",src:s(6286).A+""})}),"\n",(0,r.jsx)(n.h2,{id:"update-an-existing-version",children:"Update an existing version"}),"\n",(0,r.jsx)(n.p,{children:"It is possible to edit versioned docs in their respective folder:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"versioned_docs/version-1.0/hello.md"})," updates ",(0,r.jsx)(n.code,{children:"http://localhost:3000/docs/hello"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"docs/hello.md"})," updates ",(0,r.jsx)(n.code,{children:"http://localhost:3000/docs/next/hello"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},6286:(e,n,s)=>{s.d(n,{A:()=>o});const o="data:image/png;base64,"},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var o=s(6540);const r={},i=o.createContext(r);function t(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(i.Provider,{value:n},e.children)}},9558:e=>{e.exports=JSON.parse('{"permalink":"/blog/tutorial-extras/manage-docs-versions","source":"@site/blog/tutorial-extras/manage-docs-versions.md","title":"Manage Docs Versions","description":"Docusaurus can manage multiple versions of your docs.","date":"2024-11-06T21:41:38.000Z","tags":[],"readingTime":0.695,"hasTruncateMarker":false,"authors":[],"frontMatter":{"sidebar_position":1},"unlisted":false,"nextItem":{"title":"Translate your site","permalink":"/blog/tutorial-extras/translate-your-site"}}')}}]);