import {registerComponentsPlugin} from '@vuepress/plugin-register-components';
import {activeHeaderLinksPlugin} from '@vuepress/plugin-active-header-links';
import {searchPlugin} from '@vuepress/plugin-search';
import yandexMetrikaPlugin from 'vuepress-plugin-yandex-metrika';

export default [
    registerComponentsPlugin({
        componentsDir: './docs/.vuepress/components'
    }),
    activeHeaderLinksPlugin(),
    searchPlugin(),
    yandexMetrikaPlugin({
        id: 95867614,
        config: {
            clickmap: false,
            trackLinks: true,
            accurateTrackBounce: true,
            ecommerce: "dataLayer"
        }
    }),
]
