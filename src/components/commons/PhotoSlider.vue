<template>
    <div class="sliderContainer">
        <div class="slider">
            <div class="sliderItemsWr">
                <button class="left" @click="moveL">
                <Icons icon="arrLeft" stroke="#262626"/>
            </button>
            <div class="sliderContent">

            <div class="sliderWr" :style="{'width': photos.length*100+'%', transform: `translateX(${-counter * (100/photos.length) + '%'})`, transition: '0.64s ease-in-out'}">
                


                <div class="sliderItems" v-for="photo, i in photos" :key="i"
                @dragstart="drag"
                @dragend="dragLeave"
                @touchstart="drag"
                @touchend="dragLeave"
                >
                <!-- @mousemove="move"
                @mousedown="grabbed"
                @mouseup="stopped" -->
                    <img :src="require('@/assets/Images/InnerPage/' +photo)" alt="">
                </div>

                
            </div>

            
            </div>

            <button class="right" @click="moveR">
                <Icons icon="arrRight" stroke="#262626"/>
            </button>
            </div>

            <SliderDots :slider="photos" :active-id="activeImg" @changeCounter="changeCounter"/>
        </div>

        <div class="sliderTitle" >
            <div class="exit" @click="goBack">
                <Icons icon="close" stroke="#262626" />
            </div>
            <div class="contacts">
                <CommonContacts/>
            </div>
        </div>


    </div>
</template>
<script>
import Icons from '../icons.vue';
import CommonContacts from './CommonContacts.vue';
import SliderDots from './sliderDots.vue';

export default{
    name: "photo-slider",
    components: { Icons, SliderDots, CommonContacts },
    data(){
        return{
            photos: this.$route.query.photos,
            counter: 0,
            activeImg: this.$route.params.id,
            cursorPosition: '',
            initialPosition: '',
            pressed: false
        }
    },
    mounted() {
        this.initActive()
        if(this.pressed == true){
            if(this.initialPosition - this.cursorPosition > 12){
                this.moveR
            }
        }
    },
    methods:{
        initActive(){
            this.counter = this.activeImg
        },
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
        goBack(){
            this.$router.go(-1)
        },
        moveL(){
            if(this.counter>0){
                this.counter--
            }else this.counter = this.photos.length-1
        },
        moveR(){
            // console.log('Ura')
            if(this.counter<this.photos.length-1){
                this.counter++
            }else this.counter = 0
        },
        changeCounter(val){
            this.counter = val
        }
    },
    watch:{
        'counter': function(val){
            this.activeImg = val
        },
        'pressed': function(val){
            if(val == true){
            if(this.initialPosition - this.cursorPosition > 24){
                this.moveR()
            }else if (this.initialPosition - this.cursorPosition<24){
                this.moveL()
            }
        }
        }
    }
}
</script>
<style lang="scss">
.sliderContainer{
    width: 100%;
    height: fit-content;
    background: rgba(0, 0, 0, 0.3);
    padding: 24px 64px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    .sliderTitle{
        padding: 24px 12px;
        box-sizing: border-box;
        width: calc(30% - 12px);
        display: flex;
        flex-direction: column;
        row-gap: 96px;
        align-items: center;

        .contacts{
            width: 100%;
        }

        .exit{
            width: fit-content;
            align-self: flex-end;
            cursor: pointer;
        }
    }

    .slider{
        width: calc(70% - 12px);
        min-height: 100vh;
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        .sliderItemsWr{
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;


            .sliderContent{
        width: 100%;
        overflow: hidden;

        .sliderWr{
            height: fit-content;
            display: flex;
            align-items: center;

            .sliderItems{
                width: 100%;
                height: fit-content;

                img{
                    width: 100%;
                    object-fit: cover;
                    border-radius: 12px;
                }
            }
        }

        
    }
    button{
            background: transparent;
            border: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            position: absolute;
            z-index: 10;
            background: #fff;
            padding: 8px 4px;
            box-sizing: border-box;
            cursor: pointer;

            

            &:hover{
                svg{
                    path{
                        stroke: #4c76b2;
                    }
                }
            }

            &.left{
                left: 12px;
            }

            &.right{
                right: 12px;
            }
        }
        }
    }
}
</style>