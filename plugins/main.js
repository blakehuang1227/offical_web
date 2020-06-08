// import VueAnalytics from 'vue-analytics'
import Vue from 'vue';
// import skrollr from 'skrollr';
// Vue.use(skrollr);

// Vue.use(VueAnalytics, {
//     id: 'UA-167182817-1',
//     autoTracking: {
//         pageviewOnLoad: true
//     }
// })

// font - awesome相關
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.use(BootstrapVue)
library.add(fas, far, fab)
library.add(faFontAwesome)
Vue.component('font-awesome-icon', FontAwesomeIcon)


