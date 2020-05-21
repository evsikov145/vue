<template>
    <section class="v-notification">
        <transition-group
            name="v-transition-animate"
            class="messages__list"
        >
            <div
                    class="v-notification__content"
                    v-for="message in messages"
                    :key="message.id"
            >
                <div class="content__text">
                    <span class="notification__name">{{message.name}}</span>
                    <i class="material-icons">check_circle</i>
                </div>
                <div class="content__buttons">
                    <button v-if="rightButtons.length">{{rightButtons}}</button>
                    <button v-if="leftButtons.length">{{leftButtons}}</button>
                </div>
            </div>
        </transition-group>
    </section>
</template>

<script>
    export default {
        name: "v-notification",
        props: {
            messages: {
                type: Array,
                default(){
                    return []
                }
            },
            rightButtons: {
                type: String,
                default() {
                    return '';
                }
            },
            leftButtons: {
                type: String,
                default() {
                    return '';
                }
            },
            timeout: {
                type: Number,
                default(){
                    return 3000;
                }
            }
        },
        methods: {
            hideNotification(){
                let vm = this;
                if(this.messages.length){
                    setTimeout(function () {
                        vm.messages.splice(vm.messages.length - 1, 1)
                    },  vm.timeout);
                }
            },
        },
        watch: {
            messages() {
                this.hideNotification()
            }
        },
        mounted() {
            this.hideNotification()
        }
    }
</script>

<style lang="scss">
    .v-notification {
        position: fixed;
        top: 80px;
        right: 16px;
        z-index: 10;
        .messages__list {

        }
        &__content {
            background: #26ae68;
            padding: $padding*2;
            border-radius: 25px;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 50px;
            margin-bottom: 16px;
        }
    }
    .content__text {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .notification__name {
        margin-right: 20px;
    }
    .v-transition-animate {
        &-enter {
            transform: translateX(120px);
            opacity: 0;
        }
        &-enter-active {
            transition: all .6s ease;
        }
        &-enter-to {
            opacity: 1;
        }
        &-leave {
            height: 50px;
            opacity: 1;
        }
        &-leave-active {
            transition: transform .6s ease, opacity .6s, height .6s .2s;
        }
        &-leave-to{
            height: 0;
            transform: translateX(120px);
            opacity: 0;
        }
        &-move {
            transition: transform .6s ease;
        }
    }

</style>