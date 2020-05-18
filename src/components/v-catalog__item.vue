<template>
    <div class="v-catalog__item">
        <img class="v-catalog__img" :src="require('../assets/img/'+ product_data.image)" alt="">
        <p class="v-catalog__text">Name: {{product_data.name}}</p>
        <p class="v-catalog__text">Price: {{product_data.price}} RUB</p>
        <p class="v-catalog__text">Article: {{product_data.article}}</p>
        <p class="v-catalog__text">Category: {{product_data.category}}</p>
        <button
                class="v-catalog__btn btn"
                @click="sendDataToParent"
        >Add to cart</button>
    </div>
</template>

<script>
    export default {
        name: "v-catalog__item",
        props: {
            product_data: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        methods: {
            sendDataToParent(){
                this.$emit('sendArticle', this.product_data.article)
            }
        }
    }
</script>

<style lang="scss">
    .v-catalog__item {
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 $color-box;
        padding: $padding*2;
        margin-bottom: $margin*2;
    }
    .v-catalog__img {
        max-width: 100px;
    }

</style>