<template>
    <p class="username"> {{ username }}</p>
</template>

<script>
 export default {
    props: {
        username: String
    }
 }

</script>

<style lang="scss" scoped>
    $size: 30pt;
    $color: #ffa500;

    .username {
        font-size: $size;
        color: $color;
    }
</style>






