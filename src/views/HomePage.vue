<template>
    <div class="home">
        <div class="home-page">
        <HomeFilter :is-address="true"/>
        <common-slider :title="title" :slider="oneSlider"/>
        <SliderInSlider :slider="allPlaces" :title="placeTitle"/>
        </div>
    </div>
</template>
<script>
import HomeFilter from '@/components/home-page/HomeFilter.vue';
import CommonSlider from '@/components/commons/commonSlider.vue';
import SliderInSlider from '@/components/commons/SliderInSlider.vue';
export default{
    name: 'home-helpers', 
    components: {HomeFilter, CommonSlider, SliderInSlider},
    data(){
        return{
            title: "Поиск по типу размещения",
            oneSlider: this.$store.state.searchByType,
            placeTitle: 'Ищете идеальное жилье?',
            allPlaces: this.$store.state.allPlaces
        }
    },
}
</script>
<style lang="scss">
.home-page{
    position: relative;
}
</style>