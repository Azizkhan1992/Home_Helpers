<template>
    <div class="showRoom mt-12">
        <div class="showRWr">
            <div class="showHeader">
                <div class="titleWr">
                    <h2 class="commonT">{{ hotel.name }}</h2>
                    <button class="backgBtn" @click="changeH"><Icons icon="heart"  :stroke="isHeart ? '#c00' : '#0071c2'"/></button>
                    <button class="backgBtn"><Icons icon="share" color="#0071c2" stroke="none"/></button>
                    <button class="mainBtn">Забронировать</button>
                </div>
                <div class="addressWr">
                    <div class="addressItems">
                        <Icons icon="location" stroke="#0071c2"/>
                        <p class="descP">{{ hotel.address }}</p>
                    </div>
                    <p class="mapAdd">Великолепное расположение — показать на карте</p>
                </div>
            </div>

            <home-photos :photos="homePhotos"/>
        </div>
    </div>
</template>
<script>
import Icons from '../icons.vue'
import HomePhotos from './HomePhotos.vue'
export default {
  components: { Icons, HomePhotos },
    name: 'show-room',
    data(){
        return{
            hotels: this.$store.state.hotels,
            hotel: {},
            isHeart: false,
            homePhotos: [
                '1.jpg',
                '2.jpg',
                '3.jpg',
                '4.jpg',
                '5.jpg',
                '6.jpg',
                '7.jpg',
                '8.jpg'
            ]
        }
    },
    mounted(){
        this.getHotel()
    },
    methods: {
        getHotel(){
            this.hotel = this.hotels[3]  
            // console.log(this.hotel)             
        },
        changeH(){
            setTimeout(() => {
                this.isHeart = !this.isHeart
            }, 300)
        }
    }
}
</script>
<style lang="scss">
.showRoom{
    width: 100%;
    

    .showRWr{
        width: 100%;

        .showHeader{
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 12px;

            .titleWr{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                h2{
                    margin: 0;
                }

                button.backgBtn{
                    width: fit-content;
                    border: 0;
                    background: transparent;
                    cursor: pointer;
                    padding: 8px;
                    box-sizing: border-box;
                    border-radius: 4px;
                    transition: 0.24s ease-in-out;

                    &:hover{
                        background: #e4f4ff;
                    }
                }

                h2{
                    min-width: calc(70% - 8px);
                }
            }

            .addressWr{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                p.mapAdd{
                    margin: 0;
                    color: #0071c2;
                    min-width: calc(45% - 8px);
                    text-align: end;
                    font-size: 0.85rem;
                    line-height: 18px;
                    font-weight: 700;

                    &:hover{
                        text-decoration: solid;
                        text-decoration-line: underline;
                        cursor: pointer;
                    }
                }

                .addressItems{
                    min-width: calc(45% - 8px);
                    display: flex;
                    align-items: center;
                    column-gap: 12px;

                    p.descP{
                        margin: 0;
                        color: #262626;
                        cursor: help;
                        text-decoration: none;
                        text-align: start;
                    }
                }
            }
        }
    }
}
</style>