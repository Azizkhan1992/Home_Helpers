<template>
    <div class="roomComfort">
        <div class="comfortWr">
            <div class="comfortItem">
                <Icons icon="parking" color="#262626" stroke="#262626"/>
                <p class="descP">Бесплатная парковка</p>
            </div> 
            <div class="comfortItem">
                <Icons icon="check" color="#262626" stroke="#262626"/>
                <p class="descP">Бассейн</p>
            </div>
            <div class="comfortItem">
                <Icons icon="check" color="#262626" stroke="#262626"/>
                <p class="descP">Ресторан</p>
            </div>
            <div class="comfortItem">
                <Icons icon="snow" stroke="#262626"/>
                <p class="descP">Кондиционер</p>
            </div>
            <div class="comfortItem">
                <Icons icon="bath" color="#262626" stroke="#262626"/>
                <p class="descP">Собственная ванная комната</p>
            </div>
            <div class="comfortItem">
                <Icons icon="eye" stroke="#262626"/>
                <p class="descP">Вид из окна</p>
            </div>
            <div class="comfortItem">
                <Icons icon="wifi" color="#262626" stroke="#262626"/>
                <p class="descP">Бесплатный Wi-Fi</p>
            </div>
            <div class="comfortItem">
                <Icons icon="check" color="#262626" stroke="#262626"/>
                <p class="descP">Душ</p>
            </div>
            <div class="comfortItem">
                <Icons icon="fitnes" color="#262626" stroke="#262626"/>
                <p class="descP">Фитнес-центр</p>
            </div>
            <div class="comfortItem">
                <Icons icon="check" color="#262626" stroke="#262626"/>
                <p class="descP">Мини-бар</p>
            </div>
        </div>
    </div>
</template>
<script>
import Icons from '../icons.vue';

export default {
    name: "room-comfort",
    components: { Icons }
}
</script>
<style lang="scss">
.roomComfort{
    width: 100%;

    .comfortWr{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        row-gap: 12px;
        justify-content: space-between;

        .comfortItem{
            min-width: fit-content;
            width: calc(20% - 24px);
            display: flex;
            align-items: center;
            column-gap: 8px;
            padding: 8px 12px;
            box-sizing: border-box;
            border: 1.5px solid #e7e7e7;
            border-radius: 4px;
            justify-content: center;
        }
    }
}
</style>