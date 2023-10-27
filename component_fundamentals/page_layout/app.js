const app = Vue.createApp({
})

.component('page-layout', {
    template: '#page-layout-template',
    data() {
        return {
            header: {type: String, default: 'Here might ba a page title'},
            main_content_1: 'A paragraph for the main content.',
            main_content_2: 'And another one.',
            footer: "Here's some contact info"
        }

    }
})

.mount('#app')
