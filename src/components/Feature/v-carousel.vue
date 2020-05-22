<template>
    <section class="v-carousel-wrapper">
        <div
                :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%' }"
                class="v-carousel"
        >
            <vCarouselItem
                    v-for="slider in sliders"
                    :key="slider.id"
                    :slider="slider"

            />
        </div>
        <div class="pagination">
            <button
                    @click="prevSlide"
                    class="btn"
            >Prev</button>
            <button
                    @click="nextSlide"
                    class="btn"
            >Next</button>
        </div>
    </section>
</template>

<script>
    import vCarouselItem from './v-carousel-item'
    export default {
        name: "v-carousel",
        components: {
          vCarouselItem
        },
        data() {
            return {
                sliders: [
                    { id:1, name: 'img1', img: 'img1.jpg'},
                    { id:2, name: 'img2', img: 'img2.jpg'},
                    { id:3, name: 'img3', img: 'img3.jpg'},
                    { id:4, name: 'img4', img: 'img4.jpg'},
                    { id:5, name: 'img5', img: 'img5.jpg'},
                ],
                currentSlideIndex: 0,
                interval: 2000
            }
        },
        methods: {
            prevSlide(){
                if(this.currentSlideIndex > 0){
                    this.currentSlideIndex--
                } else {
                    this.currentSlideIndex = this.sliders.length -1
                }
            },
            nextSlide(){
                if(this.currentSlideIndex == this.sliders.length - 1) {
                    this.currentSlideIndex = 0
                }else {
                    this.currentSlideIndex++
                }

            }
        },
        mounted() {
            if(this.interval > 0){
                let vm = this;
                setInterval(function () {
                    vm.nextSlide()
                }, vm.interval)
            }
        }
    }
</script>

<style lang="scss">
    .v-carousel-wrapper {
        margin: 0 auto 40px;
        max-width: 500px;
        overflow: hidden;
    }
    .v-carousel {
        display: flex;
        justify-content: flex-start;
        transition: all ease .5s;
    }
    .pagination {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>