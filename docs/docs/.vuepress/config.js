import {defineUserConfig} from 'vuepress'
import theme from "./config/themeConfig";
import head from "./config/head";
import plugins from "./config/plugins";
import locales from "./config/locales";
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
    title: 'Vs Vue3 Select 1',
    lang: 'en-US',
    theme,
    head,
    locales,
    plugins,
    alias: {
        '@': path.resolve(__dirname, '../../../src')
    }
})

