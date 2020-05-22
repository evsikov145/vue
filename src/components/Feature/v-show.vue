<template>
    <section class="v-show">
        <button @click="textShow">Show / Hide</button>
        <p v-if="isVisible">Ясность нашей позиции очевидна: сплочённость команды профессионалов создаёт предпосылки для как самодостаточных, так и внешне зависимых концептуальных решений. Принимая во внимание показатели успешности, дальнейшее развитие различных форм деятельности однозначно фиксирует необходимость анализа существующих паттернов поведения. </p>
        <p v-else>Разнообразный и богатый опыт говорит нам, что существующая теория прекрасно подходит для реализации форм воздействия.</p>
    </section>
</template>

<script>
    export default {
        name: "v-show",
        data(){
            return{
                isVisible: false
            }
        },
        methods: {
            textShow(){
                this.isVisible = !this.isVisible;
            }
        }
    }
</script>

<style scoped>
    .v-show {
        margin-bottom: 40px;
    }
</style>