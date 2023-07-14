import { createApp, h } from 'vue'
import VueSelect from '@/index'
import '@/css/vue-select.css'
import App from './app.vue' // must be imported after VueSelect
import IconDown from './IconDown.vue'
import './index.css'
import router from './router'

VueSelect.props.components.default = () => ({
  // Deselect: {
  // 	render: () => h('span', '❌'),
  // },
  OpenIndicator: {
    render: () => h(IconDown),
  },
})

const app = createApp(App)
app.use(router)

app.component('VSelect', VueSelect)

app.mount('#app')
