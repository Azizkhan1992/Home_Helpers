<template>
    <div class="allFilters-container mt-12">
        <h3 class="allTitle commonP">Все фильтры</h3>

        <hr/>
        <PopFilters/>

        <hr/>
        <StarsFilter/>

        <hr/>
        <DistanceFilter/>

        <hr/>
        <FreeTimeFilter/>

        <hr/>
        <ComfortFilter/>

        <hr/>
        <HomeComfortFilter/>

        <hr/>
        <BrandFilter/>

    </div>
</template>
<script>
import PopFilters from './PopFilters.vue';
import StarsFilter from './StarsFilter.vue';
import DistanceFilter from './DistanceFilter.vue';
import FreeTimeFilter from './FreeTimeFilter.vue';
import ComfortFilter from './ComfortFilter.vue';
import HomeComfortFilter from './HomeComfortFilter.vue';
import BrandFilter from './BrandFilter.vue';
export default{
    name: 'all-filters',
    components: { PopFilters, StarsFilter, DistanceFilter, FreeTimeFilter, ComfortFilter, HomeComfortFilter, BrandFilter }
}
</script>

<style lang="scss">
.allFilters-container{
    width: 100%;
    height: fit-content;
    border-radius: 4px;
    border: 1px solid #e7e7e7;

    h3{
        padding: 16px;
        box-sizing: border-box;
        margin: 0;
    }

    hr{
        width: 100%;
        margin: 0;
        border: 1px solid #e7e7e7;
    }
}
</style>