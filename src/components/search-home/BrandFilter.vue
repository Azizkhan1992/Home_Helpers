<template>
    <div class="brandFilter">
        <h3 class="commonP">Бренды</h3>

        <Checker :text="'Wyndham Hotels & Resorts'"/>
        <Checker :text="'InterContinental Hotels & Resorts'"/>
        <Checker :text="'Hilton Hotels & Resorts'"/>
        <Checker :text="'Hyatt Regency'"/>
        <Checker :text="'Radisson Individuals'"/>
    </div>
</template>
<script>
import Checker from '../commons/Checker.vue';

export default{
    name: "brand-filter",
    components: { Checker }
}
</script>