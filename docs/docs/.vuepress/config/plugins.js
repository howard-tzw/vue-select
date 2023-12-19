import {registerComponentsPlugin} from '@vuepress/plugin-register-components';
import {activeHeaderLinksPlugin} from '@vuepress/plugin-active-header-links';
import {searchPlugin} from '@vuepress/plugin-search';
import yandexMetrikaPlugin from 'vuepress-plugin-yandex-metrika';
import sitemapPlugin from '@vuepress-denaro/vuepress-plugin-sitemap';
import {googleAnalyticsPlugin} from "@vuepress/plugin-google-analytics";
import 'dotenv/config';

export default [
    registerComponentsPlugin({
        componentsDir: './docs/.vuepress/components'
    }),
    activeHeaderLinksPlugin(),
    searchPlugin(),
    yandexMetrikaPlugin({
        id: process.env.YANDEX_METIKA_ID,
        config: {
            clickmap: false,
            trackLinks: true,
            accurateTrackBounce: true,
            ecommerce: "dataLayer"
        }
    }),
    sitemapPlugin({
        hostname: 'https://vue3-select.va-soft.ru/',
        exclude: ['/404.html', 'sandbox.html']
    }),
    googleAnalyticsPlugin({
        id: process.env.GOOFLE_ANALYTICS_ID,
    })
]
