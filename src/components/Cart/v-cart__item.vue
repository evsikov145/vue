<template>
    <div class="v-cart__item">
        <img class="v-cart__img" :src="require('../../assets/img/'+ cart_item_data.image)" alt="">
        <div class="v-cart__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="v-cart__quantity">
            <p>Quantity:</p>
            <div>
                <button
                        @click="decrementItem"
                        class="btn quantity__btn"
                >-</button>
                {{cart_item_data.quantity}}
                <button
                        @click="incrementItem"
                        class=" btn quantity__btn"
                >+</button>
            </div>
        </div>
        <button
                class="btn"
                @click="deleteFromCart"
        >Delete</button>
    </div>
</template>

<script>


    export default {
        name: "v-cart__item",
        props: {
            cart_item_data: {
                type: Object,
                default(){
                    return {};
                }
            }
        },
        methods: {

            deleteFromCart(){
                this.$emit('deleteFromCart');
            },
            incrementItem(){
                this.$emit('incrementItem');
            },
            decrementItem(){
                this.$emit('decrementItem');
            }
        }
    }
</script>

<style lang="scss">
    .v-cart__item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: nowrap;
        box-shadow: 0 0 8px 0 $color-box;
        margin-bottom: 40px;
    }
    .v-cart__img {
        max-width: 70px;
    }
    .quantity__btn {
        width: 26px;
        padding: $padding/2!important;
        border-radius: 50%!important;
    }
</style>