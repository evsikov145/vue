<template>
    <section class="v-main">
        <vCatalog/>
        <vCart
            v-if="CART.length"
            :cart_data="CART"
        />
    </section>
</template>

<script>

    import vCatalog from './v-catalog'
    import vCart from './v-cart'
    import {mapGetters} from 'vuex'
    export default {
        name: "v-main",
        components: {
            vCatalog,
            vCart
        },
        props: {},
        data(){
            return {
                title: "Секция Main"
            }
        },
        computed: {
            ...mapGetters([
                'CART'
            ])
        }, //вычисляемые свойства
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