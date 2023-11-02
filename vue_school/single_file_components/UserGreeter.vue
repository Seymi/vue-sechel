<template>
    <p>{{ greeting name }}</p>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                greeting: "Hallo",
                name: "Seymi"
            }
        }
    }
</script>

<style scoped>
    p {
        font-size: 2em;
        text-align: center;
    }
</style>
