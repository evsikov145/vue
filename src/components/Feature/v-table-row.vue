<template>
    <div class="v-table__row">
        <div class="row row__name">
            {{row_data.name}}
        </div>
        <div class="row row__earned">{{row_data.points_earned}}</div>
        <div class="row row__spent">{{row_data.points_spent}}</div>
        <div class="row row__date">{{row_data.registration_date}}</div>
    </div>
</template>

<script>
    export default {
        name: "vTableRow",
        props: {
            row_data: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        }
    }
</script>

<style lang="scss">
    .v-table__row {
        display: flex;
        justify-content: space-around;
    }
    .row {
        text-align: left;
        padding: $padding $padding*2;
        flex-basis: 25%;
    }
</style>