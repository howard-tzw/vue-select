import {defineClientConfig} from '@vuepress/client'
import VueSelect from "../../../src/components/Select.vue";

export default defineClientConfig({
    enhance({app}) {
        app.component('v-select', VueSelect)
    },
})