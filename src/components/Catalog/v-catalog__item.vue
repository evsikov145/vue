<template>
    <div class="v-catalog__item">
        <img class="v-catalog__img" :src="require('../../assets/img/'+ product_data.image)" alt="">
        <p class="v-catalog__text">Name: {{product_data.name}}</p>
        <p class="v-catalog__text">Price: {{product_data.price}} RUB</p>
        <p class="v-catalog__text">Article: {{product_data.article}}</p>
        <p class="v-catalog__text">Category: {{product_data.category}}</p>
        <button
                class="btn"
                @click="showPopupInfo"
        >Show info</button>
        <button
                class="v-catalog__btn btn"
                @click="addToCart"
        >Add to cart</button>
        <vPopup
            v-if="isInfoPopupVisible"
            @closePopup="closePopup"
            rightBtnTitle="Add to cart"
            :popupTitle="product_data.name"
            @rightBtnAction="addToCart"
        >
            <img class="v-catalog__img" :src="require('../../assets/img/'+ product_data.image)" alt="">
            <div class="info">
                <p class="v-catalog__text">Name: {{product_data.name}}</p>
                <p class="v-catalog__text">Price: {{product_data.price}} RUB</p>
                <p class="v-catalog__text">Article: {{product_data.article}}</p>
                <p class="v-catalog__text">Category: {{product_data.category}}</p>
            </div>

        </vPopup>
    </div>
</template>

<script>
    import vPopup from '../Feature/v-popup'
    export default {
        name: "v-catalog__item",
        components: {
            vPopup
        },
        props: {
            product_data: {
                type: Object,
                default(){
                    return {}
                }
            }
        },
        data(){
            return{
                isInfoPopupVisible: false
            }
        },
        methods: {
            addToCart(){
                this.$emit('addToCart', this.product_data);
            },
            showPopupInfo(){
                this.isInfoPopupVisible = true;
            },
            closePopup(){
                this.isInfoPopupVisible = false;
            }
        },
        mounted() {
            this.$set(this.product_data, 'quantity', 1);
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
    .v-catalog__btn {
        margin-left: 20px;
    }

</style>