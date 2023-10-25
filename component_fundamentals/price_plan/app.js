Vue.createApp({
    data() {
        return {
            plans: [
                { price_plan: 'Gratis', price: 0 },
                { price_plan: 'Standard', price: this.getStandardPrice() },
                { price_plan: 'Premium', price: this.averageSaving },
                { price_plan: 'KickStarter', price: this.averageSaving * 12 },
            ],
            averageCost: 900,  // todo: get from a service
            averageSaving: 60  // todo: get from a service
        }
    },
    methods: {
        getStandardPrice: function() {
            return 18;
        }
    }
})

.component('price-plan-picker', {
    template: '#price-plan-picker-template',
    props: {
        plans: {type: Array, required: true }
    }
})

.component('price-plan', {
    template: '#price-plan-template',
    props: {
        'price_plan': {type: String, default: 'noch kein Mitglied', required: true},
        'price': Number,
        'currency': {type: String, default: 'EUR'},
    }
})

.mount('#app')
