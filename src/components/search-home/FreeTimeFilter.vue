<template>
    <div class="freeFilter">
        <h3 class="commonP">Чем заняться в свободное время</h3>
        <Checker :text="'Крытый плавательный бассейн'" :filtered-num="59"/>
        <Checker :text="'Сауна'" :filtered-num="51"/>
        <Checker :text="'Фитнес-центр'" :filtered-num="40"/>
        <Checker :text="'Турецкая баня'" :filtered-num="30"/>
        <Checker :text="'Массаж рук'" :filtered-num="18"/>
        <Checker :text="'Прямая трансляция спортивных мероприятий'" :filtered-num="9"/>
        <Checker :text="'Живая музыка/выступление'" :filtered-num="8"/>
        <Checker :text="'Караоке'" :filtered-num="3"/>
    </div>
</template>
<script>
import Checker from '../commons/Checker.vue';
export default{
    name: "free-time",
    components: {Checker}
}
</script>