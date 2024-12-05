// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

    // But you can create a sidebar manually

    tutorialSidebar: [
        'intro',
        {
            type: 'category',
            label: 'Model danych',
            collapsed: true,
            items: [
                'data-model/data-model',
            ],
        },
        {
            type: 'category',
            label: 'Rejestracja',
            collapsed: true,
            items: [
                'registration/registration', // Dokument główny
                'registration/registration-test-scenarios', // Scenariusze testowe
            ],
        },
        {
            type: 'category',
            label: 'Logowanie',
            collapsed: true,
            items: [
                'login/login', // Dokument główny
                'login/login-test-scenarios', // Scenariusze testowe
            ],
        },
        {
            type: 'category',
            label: 'Filtrowanie i sortowanie wyników',
            collapsed: true,
            items: [
                'sorting-results/sorting-results', // Dokument główny
                'sorting-results/results-test-scenarios', // Scenariusze testowe
            ],
        },
        {
            type: 'category',
            label: 'Ulubione atrakcje',
            collapsed: true,
            items: [
                'favourites/favourites', // Dokument główny
                'favourites/favourites-test-scenarios', // Scenariusze testowe
            ],
        },
    ],

};

export default sidebars;
