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
                ],
            },
            {
                text: 'Templating & Styling',
                collapsable: false,
                children: [
                    {link: '/guide/components', text: 'Child Components'},
                    {link: '/guide/css', text: 'CSS Styling'},
                    {link: '/guide/slots', text: 'Slots Styling'},
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
                    {link: '/guide/state-manager', text: 'State manager'},
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
                text: 'Как начать',
                collapsable: false,
                children: [
                    {link: '/ru/guide/install', text: 'Установка'},
                    {link: '/ru/guide/options', text: 'Выпадающий список'},
                    {link: '/ru/guide/values', text: 'Работа со значением'},
                ],
            },
            {
                text: 'Стилизация',
                collapsable: false,
                children: [
                    {link: '/ru/guide/components', text: 'Дочерние компоненты'},
                    {link: '/ru/guide/css', text: 'CSS стилизация'},
                    {link: '/ru/guide/slots', text: 'Стилизация слотами'},
                ],
            },
            {
                text: 'Доступность',
                collapsable: false,
                children: [
                    {link: '/ru/guide/accessibility', text: 'Спецификация WAI-ARIA'},
                    {link: '/ru/guide/localization', text: 'Локализация'},
                ],
            },
            {
                text: 'Варианты применения',
                collapsable: false,
                children: [
                    {link: '/ru/guide/validation', text: 'Проверки'},
                    {link: '/ru/guide/selectable', text: 'Ограничение выбора'},
                    {link: '/ru/guide/pagination', text: 'Разбивка на страницы'},
                    {link: '/ru/guide/infinite-scroll', text: 'Бесконечная прокрутка'},
                    {link: '/ru/guide/state-manager', text: 'Менеджер состояний'},
                    {link: '/ru/guide/ajax', text: 'AJAX'},
                    {link: '/ru/guide/loops', text: 'Применение в циклах'},
                ],
            },
            {
                text: 'Кастомизация',
                collapsable: false,
                children: [
                    {link: '/ru/guide/keydown', text: 'События клавиатуры'},
                    {link: '/ru/guide/positioning', text: 'Позиционирование списка'},
                    {link: '/ru/guide/opening', text: 'Открытие списка'},
                    {link: '/ru/guide/filtering', text: 'Фильтрация опций'},
                ],
            },
            {
                text: 'API',
                collapsable: false,
                children: [
                    {link: '/ru/api/props', text: 'Параметры'},
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
