<template>
    <section class="v-cart">
        <h2>Cart</h2>
        <router-link :to="{name: 'Catalog'}">
            <div class="v-cart__link-catalog">
                Back to Catalog
            </div>
        </router-link>
        <p v-if="!cart_data.length">There are no products in cart ...</p>
        <vCartItem
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
            @incrementItem="incrementItem(index)"
            @decrementItem="decrementItem(index)"
        />
        <div class="v-cart__total">
            <p class="total-name">Total:</p>
            <p>{{cartTotalCost}} RUB</p>
        </div>
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
                'DELETE_FROM_CART',
                'INCREMENT_CART_ITEM',
                'DECREMENT_CART_ITEM'
            ]),
            deleteFromCart(index){
                this.DELETE_FROM_CART(index);
            },
            incrementItem(index){
                this.INCREMENT_CART_ITEM(index)
            },
            decrementItem(index){
                this.DECREMENT_CART_ITEM(index)
            }
        },
        computed: {
            cartTotalCost(){
                let result = [];

                if(this.cart_data.length){
                    for(let item of this.cart_data){
                        result.push(item.price * item.quantity);
                    }

                    result = result.reduce(function (sum, el) {
                        return sum + el;
                    });
                    return result;
                }else {
                    return 0;
                }


            }
        }
    }
</script>

<style lang="scss">
    .v-cart {
        position: relative;
        margin-bottom: 90px;
    }
    .v-cart__link-catalog {
        position: absolute;
        top: 0;
        right: 0;
        border: 1px solid $color-box;
        padding: $padding*2;
    }
    .v-cart__total {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        padding:$padding*2 $padding*3;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #26ae68;
        color: white;
        font-size: 20px;
        line-height: 1;
    }
    .total-name {
        margin: 0 20px 0 0;
    }
</style>