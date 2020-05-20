<template>
    <div class="v-table">
        <div class="v-table__header">
            <p @click="sortByName">Name <i class="material-icons">get_app</i></p>
            <p @click="sortByPointsEarned">Points earned <i class="material-icons">get_app</i></p>
            <p @click="sortByPointsSpent">Points spent <i class="material-icons">get_app</i></p>
            <p @click="sortByDate">Registration date <i class="material-icons">get_app</i></p>
        </div>
        <div class="v-table__body">
            <vTableRow
                    v-for="user in paginatedUsers"
                    :key="user.id"
                    :row_data="user"
            />
        </div>
        <div class="v-table__pagination">
            <div
                    class="page"
                    v-for="(page, index) in pages"
                    :key="page"
                    :class="{'page--selected' : page === pageNumber }"
                    @click="changePage(index)"
            >
                {{page}}
            </div>
        </div>

    </div>
</template>

<script>

    import vTableRow from './v-table-row'

    export default {
        name: "v-table",
        components: {
            vTableRow
        },
        props: {
            users_data: {
                type: Array,
                default: () => {
                    return [];
                }
            },

        },
        data() {
            return {
                usersPerPage: 5,
                pageNumber: 1
            }
        },
        methods: {
            changePage(index){
                this.pageNumber = index + 1;
            },
            sortByName(){
                this.users_data.sort((a,b) => a.name.localeCompare(b.name))
            },
            sortByPointsEarned(){
                this.users_data.sort((a,b) => a.points_earned - b.points_earned)
            },
            sortByPointsSpent(){
                this.users_data.sort((a,b) => a.points_spent - b.points_spent)
            },
            sortByDate(){
                this.users_data.sort((a,b) => a.registration_date.localeCompare(b.registration_date))
            }
        },
        computed: {
            pages(){
                return Math.ceil(this.users_data.length / 5);
            },
            paginatedUsers(){
                let from = (this.pageNumber - 1) * this.usersPerPage;
                let to = from + this.usersPerPage;
                return this.users_data.slice(from, to);
            }
        }
    }
</script>

<style lang="scss">
    .v-table {
        max-width: 900px;
        margin: 0 auto;
    }
    .v-table__header {
        display: flex;
        border-bottom: 1px solid #26ae68;
        p {
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-basis: 25%;
            padding: $padding $padding*2;
            text-align: left;
            margin-bottom: 0;
        }
    }
    .v-table__pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }
    .page {
        padding: $padding;
        border: 1px solid #26ae68;
        margin-right: 10px;
        cursor: pointer;
        &--selected {
            background: #26ae68;
            color: white;
        }
        &:hover {
            background: #26ae68;
            color: white;
        }
    }
</style>