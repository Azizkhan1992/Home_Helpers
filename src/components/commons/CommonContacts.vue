<template>
    <div class="common-contacts">
        <button class="mainBtn" v-if="isShowed == false" @click="isShowed = true">Показать телефон</button>
        <button class="mainBtn" v-else @click="isShowed = false">+998956070011</button>
        <button class="mainBtn">Сообщение</button>
    </div>
</template>
<script>
export default{
    name: 'common-contacts',
    data(){
        return{
            isShowed: false
        }
    }
}
</script>
<style lang="scss">
.common-contacts{
    width: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    row-gap: 12px;

    .mainBtn{
        min-width: 168px;
        height: 48px;
    }
}
</style>