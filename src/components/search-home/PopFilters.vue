<template>
    <div class="popFilters">
        <h3 class="commonP">
            Популярные фильтры
        </h3>

        <Checker :text="'5 звезд'" :filteredNum="2"/>
        <Checker :text="'Крытый плавательный бассейн'" :filtered-num="59"/>
        <Checker :text="'Горячий термальный источник'" :filtered-num="1"/>
        <Checker :text="'Спа и оздоровительный центр'" :filtered-num="34"/>
        <Checker :text="'Спа-лаундж/зона для релаксации'" :filtered-num="19"/>
        <Checker :text="'Отели'" :filtered-num="51"/>
    </div>
</template>
<script>
import Checker from '../commons/Checker.vue';
export default {
    name: 'pop-filters',
    components: {Checker}
}
</script>