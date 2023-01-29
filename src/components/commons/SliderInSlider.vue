<template>
    <div class="sliderSlider mt-24" >
        <h1 class="commonT">{{ title }}</h1>
        <div class="sliderInSliderContent">
            <button class="lBtn" @click="moveR" :class="leftCheck ? '' : 'disN'">
                <Icons icon="arrLeft" stroke="#fff"/>
            </button>

            <div class="sliderItemsContent">
                <div class="sliderSliderWr" :style="{'width': (slider.length)*100+'%', transform: `translateX(${-counter*(100/((slider.length)*4))+'%'})`, transition: '0.64s ease-in-out'}">
                <div class="sliderItems" :style="{'width': ((100/(slider.length*4)-subGap)+'%')}" v-for="item, i in slider" :key="i" :id="item.id">

                    <ItemSlider :imgs="item.imgs"/>

                    <h1 class="commonP">{{ item.name }}</h1>
                    <p class="descP">{{ item.title }}</p>

                </div>
            </div>
            </div>

            <button class="rBtn" @click="moveL" :class="rightCheck ? 'disN' : ''">
                <Icons icon="arrRight" stroke="#fff"/>
            </button>
        </div>

        <div class="mSliderinSlider">
            <div class="mSSliderWr">

                <div class="mSliderItemsContent">
                <div class="sliderSliderWr" :style="{'width': (slider.length)*100+'%', transform: `translateX(${-counter*(100/((slider.length) + 1))+'%'})`, transition: '0.64s ease-in-out'}">
                <div class="sliderItems" :style="{'width': ((100/(slider.length)-1)+'%')}" v-for="item, i in slider" :key="i" :id="item.id"
                @dragstart="drag"
                @dragend="dragLeave"
                @touchstart="drag"
                @touchend="dragLeave"
                >

                    <ItemSlider :imgs="item.imgs"/>

                    <h1 class="commonP">{{ item.name }}</h1>
                    <p class="descP">{{ item.title }}</p>

                </div>
            </div>
            </div>


            </div>
        </div>
    </div>
</template>
<script>
import Icons from '../icons.vue';
import ItemSlider from './ItemSlider.vue';
export default{
    name: 'slider-slider',
    components: { Icons, ItemSlider },
    props:{
        slider: {
            type: [],
            default: () =>[]
        },
        title: {
            type: String,
            default: ''
        }
    },
    data(){
        return{
            leftCheck: false,
            rightCheck: false,
            subGap: null,
            counter: 0,
            pressed: false,
            initialPosition: '',
            cursorPosition: ''
        }
    },
    mounted(){
        if(window.innerWidth>1439){
            this.subGap = 0.08
        } else {
            this.subGap = 0.1  
        }
        window.addEventListener('resize', this.watchWin)
    },
    
    methods:{
        drag($event){
            this.pressed = false
            this.initialPosition = $event.pageX
            // console.log('start initial', this.initialPosition)
        },  
        dragLeave($event){
            this.cursorPosition = $event.pageX
            this.pressed = true
            // console.log('end cursor', this.cursorPosition)
        },
        watchWin(){
            if(window.innerWidth>1439){
            this.subGap = 0.08
        } else {
            this.subGap = 0.1 
        }
        },
        moveL(){
            if(this.counter<this.slider.length-4){
                this.counter++
                this.rightCheck=false
            }else{
                this.rightCheck = true
            }
        },
        moveR(){
            if(this.counter>0){
                this.counter--
                this.leftCheck = true   
            }else{
                this.leftCheck = false
            }
        },
    },
    watch:{
        'pressed': function(val){
            if(val == true){
            if(this.initialPosition - this.cursorPosition > 24){
                this.moveL()
            }else if (this.initialPosition - this.cursorPosition<24){
                this.moveR()
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
        },
    }
}
</script>
<style lang="scss">
.sliderSlider{
    width: 100%;

    .mSliderinSlider{
        display: none;
    }

    .sliderInSliderContent{
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;

        button{
                position: absolute;
                cursor: pointer;
                border: 0;
                border-radius: 50%;
                background: rgba(0, 0, 0, 0.64);
                z-index: 19;

                &:hover{
                    background: #fff;

                    .icon{
                        svg{
                            path{
                                stroke: rgba(0, 0, 0, 0.64);
                            }
                        }
                    }
                }

                &.disN{
                    display: none;
                }


                &.lBtn{
                    left: -28px;
                }
                &.rBtn{
                    right: -28px;
                }
            }

        .sliderItemsContent{
            width: 100%;
            overflow: hidden;

            .sliderSliderWr{
            height: 420px;
            display: flex;
            align-items: center;
            column-gap: 12px;
            padding: 4px 1px;
            box-sizing: border-box;

            .sliderItems{
                height: 100%;
                background: #fff;
                box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.12);
                border-radius: 4px;

                h1.commonP{
                    margin: 0;
                    padding: 12px;
                    box-sizing: border-box;
                }
                p.descP{
                    margin: 0;
                    padding: 0 12px;
                    box-sizing: border-box;
                }
            }
        }
        }
    }
}


@media screen and (max-width: 899px) {
    .sliderInSliderContent{
        display: none !important;
    }

    .mSliderinSlider{
        display: block !important;
        width: 100%;
        overflow: hidden;

        .mSSliderWr{

            .mSliderItemsContent{
                
                .sliderSliderWr{
                    display: flex;
                    column-gap: 12px;


                    .sliderItems{

                        .itemContainer{

                            .carouselWrapper{
                                column-gap: 12px;


                                .carouselItems{

                                    &.hidden-l{
                                        margin-left: -280px;
                                        z-index: 0;
                                        opacity: 0;
                                    }

                                    &.hidden-r{
                                        margin-right: -280px;
                                        opacity: 0;
                                        z-index: 0;

                                        &:nth-child(3){
                                            opacity: 1;
                                        }
                                    }

                                    &.shown{
                                        margin-left: 0;
                                        margin-right: 0;
                                        z-index: 9;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>