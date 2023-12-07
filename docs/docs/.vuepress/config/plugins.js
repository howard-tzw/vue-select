import {registerComponentsPlugin} from '@vuepress/plugin-register-components';
import {activeHeaderLinksPlugin} from '@vuepress/plugin-active-header-links';
import {searchPlugin} from '@vuepress/plugin-search';

export default [
    registerComponentsPlugin({
        componentsDir: './docs/.vuepress/components'
    }),
    activeHeaderLinksPlugin(),
    searchPlugin(),
]
