<template>
    <div class="v-carousel-item">
        <img :src=" require('../../assets/img/' + slider.img) " :alt="slider.name">
    </div>
</template>

<script>
    export default {
        name: "v-carousel-item",
        props: {
            slider: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style lang="scss">
    .v-carousel-item {
        max-width: 500px;
        img {
            max-width: 500px;
        }
    }
</style>