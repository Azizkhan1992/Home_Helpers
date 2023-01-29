<template>
    <div class="select-home">
            <div class="select-district" v-if="isAddress">
                <input type="search" v-model="searchForm.place" class="distInp" placeholder="Куда вы хотите поехать?">
                <span class="errorPlace" v-if="isPlace">Чтобы начать поиск, введите направление.</span>
            </div>
            <div class="select-time" @click.stop="datepickerActive" :class="isAddress ? 'minSelW' : 'maxSelW'">

                <div class="default-date">
                    <Icons icon="calendar"/>
                    <span>{{ defaultStartDate }} - {{ defaultEndDate }}</span>
                </div>

                <AppDatepicker
                :datepickerActive="isDatePicker"
                @date="pickerDate"
                />
            </div>

            <div class="select-young" :class="isAddress ? 'minYongW' : 'maxYongW'">
                <div class="default-young" @click.stop="humansNumActive">
                    <Icons icon="human" stroke="#262626" color="#262626"/>
                    <span>{{ humansNum }} взрослых - без детей - {{ numers }} номер</span>
                </div>

                <SelectHumansNum
                 v-if="isHumansNum"
                 :humans="humansNum"
                 :numers="numers"
                 :childs="childs"
                 @humansSub="humansSub"
                 @numersSub="numersSub"
                 @childsSub="childsSub"
                 />
            </div>


            <DropDown :options="currencyMoney" :active-option="defaultCur" :is-currency="true"/>

            <button class="price-btn" :class="isAddress ? 'minPrBtn' : 'maxPrBtn'" @click="searchHome">Проверить цены</button>

        </div>
</template>
<script>
import Icons from '../icons.vue';
import AppDatepicker from '../AppDatepicker.vue';
import SelectHumansNum from '../SelectHumansNum.vue';
import DropDown from '../commons/dropDown.vue';
export default{
    name: 'home-filter',
    components: { Icons, AppDatepicker, SelectHumansNum, DropDown },
    props:{
        isAddress: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            isDatePicker: false,
            defaultStartDate: 'Заезд',
            defaultEndDate: 'Отъезд',
            checker: 1,
            humansNum: 2,
            numers: 1,
            childs: 0,
            isHumansNum: false,
            isPlace: false,

            currencyMoney: [
                {id: 1, name: 'UZS'},
                {id: 2, name: 'Rubl'},
                {id: 3, name: 'USD'}
            ],
            defaultCur: {id: 1, name: 'UZS'},

            searchForm:{
                place: '',
                startDate: '',
                endDate: '',
                humansNum: '',
                childsNum: '',
                numersNum: ''
            }
        }
    },
    methods: {
        pickerDate(data){
            if(this.checker == 1){
                this.defaultStartDate = data
                this.checker = ''
            }else{
                this.defaultEndDate = data
                this.checker = 1
            }
            // console.log(temp)
    },
    searchHome(){
        // console.log(this.searchForm)
        if(this.searchForm.place == ''){
            this.isPlace = true
        }else{
            this.searchForm.startDate = this.defaultStartDate
            this.searchForm.endDate = this.defaultEndDate

            this.$router.push({path: '/search-home-page', query: this.searchForm})
            // let date = this.dateChecker(this.searchForm.startDate, this.searchForm.endDate)
            
            
            // console.log(date)
        }
    },
    
    defaults(){
        const check = this.$store.state.checker
        // console.log(check)
        if(check == false){
            this.isDatePicker = false
            this.isHumansNum = false
        }
    },
    datepickerActive(){
        this.isDatePicker = !this.isDatePicker
        this.isHumansNum = false
        this.$store.commit('changeChecker', this.isDatePicker)
    },
    humansNumActive(){
        this.isHumansNum = !this.isHumansNum
        this.isDatePicker = false
        this.$store.commit('changeChecker', this.isHumansNum)
    },
    humansSub(val){
        // console.log(val)
        this.humansNum = val
    },
    numersSub(val){
        this.numers = val
    },
    childsSub(val){
        this.childs = val
        // console.log(this.childs)
    }
    }
}
</script>
<style lang="scss">

$white: #fff;
$primT: #0071c2;
$bcolor: #aeaeae;
$primB: #0071c2;
$primH: #00487a;

.select-home{
            width: 100%;
            height: 52px;
            position: absolute;
            left: 0;
            top: -50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 4px;
            box-sizing: border-box;
            background-color: #febb02;
            border-radius: 4px;
            column-gap: 4px;
            z-index: 101;

            .select-district{
                width: calc(25% - 4px);
                height: 100%;
                position: relative;

                span.errorPlace{
                    display: flex;
                    width: 300px;
                    height: fit-content;
                    font-size: 0.85rem;
                    line-height: 18px;
                    color: $white;
                    border-radius: 4px;
                    position: absolute;
                    top: 48px;
                    left: 6px;
                    background: red;
                    padding: 6px;
                    box-sizing: border-box;

                    &::before{
                        content: '';
                        width: 0;
                        height: 0;
                        border-left: 10px solid transparent;
                        border-right: 10px solid transparent;
                        border-bottom: 10px solid red;
                        position: absolute;
                        bottom: 100%;
                    }
                }

                .distInp{
                    width: 100%;
                    height: 100%;
                    border-radius: 4px;
                    border: 0;
                    padding: 12px;
                    box-sizing: border-box;

                    &:hover{
                        border: 1px solid $bcolor;
                    }

                    &:focus{
                        outline: none;
                        border: 1px solid $bcolor;
                    }
                }
            }

            .select-time{
                height: 100%;
                position: relative;

                &.minSelW{
                    width: calc(20% - 4px);
                }
                &.maxSelW{
                    width: calc(30% - 4px);
                }

                .default-date{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: $white;
                    border-radius: 4px;
                    column-gap: 12px;
                }
            }
            .select-young{
                height: 100%;
                position: relative;

                &.minYongW{
                    width: calc(30% - 4px);
                }
                &.maxYongW{
                    width: calc(40% - 4px);
                }

                .default-young{
                    width: 100%;
                    height: 100%;
                    background: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    border-radius: 4px;
                    cursor: pointer;
                }
            }

            button.price-btn{
                height: 100%;
                border-radius: 4px;
                border: 0;
                background: $primB;
                font-size: 1.25rem;
                line-height: 28px;
                font-weight: 500;
                color: #fff;
                cursor: pointer;

                &.minPrBtn{
                    width: calc(20% - 4px);
                }
                &.maxPrBtn{
                    width: calc(25% - 4px);
                }

                &:hover{
                    background: $primH;
                }
            }
        }

        @media screen and (max-width: 899px) {
            .select-home{
                position: relative;
                top: 12px;
                height: fit-content;
                flex-direction: column;
                row-gap: 12px;

                .select-district{
                    width: 100%;
                }

                .select-time{
                    width: 100% !important;
                }

                .select-young{
                    width: 100% !important;
                }

                .dropContent{
                    width: 100%;
                    height: 24px;

                    .dropWr{
                        .dropSec{
                            top: 100%;
                        }
                    }
                }

                .price-btn{
                    width: 100% !important;
                }
            }
        }
</style>