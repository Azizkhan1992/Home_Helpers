<template>
    <div class="innerHomeSel">
        <div class="selWr">
            <div class="selHeader" :class="isHeader ? 'active' : ''">
            <div class="nomerType num">
                <h3 class="descP">Тип номера</h3>
            </div>
            <div class="nomerAccept num">
                <h3 class="descP">Вмещает</h3>
            </div>
            <div class="nomerPrice num">
                <h3 class="descP">Сегодняшняя цена</h3>
            </div>
            <div class="nomerChoice num">
                <h3 class="descP">На ваш выбор</h3>
            </div>
            <div class="nomerSelect num">
                <h3 class="descP">Выберите номера</h3>
            </div>
            <div class="nomerBooking num"></div>
            </div>

            <div class="selContainer">
                <div class="typeCon con">
                    <div class="typeOne">
                        <div class="oneTitle">
                            <a href="#" class="commonP">Номер-студия Делюкс</a>
                            <div class="oneDesc mt-12">
                                <div class="descTitle">
                                    <p class="descP">1 двуспальная кровать</p>
                                    <Icons icon="dBed" color="#262626" stroke="#262626"/>
                                </div>

                                <ul>
                                    <li class="descP">Студия целиком</li>
                                    <li class="descP">Балкон</li>
                                    <li class="descP">Вид на достопримечательность</li>
                                    <li class="descP">Вид на город</li>
                                    <li class="descP">Кондиционер</li>
                                    <li class="descP">Ванная комната в номере</li>
                                    <li class="descP">Телевизор с плоским экраном</li>
                                    <li class="descP">Звукоизоляция</li>
                                    <li class="descP">Мини-бар</li>
                                    <li class="descP">Бесплатный Wi-Fi</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="typeTwo">
                        <div class="oneTitle">
                            <a href="#" class="commonP">Двухместный номер с 2 отдельными кроватями</a>
                            <div class="oneDesc mt-12">
                                <div class="descTitle">
                                    <p class="descP">2 односпальные кровати</p>
                                    <Icons icon="sBed" color="#262626" stroke="#262626" size="32"/>
                                    <Icons icon="sBed" color="#262626" stroke="#262626" size="32"/>

                                </div>

                                <ul>
                                    <li class="descP">Студия целиком</li>
                                    <li class="descP">Балкон</li>
                                    <li class="descP">Вид на достопримечательность</li>
                                    <li class="descP">Вид на город</li>
                                    <li class="descP">Кондиционер</li>
                                    <li class="descP">Ванная комната в номере</li>
                                    <li class="descP">Телевизор с плоским экраном</li>
                                    <li class="descP">Звукоизоляция</li>
                                    <li class="descP">Мини-бар</li>
                                    <li class="descP">Бесплатный Wi-Fi</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="acceptCon con">
                    <div class="accOneContent">
                        <div class="acceptOne acc d-fr">
                        <Icons icon="human" color="#262626" stroke="#262626"/>
                        <Icons icon="human" color="#262626" stroke="#262626"/>
                    </div>
                    <div class="acceptTwo acc d-fr">
                        <Icons icon="human" color="#262626" stroke="#262626"/>
                        <Icons icon="human" color="#262626" stroke="#262626"/>
                    </div>
                    <div class="acceptThree acc">
                        <Icons icon="human" color="#262626" stroke="#262626"/>
                    </div>
                    </div>
                    <div class="accTwoContent">
                        <div class="acceptOne acc d-fr">
                        <Icons icon="human" color="#262626" stroke="#262626"/>
                        <Icons icon="human" color="#262626" stroke="#262626"/>
                    </div>
                    <div class="acceptTwo acc d-fr">
                        <Icons icon="human" color="#262626" stroke="#262626"/>
                        <Icons icon="human" color="#262626" stroke="#262626"/>
                    </div>
                    <div class="acceptThree acc">
                        <Icons icon="human" color="#262626" stroke="#262626"/>
                    </div>
                    </div>
                </div>
                <div class="priceCon con">
                    <div class="priceOne bor-box">
                        <p class="commonP">UZS 2 700 324</p>
                        <span class="descP">+ налоги и сборы (UZS 90 444)</span>
                    </div>
                    <div class="priceTw bor-box">
                        <p class="commonP">UZS 3 060 291</p>
                        <span class="descP">+ налоги и сборы (UZS 90 444)</span>
                    </div>
                    <div class="priceThree bor-box">
                        <p class="commonP">UZS 2 880 308</p>
                        <span class="descP">+ налоги и сборы (UZS 90 444)</span>
                    </div>
                </div>
                <div class="choiceCon con">
                    <div class="choiceOne bor-box">
                        <div class="oneTitle">
                            <div class="Icon">
                            <Icons icon="bar" color="#262626" stroke="#262626"/>
                        <p class="descB">Превосходный <i class="fontN">завтрак по цене UZS 203 499</i></p>
                        </div>
                        </div>
                        <div class="twoTitle">
                            <div class="Icon">
                                <Icons icon="check" color="#008009" stroke="#008009"/>
                                <p class="descB colorG">ПРЕДОПЛАТА НЕ ТРЕБУЕТСЯ  <i class="fontN"> — платите на месте</i></p>
                            </div>
                        </div>
                        
                    </div>

                    <div class="choiceTwo bor-box">
                        <div class="oneTitle">
                            <div class="Icon">
                                <Icons icon="bar" color="#008009" stroke="#008009"/>
                                <p class="descB colorG">Превосходный завтрак <i class="fontN">включен</i></p>
                            </div>
                        </div>
                        <div class="twoTitle">
                            <div class="Icon">
                                <Icons icon="check" color="#008009" stroke="#008009"/>
                                <p class="descB colorG">ПРЕДОПЛАТА НЕ ТРЕБУЕТСЯ  <i class="fontN"> — платите на месте</i></p>
                            </div>
                        </div>
                    </div>
                    <div class="choiceThree bor-box">
                        <div class="oneTitle">
                            <div class="Icon">
                                <Icons icon="bar" color="#008009" stroke="#008009"/>
                                <p class="descB colorG">Превосходный завтрак <i class="fontN">включен</i></p>
                            </div>
                        </div>
                        <div class="twoTitle">
                            <div class="Icon">
                                <Icons icon="check" color="#008009" stroke="#008009"/>
                                <p class="descB colorG">ПРЕДОПЛАТА НЕ ТРЕБУЕТСЯ  <i class="fontN"> — платите на месте</i></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="selectCon con">
                    <div class="oneSelect bor-box">
                        <DropNomer :options="prices" :option="selected"/>
                    </div>
                    <div class="twoSelect bor-box">
                        <DropNomer :options="prices" :option="selected"/>
                    </div>
                    <div class="threeSelect bor-box">
                        <DropNomer :options="prices" :option="selected"/>
                    </div>
                </div>
                <div class="bookingCon con">
                    <BookingHome :is-book="isSelected" :is-position="isPosition" :selected="selectedNomer"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Icons from '../icons.vue';
import BookingHome from './BookingHome.vue';
import DropNomer from './dropNomer.vue';
import Scroll from '@/mixins/scrollPosition';

export default{
    name: "select-price",
    props: {
        isHeader: {
            type: Boolean,
            default: false
        }
    },
    components: { Icons, DropNomer, BookingHome },
    data(){
        return{
            prices: [
                {id: 0, nomer: 0, currency: '', price: ''},
                {id: 1, nomer: 1, currency: 'UZS', price: '10 860 988'},
                {id: 2, nomer: 2, currency: 'UZS', price: '21 721 975'},
                {id: 3, nomer: 3, currency: 'UZS', price: '32 582 963'},
                {id: 4, nomer: 4, currency: 'UZS', price: '43 443 951'},
                {id: 5, nomer: 5, currency: 'UZS', price: '54 304 939'}
            ],
            selected: {id: 1, nomer: 0, currency: '', price: ''},
            selectedNomer: {},
            isSelected: false,
            isPosition: false
        }
    },
    mixins: [Scroll('scrollY')],
    watch: {
        '$store.state.selectedNomer': function(val){
            // console.log(val)
            this.selectedNomer = val
            if(val.nomer !== 0){
                this.isSelected = true
            }else this.isSelected = false
        },
        'scrollY': function(val){
            // console.log(val)
            if(val>=1450){
                this.isPosition = true
            }else this.isPosition = false
        }
    }
}
</script>
<style lang="scss">
.innerHomeSel{
    width: 100%;
    position: relative;
    .selWr{
        width: 100%;

        .selHeader{
            height: 50px;
            background: #4c76b2;
            z-index: 3999;
            display: flex;
            align-items: center;
            

            .num{
                height: 100%;
                border-right: 1px solid #5bbaff;
                padding: 6px 12px;
            box-sizing: border-box;

            &:last-child{
                border-right: 0;
            }

            h3{
                margin: 0;
                color: #fff;
                font-weight: 700;
                text-align: center;
            }

            &.nomerType{
                width: calc(35% - 4px);

                h3{
                    text-align: start;
                }
            }
            &.nomerAccept{
                width: calc(10% - 4px);
            }
            &.nomerPrice{
                width: calc(15% - 4px);
            }
            &.nomerChoice{
                width: calc(15% - 4px);
            }
            &.nomerSelect{
                width: calc(10% - 4px);
            }
            &.nomerBooking{
                width: calc(15% - 4px);
            }
            }

            &.active{
                position: fixed;
                top: 120px;
            }
        }

        .selContainer{
            width: 100%;
            height: fit-content;
            display: flex;

            .con{
                border-right: 1px solid #5bbaff;
                

                &:last-child{
                    border-right: 0;
                }

                &.typeCon{
                    width: calc(35% - 4px);

                    .typeTwo{
                        width: 100%;
                        min-height: 448px;
                        border-bottom: 2px solid #5bbaff;
                        padding: 6px 12px;
                        box-sizing: border-box;

                        .oneTitle{
                            width: 100%;

                            .oneDesc{
                                width: 100%;

                                ul{
                                    padding: 0;
                                    display: flex;
                                    column-gap: 24px;
                                    row-gap: 12px;
                                    flex-wrap: wrap;
                                    list-style-position: inside;
                                }

                                .descTitle{
                                    width: 100%;
                                    display: flex;
                                    align-items: center;
                                    column-gap: 12px;
                                }
                            }


                            a{
                                color: #4c76b2;
                            }
                        }
                    }

                    .typeOne{
                        width: 100%;
                        min-height: 448px;
                        border-bottom: 2px solid #5bbaff;
                        padding: 6px 12px;
                        box-sizing: border-box;

                        .oneTitle{
                            width: 100%;

                            .oneDesc{
                                width: 100%;

                                ul{
                                    padding: 0;
                                    display: flex;
                                    column-gap: 24px;
                                    row-gap: 12px;
                                    flex-wrap: wrap;
                                    list-style-position: inside;
                                }

                                .descTitle{
                                    width: 100%;
                                    display: flex;
                                    align-items: center;
                                    column-gap: 12px;
                                }
                            }


                            a{
                                color: #4c76b2;
                            }
                        }
                        }
                }
                &.acceptCon{
                    width: calc(10% - 4px);
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    column-gap: 4px;
                    border-bottom: 2px solid #5bbaff;

                    .accOneContent{
                        height: fit-content;
                        padding: 1px;
                        box-sizing: border-box;
                        border-bottom: 2px solid #5bbaff;
                    }

                    .acc{
                        height: 148px;
                        padding: 6px 12px;
                        box-sizing: border-box;
                        border-bottom: 1px solid #5bbaff;


                        &:last-child{
                            border-bottom: 0;
                        }
                    }
                }
                &.priceCon{
                    width: calc(15% - 4px);
                    border-bottom: 2px solid #5bbaff;

                    .bor-box{
                        p{
                            margin-top: 0;
                            margin-bottom: 10px;
                        }
                    }
                }
                &.choiceCon{
                    width: calc(15% - 4px);
                    border-bottom: 2px solid #5bbaff;

                    .choiceOne, .choiceTwo, .choiceThree{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;

                        .Icon{
                            display: flex;
                            column-gap: 4px;
                            // align-items: center;
                        }
                    }
                }
                &.selectCon{
                    width: calc(10% - 4px);
                    border-bottom: 2px solid #5bbaff;

                    .oneSelect{
                        width: 100%;
                    }
                }
                &.bookingCon{
                    width: calc(17% - 4px);
                    position: relative;
                }
            }
        }
    }
}

@media screen and (min-width: 1440px) {
    .selHeader{
        width: 1400px;
    }
}
@media screen and (max-width: 1439px) and (min-width: 1100px) {
    .selHeader{
        width: 1040px;
    }
}

@media screen and (max-width: 1099px) and (min-width: 900px) {
    .selHeader{
        width: 840px;
    }
}

@media screen and (max-width: 899px) and (min-width: 340px) {
    .selHeader{
        width: 300px;
    }
}
</style>