"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/tutorial-extras/manage-docs-versions","metadata":{"permalink":"/blog/tutorial-extras/manage-docs-versions","source":"@site/blog/tutorial-extras/manage-docs-versions.md","title":"Manage Docs Versions","description":"Docusaurus can manage multiple versions of your docs.","date":"2024-11-06T21:41:38.000Z","tags":[],"readingTime":0.695,"hasTruncateMarker":false,"authors":[],"frontMatter":{"sidebar_position":1},"unlisted":false,"nextItem":{"title":"Translate your site","permalink":"/blog/tutorial-extras/translate-your-site"}},"content":"Docusaurus can manage multiple versions of your docs.\\r\\n\\r\\n## Create a docs version\\r\\n\\r\\nRelease a version 1.0 of your project:\\r\\n\\r\\n```bash\\r\\nnpm run docusaurus docs:version 1.0\\r\\n```\\r\\n\\r\\nThe `docs` folder is copied into `versioned_docs/version-1.0` and `versions.json` is created.\\r\\n\\r\\nYour docs now have 2 versions:\\r\\n\\r\\n- `1.0` at `http://localhost:3000/docs/` for the version 1.0 docs\\r\\n- `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**\\r\\n\\r\\n## Add a Version Dropdown\\r\\n\\r\\nTo navigate seamlessly across versions, add a version dropdown.\\r\\n\\r\\nModify the `docusaurus.config.js` file:\\r\\n\\r\\n```js title=\\"docusaurus.config.js\\"\\r\\nexport default {\\r\\n  themeConfig: {\\r\\n    navbar: {\\r\\n      items: [\\r\\n        // highlight-start\\r\\n        {\\r\\n          type: \'docsVersionDropdown\',\\r\\n        },\\r\\n        // highlight-end\\r\\n      ],\\r\\n    },\\r\\n  },\\r\\n};\\r\\n```\\r\\n\\r\\nThe docs version dropdown appears in your navbar:\\r\\n\\r\\n![Docs Version Dropdown](./img/docsVersionDropdown.png)\\r\\n\\r\\n## Update an existing version\\r\\n\\r\\nIt is possible to edit versioned docs in their respective folder:\\r\\n\\r\\n- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`\\r\\n- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`"},{"id":"/tutorial-extras/translate-your-site","metadata":{"permalink":"/blog/tutorial-extras/translate-your-site","source":"@site/blog/tutorial-extras/translate-your-site.md","title":"Translate your site","description":"Let\'s translate docs/intro.md to French.","date":"2024-11-06T21:41:38.000Z","tags":[],"readingTime":0.955,"hasTruncateMarker":false,"authors":[],"frontMatter":{"sidebar_position":2},"unlisted":false,"prevItem":{"title":"Manage Docs Versions","permalink":"/blog/tutorial-extras/manage-docs-versions"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"Let\'s translate `docs/intro.md` to French.\\r\\n\\r\\n## Configure i18n\\r\\n\\r\\nModify `docusaurus.config.js` to add support for the `fr` locale:\\r\\n\\r\\n```js title=\\"docusaurus.config.js\\"\\r\\nexport default {\\r\\n  i18n: {\\r\\n    defaultLocale: \'en\',\\r\\n    locales: [\'en\', \'fr\'],\\r\\n  },\\r\\n};\\r\\n```\\r\\n\\r\\n## Translate a doc\\r\\n\\r\\nCopy the `docs/intro.md` file to the `i18n/fr` folder:\\r\\n\\r\\n```bash\\r\\nmkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\\r\\n\\r\\ncp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\\r\\n```\\r\\n\\r\\nTranslate `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` in French.\\r\\n\\r\\n## Start your localized site\\r\\n\\r\\nStart your site on the French locale:\\r\\n\\r\\n```bash\\r\\nnpm run start -- --locale fr\\r\\n```\\r\\n\\r\\nYour localized site is accessible at [http://localhost:3000/fr/](http://localhost:3000/fr/) and the `Getting Started` page is translated.\\r\\n\\r\\n:::caution\\r\\n\\r\\nIn development, you can only use one locale at a time.\\r\\n\\r\\n:::\\r\\n\\r\\n## Add a Locale Dropdown\\r\\n\\r\\nTo navigate seamlessly across languages, add a locale dropdown.\\r\\n\\r\\nModify the `docusaurus.config.js` file:\\r\\n\\r\\n```js title=\\"docusaurus.config.js\\"\\r\\nexport default {\\r\\n  themeConfig: {\\r\\n    navbar: {\\r\\n      items: [\\r\\n        // highlight-start\\r\\n        {\\r\\n          type: \'localeDropdown\',\\r\\n        },\\r\\n        // highlight-end\\r\\n      ],\\r\\n    },\\r\\n  },\\r\\n};\\r\\n```\\r\\n\\r\\nThe locale dropdown now appears in your navbar:\\r\\n\\r\\n![Locale Dropdown](./img/localeDropdown.png)\\r\\n\\r\\n## Build your localized site\\r\\n\\r\\nBuild your site for a specific locale:\\r\\n\\r\\n```bash\\r\\nnpm run build -- --locale fr\\r\\n```\\r\\n\\r\\nOr build your site to include all the locales at once:\\r\\n\\r\\n```bash\\r\\nnpm run build\\r\\n```"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","tags":[{"inline":false,"label":"Facebook","permalink":"/blog/tags/facebook","description":"Facebook tag description"},{"inline":false,"label":"Hello","permalink":"/blog/tags/hello","description":"Hello tag description"},{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.465,"hasTruncateMarker":true,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","page":{"permalink":"/blog/authors/all-sebastien-lorber-articles"},"socials":{"x":"https://x.com/sebastienlorber","linkedin":"https://www.linkedin.com/in/sebastienlorber/","github":"https://github.com/slorber","newsletter":"https://thisweekinreact.com"},"imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","page":{"permalink":"/blog/authors/yangshun"},"socials":{"x":"https://x.com/yangshunz","github":"https://github.com/yangshun"},"imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"Translate your site","permalink":"/blog/tutorial-extras/translate-your-site"},"nextItem":{"title":"mdx-blog-post","permalink":"/blog/2021/08/01/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\r\\n\\r\\nHere are a few tips you might find useful.\\r\\n\\r\\n\x3c!-- truncate --\x3e\\r\\n\\r\\nSimply add Markdown files (or folders) to the `blog` directory.\\r\\n\\r\\nRegular blog authors can be added to `authors.yml`.\\r\\n\\r\\nThe blog post date can be extracted from filenames, such as:\\r\\n\\r\\n- `2019-05-30-welcome.md`\\r\\n- `2019-05-30-welcome/index.md`\\r\\n\\r\\nA blog post folder can be convenient to co-locate blog post images:\\r\\n\\r\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\r\\n\\r\\nThe blog supports tags as well!\\r\\n\\r\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"/2021/08/01/mdx-blog-post","metadata":{"permalink":"/blog/2021/08/01/mdx-blog-post","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"mdx-blog-post","description":"","date":"2021-08-01T00:00:00.000Z","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/blog/welcome"},"nextItem":{"title":"long-blog-post","permalink":"/blog/2019/05/29/long-blog-post"}},"content":""},{"id":"/2019/05/29/long-blog-post","metadata":{"permalink":"/blog/2019/05/29/long-blog-post","source":"@site/blog/2019-05-29-long-blog-post.md","title":"long-blog-post","description":"","date":"2019-05-29T00:00:00.000Z","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"mdx-blog-post","permalink":"/blog/2021/08/01/mdx-blog-post"},"nextItem":{"title":"first-blog-post","permalink":"/blog/2019/05/28/first-blog-post"}},"content":""},{"id":"/2019/05/28/first-blog-post","metadata":{"permalink":"/blog/2019/05/28/first-blog-post","source":"@site/blog/2019-05-28-first-blog-post.md","title":"first-blog-post","description":"","date":"2019-05-28T00:00:00.000Z","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"long-blog-post","permalink":"/blog/2019/05/29/long-blog-post"}},"content":""}]}}')}}]);