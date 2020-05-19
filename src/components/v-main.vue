<template>
    <section class="v-main">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </section>
</template>

<script>

    export default {
        name: "v-main",
        components: {},
        props: {},
        data(){
            return {
                title: "Секция Main"
            }
        },
        computed: {}, //вычисляемые свойства
        methods: {},
        watch: {}, //отлавливание изменений
        mounted() {}, // когда компонент полностью загрузится


    }
</script>

<style lang="scss">
    .v-main {
        max-width:1000px;
        margin: 0 auto;
    }
</style>