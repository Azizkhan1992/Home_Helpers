<template>
    <div class="homePhotos mt-24">
        <div class="photosWr">
            <div class="photoItems" v-for="photo, idx in photos" :key="idx" @click="getImg(idx, photo)">
            <img :src="require(`@/assets/Images/InnerPage/${photo}`)" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'home-photos',
    props:{
        photos: {
            type: Array,
            default: () => []
        }
    },
    methods:{
        getImg(id){
            this.$router.push({path: `/inner-photo-slider/${id}`, query: {photos: this.photos}})
            // console.log(id)
        }
    }
}
</script>
<style lang="scss">
.homePhotos{
    width: 100%;

    .photosWr{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, calc(20% - 12px));
        grid-template-rows: auto;
        grid-row-gap: 12px;
        grid-column-gap: 12px;

        .photoItems{
            border-radius: 4px;
            cursor: pointer;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 4px;
            }


            &:nth-child(1){
                grid-column: 1/3;
                grid-row: 1/1;
                width: 100%;
                height: 175px;
            }
            &:nth-child(2){
                grid-column: 3/6;
                grid-row: 1/3;
                width: 100%;
                height: 360px;
            }
            &:nth-child(3){
                grid-column: 1/3;
                grid-row: 2/2;
                width: 100%;
                height: 175px;
            }
            &:nth-child(4){
                grid-column: 1/1;
                grid-row: 3/3;
                width: 100%;
                height: 120px;
            }
            &:nth-child(5){
                grid-column: 2/2;
                grid-row: 3/3;
                width: 100%;
                height: 120px;
            }
            &:nth-child(6){
                grid-column: 3/3;
                grid-row: 3/3;
                width: 100%;
                height: 120px;
            }
            &:nth-child(7){
                grid-column: 4/4;
                grid-row: 3/3;
                width: 100%;
                height: 120px;
            }
            &:nth-child(8){
                grid-column: 5/5;
                grid-row: 3/3;
                width: 100%;
                height: 120px;
            }
        }
    }
}
</style>