<template lang="pug">
    div
        p{{ greeting name }}
        other-component
</template>

<script>
    import OtherComponent from './OtherComponent.vue';

    export default {
        components: {
            OtherComponent
        },

        data () {
            return {
                greeting: "Hallo",
                name: "Seymi"
            }
        }
    }
</script>

<style lang="stylus" scoped>
    p {
        font-size 2em;
        text-align center;
    }
</style>
