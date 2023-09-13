import { createApp, h } from 'vue'
import VueSelect from '@/index'
import NewVueSelect from '@/index2'
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
app.component('NewVueSelect', NewVueSelect)

app.mount('#app')
