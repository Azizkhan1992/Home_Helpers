<template>
    <div class="mostComforts mt-64">
        <h1 class="commonP">Самые популярные удобства и услуги</h1>
        <div class="mostCWr mt-24">
            <div class="comfortItem">
                <Icons icon="swimming" size="large" color="#008009" stroke="#008009"/>
                <p class="descP">1 бассейн</p>
            </div>
            <div class="comfortItem">
                <Icons icon="fitnes" size="32" color="#fff" stroke="#008009"/>
                <p class="descP">Фитнес-центр</p>
            </div>
            <div class="comfortItem">
                <Icons icon="roomSer" size="32" color="#fff" stroke="#008009"/>
                <p class="descP">Доставка еды и напитков в номер</p>
            </div>
            <div class="comfortItem">
                <Icons icon="parking1" size="32" color="#008009" stroke="#008009"/>
                <p class="descP">Бесплатная парковка</p>
            </div>
            <div class="comfortItem">
                <Icons icon="bar" size="32" color="#008009" stroke="#008009"/>
                <p class="descP">Хороший завтрак</p>
            </div>
        </div>
    </div>
</template>
<script>
import Icons from '../icons.vue';

export default{
    name: "most-comforts",
    components: { Icons }
}
</script>
<style lang="scss">
.mostComforts{
    width: 100%;

    .mostCWr{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        column-gap: 24px;

        .comfortItem{
            width: fit-content;
            padding: 4px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            column-gap: 4px;

            p{
                margin-top: 0;
            }
        }
    }
}
</style>