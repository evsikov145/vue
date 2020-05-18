<template>
    <section class="v-cart">
        <h2>Cart</h2>
        <vCartItem
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
        />
    </section>
</template>

<script>
    import vCartItem from './v-cart__item'
    import {mapActions} from 'vuex'
    export default {
        name: "v-cart",
        props: {
            cart_data: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        components: {
            vCartItem
        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART'
            ]),
            deleteFromCart(index){
                this.DELETE_FROM_CART(index);
            }
        }
    }
</script>

<style lang="scss">
    .v-cart {
        margin-bottom: 40px;
    }
</style>