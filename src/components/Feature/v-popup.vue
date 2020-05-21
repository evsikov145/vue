<template>
    <section class="v-popup" ref="popup">
        <div class="v-popup__main">
            <header class="v-popup__header">
                <span>{{popupTitle}}</span>
                <span @click="closePopup"><i class="material-icons">close</i></span>
            </header>
            <div class="v-popup__content">
                <slot></slot>
            </div>
            <footer class="v-popup__footer">
                <button
                        @click="rightBtnAction"
                        class="btn btn__submit"
                >{{rightBtnTitle}}</button>
                <button
                        class="btn"
                        @click="closePopup"
                >Close</button>
            </footer>
        </div>
    </section>
</template>

<script>
    export default {
        name: "v-popup",
        props: {
            popupTitle: {
                type: String,
                default() {
                    return "Title";
                }
            },
            rightBtnTitle: {
                type: String,
                default(){
                    return 'Ok'
                }
            }
        },
        methods: {
            closePopup(){
                this.$emit('closePopup');
            },
            rightBtnAction(){
                this.$emit('rightBtnAction');
            }
        },
        mounted(){
            let ctx = this;
            document.addEventListener('click', function (item) {
                if(item.target == ctx.$refs['popup']){
                    ctx.closePopup();
                }
            })
        }
    }
</script>

<style lang="scss">
    .v-popup {
        padding: $padding*2;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        &__main {
            max-width: 400px;
            margin: 0 auto;
            background: white;
            width: 100%;
        }
        &__header,
        &__footer{
            padding: $padding*2;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__content {
            padding: $padding*2;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        i {
            cursor: pointer;
        }

    }

</style>