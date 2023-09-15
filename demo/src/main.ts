import { createApp, h } from 'vue'
import { VueSelect, VSelect } from '@/index'
import App from './app.vue' // must be imported after VueSelect
import router from './router'
// import IconDown from './components/IconDown.vue'
import '@/css/vue-select.css'
import './style.css'

// VueSelect.props.components.default = () => ({
//   Deselect: {
//   	render: () => h('span', '❌'),
//   },
//   OpenIndicator: {
//     render: () => h(IconDown),
//   },
// })

const app = createApp(App)
app.use(router)

app.component('VSelect', VueSelect)
app.component('Vue3Select', VSelect)

app.mount('#app')
