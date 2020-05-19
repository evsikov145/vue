<template>
    <section class="v-feature">
        <div class="input">
            <input type="text" v-model="input">
            <p>{{input}}</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: "feature",
        data(){
            return {
                input: ''
            }
        }
    }
</script>

<style lang="scss">
    .v-feature {
        margin-top: 100px;
    }
    .input {
        padding: $padding*2;
        border: 1px dotted #26ae68;
    }

</style>