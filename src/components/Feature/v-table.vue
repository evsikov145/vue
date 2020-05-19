<template>
    <div class="v-table">

    </div>
</template>

<script>

    export default {
        name: "v-table",
        props: {
            users_data: {
                type: Array,
                default: () => {
                    return [];
                }
            }
        }
    }
</script>

<style lang="scss">

</style>