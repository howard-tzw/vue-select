import {defineConfig, mergeConfig, configDefaults} from 'vitest/config'
import viteConfig from './vite.config'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// import { defineConfig, mergeConfig } from 'vitest/config'
// import viteConfig from './vite.config'
//
// export default mergeConfig(viteConfig, defineConfig({
//     test: {
//         exclude: ['demo/*'],
//     },
// }))

export default defineConfig({
    plugins: [vue()],
    test: {
        exclude: [...configDefaults.exclude, '**/demo/src/**','demo/**','**/demo/**',path.resolve(__dirname, './demo/')+'/**','demo'],
    },
    exclude: [...configDefaults.exclude, '**/demo/src/**','demo/**','**/demo/**','demo'],
    resolve: {
        alias: {
            '#': path.resolve(__dirname, './tests'),
            '@': path.resolve(__dirname, './src'),
        },
    },
})
//
console.log([...configDefaults.exclude, '**/demo/src/**','demo/**','**/demo/**',path.resolve(__dirname, './demo/')+'/**','demo'])