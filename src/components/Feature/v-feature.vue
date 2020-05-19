<template>
    <section class="v-feature">
        <div class="input">
            <input type="text" v-model="input">
            <p>{{input}}</p>
        </div>
        <vSelect
            :options="optionsSelect"
            @select="optionsSelectResult"
            :selected="selected"
        />
        <p>Selected options goes here: {{selected}}</p>
        <vTable
                :users_data="USERS"
        />
    </section>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import vTable from './v-table'
    import vSelect from './v-select'
    export default {
        name: "feature",
        components: {
            vSelect,
            vTable
        },
        data(){
            return {
                input: '',
                optionsSelect: [
                    {name: 'Option 1', value: 1},
                    {name: 'Option 2', value: 2},
                    {name: 'Option 3', value: 3},
                    {name: 'Option 4', value: 4},
                    {name: 'Option 5', value: 5},
                    {name: 'Option 6', value: 6}
                ],
                selected: 'Select'
            }
        },

        methods: {
            optionsSelectResult(option){
                this.selected = option.name;
            },
            ...mapActions([
                'GET_USERS_FROM_API'
            ])
        },
        computed: {
            ...mapGetters([
                'USERS'
            ])
        },
        mounted() {
            this.GET_USERS_FROM_API();
        }
    }
</script>

<style lang="scss">
    .v-feature {
        margin-top: 100px;
        text-align: center;
    }
    .input {
        padding: $padding*2;
        border: 1px dotted #26ae68;
    }

</style>