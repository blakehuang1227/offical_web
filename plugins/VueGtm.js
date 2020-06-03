import Vue from 'vue'
import VueGtm from 'vue-gtm'

if (process.browser) {
    Vue.use(VueGtm, {
        // container id
        // id: 'UA-167182817-1',
        id: 'GTM-M7J99D6',
        // enable track or not (optional)
        // enabled: process.env.NODE_ENV === 'production',
        // display console logs debugs or not (optional)
        // debug: true
    })

}
