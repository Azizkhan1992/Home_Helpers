<template>
    <div class="itemContainer">
        <div class="carouselWrapper" :style="{'width': `${slider.length * 100 + '%'}`}">
            <!-- , transform: `translateX(${-
            100 / (slider.length) + '%'})`, transition: '1s ease-in-out' -->
            <div class="carouselItems" :style="{'width': `${100/(slider.length) + '%'}`}" v-for="item in slider" :key="item.id" :id="item.id"
            :class="item.id === slider[0].id ? 'hidden-l': '' ||
            item.id === slider[1].id ? 'shown' : '' ||
            item.id !== slider[0].id && item.id !== slider[1].id ? 'hidden-r' : ''
            "
            >
                <img :src="require('@/assets/Images/Home/AlSlider/' + item.img)" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'item-slider',
    props:{
        imgs: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return{
            slider: []
        }
    },
    mounted(){
        this.getSliderItems()
        // console.log(this.slider)
        // console.log(Object.values(this.imgs))
    },
    methods: {
        getSliderItems(){
            this.slider = this.imgs
            this.play()
        },
        play(){
            setInterval(() => {
                this.animation()
            }, 5000)
        },
        animation(){
            let item = this.slider.shift()
            this.slider.push(item)
        }
    }
}
</script>
<style lang="scss">
.itemContainer{
    width: 100%;
    height: calc(70% - 8px);
    overflow: hidden;

    .carouselWrapper{
        height: 100%;
        display: flex;
        transition: 1s ease-in-out;

        .carouselItems{
            height: 100%;
            transition: all 1s ease-in-out;

            &.hidden-l{
                margin-left: -339px;
            }
            &.shown{
                margin: 0;
            }

            &.hidden-r{
                margin-right: -320px;
            }

            img{
                width: 100%;
                height: 100%;
                border-radius: 4px;
                object-fit: cover;
            }
        }
    }
}

@media screen and (max-width: 1439px) and (min-width: 1100px) {
    .carouselWrapper{


        .carouselItems{
            transition: 0.64s ease-in-out;

        &.hidden-l{
            margin-left: -250px !important;
            z-index: 0;
        }

        &.hidden-r{
            margin-right: -250px;
            z-index: 0;
            opacity: 0;

            &:nth-child(3){
                z-index: 9;
                opacity: 1;
            }
        }

        &.shown{
            z-index: 9;
        }
    }
    }
}
</style>