import {defaultTheme} from "vuepress";

export default defaultTheme({
    repo: 'Voral/vs-vue3-select',
    editLinks: false,
    docsDir: 'docs',
    sidebar: {
        '/': [
            {
                text: 'Getting Started',
                collapsable: false,
                children: [
                    {link: '/guide/install', text: 'Installation'},
                    {link: '/guide/options', text: 'Dropdown Options'},
                    {link: '/guide/values', text: 'Selecting Values'},
                    {link: '/guide/upgrading', text: 'Upgrading 2.x to 3.x'},
                ],
            },
            {
                text: 'Templating & Styling',
                collapsable: false,
                children: [
                    {link: '/guide/components', text: 'Child Components'},
                    {link: '/guide/css', text: 'CSS & Selectors'},
                    {link: '/guide/slots', text: 'Slots'},
                ],
            },
            {
                text: 'Accessibility',
                collapsable: false,
                children: [
                    {link: '/guide/accessibility', text: 'WAI-ARIA Spec'},
                    {link: '/guide/localization', text: 'Localization'},
                ],
            },
            {
                text: 'Use Cases',
                collapsable: false,
                children: [
                    {link: '/guide/validation', text: 'Validation'},
                    {link: '/guide/selectable', text: 'Limiting Selections'},
                    {link: '/guide/pagination', text: 'Pagination'},
                    {link: '/guide/infinite-scroll', text: 'Infinite Scroll'},
                    {link: '/guide/vuex', text: 'Vuex'},
                    {link: '/guide/ajax', text: 'AJAX'},
                    {link: '/guide/loops', text: 'Using in Loops'},
                ],
            },
            {
                text: 'Customizing',
                collapsable: false,
                children: [
                    {link: '/guide/keydown', text: 'Keydown Events'},
                    {link: '/guide/positioning', text: 'Dropdown Position'},
                    {link: '/guide/opening', text: 'Dropdown Opening'},
                    {link: '/guide/filtering', text: 'Option Filtering'},
                ],
            },
            {
                text: 'API',
                collapsable: false,
                children: [
                    {link: '/api/props', text: 'Props'},
                    {link: '/api/slots', text: 'Slots'},
                    {link: '/api/events', text: 'Events'},
                ],
            },
        ],
        '/ru/': [
            {
                text: 'Getting Started',
                collapsable: false,
                children: [
                    {link: '/guide/install', text: 'Installation'},
                    {link: '/guide/options', text: 'Dropdown Options'},
                    {link: '/guide/values', text: 'Selecting Values'},
                    {link: '/guide/upgrading', text: 'Upgrading 2.x to 3.x'},
                ],
            },
            {
                text: 'Templating & Styling',
                collapsable: false,
                children: [
                    {link: '/guide/components', text: 'Child Components'},
                    {link: '/guide/css', text: 'CSS & Selectors'},
                    {link: '/guide/slots', text: 'Slots'},
                ],
            },
            {
                text: 'Accessibility',
                collapsable: false,
                children: [
                    {link: '/guide/accessibility', text: 'WAI-ARIA Spec'},
                    {link: '/guide/localization', text: 'Localization'},
                ],
            },
            {
                text: 'Use Cases',
                collapsable: false,
                children: [
                    {link: '/guide/validation', text: 'Validation'},
                    {link: '/guide/selectable', text: 'Limiting Selections'},
                    {link: '/guide/pagination', text: 'Pagination'},
                    {link: '/guide/infinite-scroll', text: 'Infinite Scroll'},
                    {link: '/guide/vuex', text: 'Vuex'},
                    {link: '/guide/ajax', text: 'AJAX'},
                    {link: '/guide/loops', text: 'Using in Loops'},
                ],
            },
            {
                text: 'Customizing',
                collapsable: false,
                children: [
                    {link: '/guide/keydown', text: 'Keydown Events'},
                    {link: '/guide/positioning', text: 'Dropdown Position'},
                    {link: '/guide/opening', text: 'Dropdown Opening'},
                    {link: '/guide/filtering', text: 'Option Filtering'},
                ],
            },
            {
                text: 'API',
                collapsable: false,
                children: [
                    {link: '/ru/api/props', text: 'Props'},
                    {link: '/ru/api/slots', text: 'Слоты'},
                    {link: '/ru/api/events', text: 'События'},
                ],
            },
        ],
    },
    locales: {
        '/': {
            selectLanguageName: 'English',
        },
        '/ru/': {
            selectLanguageName: 'Русский',
        },
    },
})
