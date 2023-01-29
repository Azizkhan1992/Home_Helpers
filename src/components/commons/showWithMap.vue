<template>
    <div class="showMap mt-12">
        <div class="mapWr">
            <button class="mainBtn">Показать на карте</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'show-map'
}
</script>
<style lang="scss">
.showMap{
    width: 100%;
    
    .mapWr{
        width: 100%;
        padding: 48px 24px;
        box-sizing: border-box;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url('@/assets/Images/SearchPage/pic/map-entry-point.6b01012a.png');
    }
}
</style>