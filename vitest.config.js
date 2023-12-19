import {defineConfig, configDefaults} from 'vitest/config'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    test: {
        environment: 'jsdom',
        coverage: {
            provider: 'v8',
            exclude: [...configDefaults.coverage.exclude, 'demo'],
            reporter:['lcov','html-spa','text']
        },
    },
    resolve: {
        alias: {
            '#': path.resolve(__dirname, './tests'),
            '@': path.resolve(__dirname, './src'),
        },
    },
})
