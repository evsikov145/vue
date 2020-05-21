<template>
    <div class="v-select">
        <p
            class="title"
            @click="viewSelectOption"
        >{{selected}}</p>
        <div
                class="options"
                v-if="isOptionVisible || IS_DESKTOP"
        >
            <p
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"
            >
                {{option.name}}
            </p>
        </div>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex'

    export default {
        name: "v-select",
        props: {
            options: {
                type: Array,
                default(){
                    return [];
                }
            },
            selected: {
                type: String,
                default() {
                    return '';
                }
            },
            isExpanded: {
                type: Boolean,
                default(){
                    return false;
                }
            }
        },
        data(){
            return{
                isOptionVisible: false
            }
        },
        methods: {
            viewSelectOption(){
                this.isOptionVisible = !this.isOptionVisible
            },
            selectOption(option){
                this.$emit('select', option);
                this.isOptionVisible = false;
            },
            hideSelect(){
                this.isOptionVisible = false;
            }
        },
        computed: {
          ...mapGetters([
              'IS_MOBILE',
              'IS_DESKTOP'
          ])
        },
        mounted() {
            document.addEventListener('click', this.hideSelect.bind(this), true)
        },
        beforeDestroy() {
            document.removeEventListener('click', this.hideSelect)
        }
    }
</script>

<style lang="scss">
    .v-select {
        text-align: center;
        position: relative;
        width: 100px;
        .title {
            cursor: pointer;
            border: 1px solid #26ae68;
            padding: $padding;
        }
        .options {
            border: 1px solid #26ae68;
            position: absolute;
            top: 45px;
            right: 0;
            width: 100%;
            p {
                margin: 0;
                cursor: pointer;
                &:hover {
                    background: #26ae68;
                }
            }
        }
    }

</style>