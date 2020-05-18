<template>
    <section class="v-catalog">
        <h2>{{title}}</h2>
        <div class="v-catalog__list">
            <vCatalogItem
                v-for="product in PRODUCTS"
                :key="product.article"
                :product_data="product"
                @sendArticle="showChildArticleInConsole"
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
                'PRODUCTS'
            ])
        },
        methods: {
            showChildArticleInConsole(data){
                console.log(data);
            },
            ...mapActions([
                'GET_PRODUCTS_FROM_API'
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
    text-align: center;
        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
    }

</style>