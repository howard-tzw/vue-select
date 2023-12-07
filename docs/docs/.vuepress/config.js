import {defineUserConfig} from 'vuepress'
import theme from "./config/themeConfig";
import head from "./config/head";
import plugins from "./config/plugins";
import {fileURLToPath} from 'url';
import {dirname, resolve} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineUserConfig({
    title: 'Example',
    lang: 'en-US',
    theme,
    head,
    plugins,
    alias: {
        '@': resolve(__dirname, '../../../src')
    }
})

