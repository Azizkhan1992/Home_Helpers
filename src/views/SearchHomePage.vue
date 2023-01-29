<template>
    <div class="search">
        <searchHeader/>
        <div class="search-page">
            
        <div class="search-home">
        <SearchHomeFilter/>

        <div class="filtered-items-container">
            <div class="filtered-header">
                <h1 class="commonT">Ташкент: найдено 59 вариантов</h1>

                <div class="map-wr">
                    <button class="mainBtn">Показать на карте</button>
                </div>
            </div>

            <div class="filteredItemsWr mt-64">
                <div class="item-wr" v-for="item, idx in hotels" :key="idx" @click="goToInner">
                    
                        <div class="img-wr">
                            <img :src="require('@/assets/Images/SearchPage/pic/'+ `${item.img}`)" alt="">
                        </div>

                        <div class="descWr">
                            <div class="title-wr">
                                <h4 class="colorP">{{ item.name }}</h4>
                            </div>

                            <div class="priceWr">
                                <p class="descP">{{ item.place }}</p>
                                <span class="descP">{{ filterDis(item.distanceCenter) }}</span>
                                <button class="mainBtn" @click.stop>Показать цены</button>
                            </div>

                            <span class="descP">{{ item.desc }}</span>
                        </div>
                    
                </div>
            </div>

            <div class="searchResItems mt-64">
                <span class="descP">Ташкент: найдено 416 вариантов</span>
            </div>


            <AppPagination/>
        </div>
    </div>
        </div>
    </div>
</template>
<script>
import SearchHomeFilter from '@/components/search-home/SearchHomeFilter.vue';
import searchHeader from '@/components/search-home/searchHeader.vue';
import AppPagination from '@/components/commons/AppPagination.vue';
export default{
    name: 'search-home',
    components: { SearchHomeFilter, searchHeader, AppPagination },
    data(){
        return{
            hotels: this.$store.state.hotels
        }
    },
    methods:{
        
        goToInner(){
            // console.log(this.$route)
            this.$router.push({path: '/inner-page', query: this.$route.query})
        },
        filterDis(val){
            let temp = val.toString().split('.')

            if(temp.length == 1){
                return val.toString() + ' м от центра'
            }else{
                return val.toString() + ' км от центра'
            }
        }
    }
}
</script>
<style lang="scss">
.search-home{
    width: 100%;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    // position: relative;

    .filtered-items-container{
        width: calc(70% - 12px);
        display: flex;
        flex-direction: column;

        .searchResItems{
            width: 100%;
        }

        .filtered-header{
            width: 100%;
            height: fit-content;
            display: flex;
            align-items: center;
            justify-content: space-between;
            

            .map-wr{
                width: fit-content;
                padding: 24px;
                box-sizing: border-box;
                border-radius: 4px;
                background: url('@/assets/Images/SearchPage/pic/map-entry-point.6b01012a.png') no-repeat;
                background-size: cover;

            }
        }

        .filteredItemsWr{
            width: 100%;
            height: fit-content;
            display: flex;
            flex-direction: column;
            row-gap: 24px;
            

            .item-wr{
                width: 100%;
                height: 240px;
                display: flex;
                justify-content: space-between;
                padding: 16px;
            box-sizing: border-box;
            border-radius: 4px;
            border: 1px solid #e7e7e7;

            .img-wr{
                width: calc(30% - 12px);
                height: 100%;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .descWr{
                width: calc(70% - 12px);
                display: flex;
                flex-direction: column;
                row-gap: 12px;

                .title-wr{
                    width: 100%;
                    height: fit-content;
                    display: flex;

                    h4.colorP{
                    cursor: pointer;
                    margin: 0;
                    width: 75%;

                    &:hover{
                        color: #171717;
                    }
                }
                }
            }

            .priceWr{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                p.descP{
                    color: #0071c2;
                }
                span.descP{
                    width: 50%;
                    text-align: start;
                }

            }
            }
        }
    }
}

</style>