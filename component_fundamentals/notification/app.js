const app = Vue.createApp({
})

.component('notification-message', {
    template: '#notification-message-template',
    props: {
        message_type: { type: String, default: 'info' },
        header: { type: String, default: 'Information' }
    },
    data() {
        return {
            hiden: false,
            message: '',
        }
    },
    methods: {
        hideMessage() {
            this.hiden = true;
        }
    }
})

.mount('#app')
