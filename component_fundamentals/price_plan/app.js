let PricePlanComponent = {
    template: '#price-plan-template',
    props: {
        'price_plan': {type: String, default: 'noch kein Mitglied', required: true},
        'price': { type: Number },
        'currency': {type: String, default: 'EUR'},
        'selected': {type: Boolean, default: false},
    },
    methods: {
        selectPricePlan() {
            this.$emit('selectedPricePlan', this.price_plan);
        }
    }
}

let PricePlanPickerComponent = {
    components: {PricePlan: PricePlanComponent },
    template: '#price-plan-picker-template',
    props: {
        plans: {type: Array, required: true }
    },
    data() {
        return {
            selectedPricePlan: 'Du hast noch keine Mitgliedschaft gewählt'
        }
    },
    methods: {
        setSelectedPricePlan(price_plan) {
            this.selectedPricePlan = price_plan;
            console.log('you selected ', price_plan );
        }
    }

}

const app = Vue.createApp({
    components: { PricePlanPicker: PricePlanPickerComponent },
    data() {
        return {
            averageCost: 900,   // todo: get from a service
            plans: [
                { price_plan: 'Gratis', price: 0 },
                { price_plan: 'Standard', price: this.getStandardPrice() },
                { price_plan: 'Premium', price: this.getAverageSaving() },
                { price_plan: 'KickStarter', price: this.getAverageSaving() * 12 }
            ]
        }
    },
    methods: {
        getStandardPrice: function() {
            return 18;
        },
        getAverageSaving: function() {
            return 60;
        }
    }
})


.mount('#app')
