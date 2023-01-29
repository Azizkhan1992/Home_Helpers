<template>
    <div class="commonSlider">
        <h1 class="commonT">{{ title }}</h1>
        <div class="cSliderItems">
            <button class="lBtn" @click="moveL" :class="leftCheck ? '' : 'disN'">
                <Icons icon="arrLeft" stroke="#262626"/>
            </button>
            <div class="commonSliderContent">
            
            <div class="sliderWr" v-if="slider.length>0" :style="{'width': (slider.length-1)*100+'%',
        transform: `translateX(${-counter*(100/((slider.length-1)*4))+'%'})`, transition: '0.64s ease-in-out'
        }">
                <div class="slideItems" v-for="item, i in slider" :key="i" :id="item.id"
                :style="{'width': ((100/(slider.length*4))+slideW+'%')}"
                >
                    <div class="imgWR">
                        <img class="imgCov" :src="require('../../assets/Images/Home/slider/'+item.img)" alt="">
                    </div>
                    <div class="sTitle">
                        <p class="commonP">{{ item.name }}</p>
                        <span class="descP">{{ item.summ }}</span>
                    </div>
                </div>
            </div>

            
        </div>

        <button class="rBtn" @click="moveR" :class="rightCheck ? 'disN' : ''">
                <Icons icon="arrRight" stroke="#262626"/>
            </button>
        </div>


        <div class="mSliderItems">
            <div class="mSliderWr" :style="{'width': `${100 * slider.length + '%'}`, transform: `translateX(${-counter * (100/slider.length) + '%'})`, transition: '0.64s ease-in-out'}">
                <div class="mItems" v-for="item, idx in slider" :key="idx"
                @dragstart="drag"
                @dragend="dragLeave"
                @touchstart="drag"
                @touchend="dragLeave"
                >
                    <div class="mImgWr">
                        <img :src="require('../../assets/Images/Home/slider/'+item.img)" alt="">
                    </div>

                    <div class="mTitle">
                        <p class="commonP">{{ item.name }}</p>
                        <span class="descP">{{ item.summ }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Icons from '../icons.vue';

export default {
    name: "common-slider",
    components: { Icons },
    props: {
        title: {
            type: String,
            default: ""
        },
        slider: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return{
            slideW: 0,
            counter: 0,
            leftCheck: false,
            rightCheck: false,
            ItemCount: 1,
            cursorPosition: '',
            initialPosition: '',
            pressed: false
        }
    },
    mounted(){
        this.getSlideW()
        window.addEventListener('resize', this.getSlideW)

        if(this.pressed == true){
            if(this.initialPosition - this.cursorPosition > 12){
                this.moveR
            }
        }
    },
    methods:{
        drag($event){
            this.pressed = false
            this.initialPosition = $event.pageX
        },  
        dragLeave($event){
            this.cursorPosition = $event.pageX
            this.pressed = true
        },
        moveR(){
            if(this.counter<this.slider.length-4){
                this.counter++
                this.rightCheck=false
            }else{
                this.rightCheck = true
            }
        },
        moveL(){
            if(this.counter>0){
                this.counter--
                this.leftCheck = true   
            }else{
                this.leftCheck = false
            }
        },
        getSlideW(){
            if(window.innerWidth < 1440){
                this.slideW = 0.07
            } else {
                this.slideW = 0.09
            }
        }
    },
    watch:{
        'pressed': function(val){
            if(val == true){
            if(this.initialPosition - this.cursorPosition > 24){
                this.moveR()
            }else if (this.initialPosition - this.cursorPosition<24){
                this.moveL()
            }
        }
        },
        'counter': function(val){
            if(val>= this.slider.length-4){
                this.rightCheck = true
            }else{this.rightCheck = false}

            if(val > 0){
                this.leftCheck = true
            }else{this.leftCheck = false}
        }
    }
}
</script>
<style lang="scss">
.commonSlider{
    width: 100%;
    padding-top: 48px;
    box-sizing: border-box;

    .mSliderItems{
        display: none;
    }

    .cSliderItems{
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;

        button{
            position: absolute;
            border: 0;
            padding: 8px 4px 4px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #fff;
            box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
            cursor: pointer;
            z-index: 19;
            top: calc(35% - 8px);
            transition: 0.24s ease-in-out;

            &:hover{
                background: rgba(0, 0, 0, 0.66);

                .icon{
                    svg{
                        path{
                            stroke: #fff;
                        }
                    }
                }
            }

            &.disN{
                display: none;
            }

            &.lBtn{
                left: -16px;
            }

            &.rBtn{
                right: -16px;
            }
        }


        .commonSliderContent{
        width: 100%;
        height: 320px;
        border-radius: 4px;
        overflow: hidden;

        .sliderWr{
            height: 100%;
            display: flex;
            column-gap: 12px;

            .slideItems{
                height: 100%;

                .imgWR{
                    width: 100%;
                    height: calc(70% - 12px);

                    img{
                        height: 100%;
                    }
                    
                }
            }
        }
    }
    }
}

@media screen and (max-width: 899px) {
    .cSliderItems{
        display: none !important;
    }

    .mSliderItems{
            display: block !important;
            width: 100%;
            position: relative;
            overflow: hidden;

            .mSliderWr{
                display: flex;
                column-gap: 12px;

                .mItems{
                    width: calc(7.15% - 24px);

                    .mImgWr{
                        width: 100%;
                        height: calc(75% - 12px);


                        img{
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                }
            }
        }
}
</style>