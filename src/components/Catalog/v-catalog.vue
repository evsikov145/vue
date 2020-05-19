<template>
    <section class="v-catalog">
        <h2>{{title}}</h2>
        <router-link
            :to="{name: 'Cart', params: {cart_data:CART} }"
        >
            <div class="v-catalog__link-cart">
                Cart : {{CART.length}}
            </div>
        </router-link>
        <router-link
                :to="{name: 'Feature' }"
        >
            <div class="v-catalog__link-feature">
                Feature
            </div>
        </router-link>

        <div class="v-catalog__list">
            <vCatalogItem
                v-for="product in PRODUCTS"
                :key="product.article"
                :product_data="product"
                @addToCart="addToCart"
            />
        </div>
    </section>
</template>

<script>
    import vCatalogItem from './v-catalog__item'
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: "v-catalog",
        components: {
            vCatalogItem
        },
        data(){
            return {
                title: "Catalog"

            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART'
            ])
        },
        methods: {
            addToCart(data){
                this.ADD_TO_CART(data);
            },
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]), // для того чтобы обращаться через this
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
                .then((response) => {
                    if(response.data){
                        console.log('Data arrived!');
                    }
                })
        }
    }
</script>

<style lang="scss">
    .v-catalog {
        position: relative;
    text-align: center;
        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
    }
    .v-catalog__link-cart {
        position: absolute;
        top: 0;
        right: 0;
        padding: $padding*2;
        border: 1px solid $color-box;
        cursor: pointer;
    }
    .v-catalog__link-feature {
        position: absolute;
        top: 0;
        left: 0;
        padding: $padding*2;
        border: 1px solid $color-box;
        cursor: pointer;
    }

</style>