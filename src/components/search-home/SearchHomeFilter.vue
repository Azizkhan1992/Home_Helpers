<template>
    <div class="searchFilters">
        <CommonFilter/>
        <AllFilters/>
    </div>
</template>
<script>
import CommonFilter from './CommonFilter.vue';
import AllFilters from './AllFilters.vue';
export default{
    name: 'search-filter',
    components: {CommonFilter, AllFilters},
}
</script>
<style lang="scss">
.searchFilters{
    width: calc(30% - 12px);
    height: fit-content;
}
</style>