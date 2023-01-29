<template>
    <div class="homeComfortFilter">
        <h3 class="commonP">Удобства в номере</h3>

        <Checker :text="'Кухня/мини-кухня'" :filtered-num="3"/>
        <Checker :text="'Кондиционер'" :filtered-num="18"/>
        <Checker :text="'Гидромассажная ванна'" :filtered-num="3"/>
        <Checker :text="'Рабочий стол'" :filtered-num="18"/>
        <Checker :text="'Балкон'" :filtered-num="7"/>
        <Checker :text="'Терраса'" :filtered-num="5"/>
        <Checker :text="'Вид из окна'" :filtered-num="15"/>
        <Checker :text="'Телевизор с плоским экраном'" :filtered-num="18"/>
        <Checker :text="'Камин'" :filtered-num="3"/>
    </div>
</template>
<script>
import Checker from '../commons/Checker.vue';

export default{
    name: "home-comfort-filter",
    components: { Checker }
}
</script>