<template>
    <div class="page">
        <SearchHeader/>
        <div class="home-page">
            


            <div class="tempWr">
                <div class="leftTemp">
                    <div class="difPrice">
                    <Icons icon="tag" color="#262626"/>
                    <p class="descP">Мы возвращаем разницу в цене</p>
                </div>

                <common-filter/>
                <show-with-map/>
                </div>

                <div class="rightContent">
                    <div class="rightTags">
                        <div class="tagItems" v-for="tag in tags" :key="tag.id">
                            <p class="descP">{{ tag.name }}</p>
                        </div>
                    </div>

                    <show-room/>
                </div>

                <div class="roomContentItems mt-12">
                    <room-comfort/>

                    <div class="roomDesc mt-24">
                        <p class="descP">{{ desc }}</p>

                        <button class="dBtn">Подробнее</button>
                    </div>

                    <MostPopComforts/>
                    <hr/>

                    <div class="innerFilters mt-24">
                        <h1 class="commonT">Наличие мест</h1>
                        <HomeFilter/>
                        <div class="innerSelect mt-88">
                            <h1 class="commonP">Тип размещения:</h1>
                            <div class="inSelWr">
                                <Checker text="Номера" filtered-num="none"/>
                                <Checker text="Люксы" filtered-num="none"/>
                            </div>
                        </div>
                    </div>

                    <div class="selectHomePriceContent mt-24">
                        <SelectHomePrice :is-header="isPosition"/>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import InnerPageTitle from '@/components/inner-page/InnerPageTitle.vue';
import SearchHeader from '@/components/search-home/searchHeader.vue';
import Icons from '@/components/icons.vue';
import CommonFilter from '@/components/search-home/CommonFilter.vue';
import ShowWithMap from '@/components/commons/showWithMap.vue';
import ShowRoom from '@/components/inner-page/ShowRoom.vue';
import RoomComfort from '@/components/inner-page/RoomComfort.vue';
import MostPopComforts from '@/components/inner-page/MostPopComforts.vue';
import HomeFilter from '@/components/home-page/HomeFilter.vue';
import Checker from '@/components/commons/Checker.vue';
import SelectHomePrice from '@/components/inner-page/SelectHomePrice.vue';
import Scroll from '@/mixins/scrollPosition'

export default{
    name: "inner-page",
    components: { SearchHeader, Icons, CommonFilter, ShowWithMap, ShowRoom, RoomComfort, MostPopComforts, HomeFilter, Checker, SelectHomePrice },
    data(){
        return{
            tags: [
                {id: 1, name: 'Информация о варианте и стоимости'},
                {id: 2, name: 'Удобства и услуги'},
                {id: 3, name: 'Условия размещения'}
            ],
            isPosition: false,
            desc: "Вы можете получить Genius-скидку в Roadside by Khorrot! Чтобы сэкономить на этом жилье, просто войдите в аккаунт. Отель Roadside by Khorrot расположен в Ташкенте, в 800 метрах от железнодорожной станции Луначарский Бекати. К услугам гостей ресторан, бесплатная частная парковка, фитнес-центр и бар. Отель расположен примерно в 4,7 км от железнодорожной станции Салор Бекати и в 6,1 км от района Ялангоч. К услугам гостей бесплатный Wi-Fi. Гости могут посещать крытый бассейн, сауну, гидромассажную ванну и хаммам.Во всех номерах есть кондиционер, гостиная зона, телевизор с плоским экраном и спутниковыми каналами, сейф и собственная ванная комната с душем, феном и бесплатными туалетно-косметическими принадлежностями. Из некоторых номеров отеля Roadside by Khorrot можно выйти на балкон. В числе стандартных удобств — чайник. Предоставляются полотенца и постельное белье. В отеле Roadside by Khorrot сервируется завтрак «шведский стол» или халяльный завтрак."
        }
    },
    mixins: [Scroll("scrollY")],
    watch: {
        'scrollY': function(val){
            // console.log(val)
            if(val>= 1450){
                this.isPosition = true
            }else{
                this.isPosition = false
            }
        }
    }
}
</script>

<style lang="scss">
.tempWr{
    width: 100%;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .roomContentItems{
        width: 100%;

        .innerFilters{
            width: 100%;
            height: fit-content;
            position: relative;

            .select-home{
                top: 42px;
            }

            .innerSelect{
                width: 100%;

                .inSelWr{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    column-gap: 24px;

                    .checker-wr{
                        width: fit-content;
                        padding: 0;
                    }
                }
            }
        }

        .selectHomePriceContent{
            width: 100%;
        }

        hr{
            width: 100%;
            height: 1px;
            margin-top: 24px;
            border: none;
            background-color: #e7e7e7;
        }

        .roomDesc{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: 12px;

            
        }
    }


    .rightContent{
        width: calc(70% - 12px);

        .rightTags{
            width: 100%;
            display: flex;
            justify-content: space-between;

            .tagItems{
                min-width: fit-content;
                min-height: 43px;
                width: calc(33% - 12px);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 8px;
                box-sizing: border-box;
                background: #e4f4ff;
                border-radius: 4px;
                cursor: pointer;

                &:hover{

                    p{
                        color: #262626;
                    }
                }

                p{
                margin: 0;
                color: #0071c2;
            }
            }
            
        }
    }

    .leftTemp{
        width: calc(30% - 12px);

        .difPrice{
            width: 100%;
            height: fit-content;
            margin: 0 0 12px 0;
            display: flex;
            align-items: center;
            column-gap: 12px;
            padding: 8px;
            box-sizing: border-box;
            background: #e4f4ff;
            border-radius: 4px;
            cursor: pointer;

            p{
                margin: 0;
            }
        }
    }
}
</style>