<template>
    <div class="distanceFilter">
        <h3 class="commonP">Ташкент: расстояние от центра</h3>

        <Checker :text="'Меньше 1 км'" :filtered-num="4"/>
        <Checker :text="'Меньше 3 км'" :filtered-num="22"/>
        <Checker :text="'Меньше 5 км'" :filtered-num="37"/>
    </div>
</template>
<script>
import Checker from '../commons/Checker.vue';
export default{
    name: 'distance-filter',
    components: {Checker}
}
</script>