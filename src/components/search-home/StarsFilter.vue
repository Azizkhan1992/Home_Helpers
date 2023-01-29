<template>
    <div class="starFilter">
        <h3 class="commonP">Количество звезд</h3>

        <Checker :text="'3 звезды'" :filtered-num="6"/>
        <Checker :text="'4 звезды'" :filtered-num="6"/>
        <Checker :text="'5 звезд'" :filtered-num="2"/>
        <Checker :text="'без звезд'" :filtered-num="45"/>
    </div>
</template>
<script>
import Checker from '../commons/Checker.vue';
export default{
    name: 'star-filter',
    components: {Checker}
}
</script>