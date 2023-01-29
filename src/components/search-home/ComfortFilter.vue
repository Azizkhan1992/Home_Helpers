<template>
    <div class="comfort-filter">
        <h3 class="commonP">Удобства</h3>

        <Checker :text="'Парковка'" :filtered-num="18"/>
        <Checker :text="'Ресторан'" :filtered-num="19"/>
        <Checker :text="'Доставка еды и напитков в номер'" :filtered-num="19"/>
        <Checker :text="'Круглосуточная стойка регистрации'" :filtered-num="19"/>
    </div>
</template>
<script>
import Checker from '../commons/Checker.vue';

export default{
    name: "comfort-filter",
    components: { Checker }
}
</script>