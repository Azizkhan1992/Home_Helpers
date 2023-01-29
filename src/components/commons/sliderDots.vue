<template>
    <div class="sliderDots">
        <div class="dotWr" :style="{'width': slider.length*100 +'%', transform: `translateX(${-activeId * (100/(slider.length*10)) + '%'})`}">
            <div class="dotItems" v-for="dot, i in slider" :key="i" :style="{'width': 100/(slider.length*5) +'%'}" :class="i==activeId ? 'activeItem' : ''" @click="goToSlide(i)">
            <img :src="require('@/assets/Images/InnerPage/'+dot)" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'slider-dots',
    props:{
        slider:{
            type: Array,
            default: () =>[]
        },
        activeId: {
            type: [String, Number],
            default: 0
        }
    },
    mounted(){
        // console.log(this.slider)
    },
    methods: {
        goToSlide(id){
            this.$emit('changeCounter', id)
            // console.log(id)
        }
    }
}
</script>
<style lang="scss">
.sliderDots{
    width: 100%;
    height: 75px;
    background: transparent;
    overflow: hidden;
    border-radius: 4px;

    .dotWr{
        height: 100%;
        display: flex;
        align-items: center;
        column-gap: 10px;

        .dotItems{
            height: 100%;
            display: flex;
            align-items: center;

            &.activeItem{

                img{
                    opacity: 1;
                    cursor: text;
                }
            }

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 4px;
                opacity: 0.3;
                cursor: pointer;

                &:hover{
                    opacity: 1;
                }
            }
        }
    }
}
</style>