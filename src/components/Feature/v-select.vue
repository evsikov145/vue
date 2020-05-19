<template>
    <div class="v-select">
        <p
            class="title"
            @click="viewSelectOption"
        >{{selected}}</p>
        <div
                class="options"
                v-if="isOptionVisible"
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