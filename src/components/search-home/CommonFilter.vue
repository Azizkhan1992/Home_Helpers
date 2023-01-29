<template>
    <div class="commonSearch">
        <h1 class="searchTitle">Найти</h1>

        <div class="searchItemsWr">
            <div class="searchP search">
            <label for="searchplace">Место / название объекта</label>
            <div class="searchInp">
                <Icons icon="search"/>
                <input type="text" id="searchplace" :placeholder="searchInfo.place">
            </div>
        </div>

        <div class="searchDate search" @click.stop="datepickerActive">
            <label for="date">Заезд/отъезд</label>
            <div class="default-date" id="date">
                    <Icons icon="calendar"/>
                    <span>{{ searchInfo.startDate }} - {{ searchInfo.endDate }}</span>
                </div>
            <AppDatepicker
                :datepickerActive="isDatePicker"
                @date="pickerDate"
                />
        </div>

        <div class="searchPlace search">
            <div class="default-young" @click.stop="humansNumActive">
                    <span>2 взрослых - без детей - 1 номер</span>
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

        <div class="searchChecklist">
            <div class="homelist mt-12">
                <div class="checker" :class="isHomeChecked ? 'checkerActive' : ''" @click="isHomeChecked = !isHomeChecked">
                    <span v-if="isHomeChecked">
                        <img src="@/assets/Images/SearchPage/done.png" alt="">
                    </span>
                </div>

                <p>Дома и апартаменты целиком</p>

                <Icons icon="faq" size="32" stroke="#262626"/>
            </div>
            <div class="worklist mt-6">
                <div class="checker" :class="isWorkChecked ? 'checkerActive' : ''" @click="isWorkChecked = !isWorkChecked">
                    <span v-if="isWorkChecked">
                        <img src="@/assets/Images/SearchPage/done.png" alt="">
                    </span>
                </div>

                <p>Я путешествую по работе</p>

                <Icons icon="faq" size="32" stroke="#262626"/>
            </div>
        </div>

        <button class="comeBack mt-12">
            Изменить критерии поиска
        </button>
        </div>
    </div>
</template>
<script>
import Icons from '../icons.vue'
import AppDatepicker from '../AppDatepicker.vue'
import SelectHumansNum from '../SelectHumansNum.vue'
export default{
    name: 'common-search',
    components: {Icons, AppDatepicker, SelectHumansNum},
    data(){
        return{
            searchInfo: {
                startDate: '',
                endDate: ''
            },
            isDatePicker: false,
            checker: 1,

            isHumansNum: false,
            humansNum: 2,
            numers: 1,
            childs: 0,
            isHomeChecked: false,
            isWorkChecked: false
        }
    },
    mounted(){
        this.getSearchInfo()
    },
    methods:{
        getSearchInfo(){
            this.searchInfo = this.$route.query
            // console.log(this.searchInfo)
        },
        datepickerActive(){
        this.isDatePicker = !this.isDatePicker
        this.isHumansNum = false
        this.$store.commit('changeChecker', this.isDatePicker)
    },
    pickerDate(data){
            if(this.checker == 1){
                this.searchInfo.startDate = data
                // console.log(this.searchInfo)
                this.checker = ''
            }else{
                this.searchInfo.endDate = data
                this.checker = 1
            }
            // console.log(temp)
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
.commonSearch{
    width: 100%;
    height: fit-content;
    background: #febb02;
    padding: 16px;
    box-sizing: border-box;

    h1.searchTitle{
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 28px;
        color: #262626;
    }

    .searchItemsWr{
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 12px;

        .search{
        width: 100%;
        position: relative;

        label{
            font-size: 0.85rem;
            line-height: 18px;
            font-weight: 400;
            color: #262626;
        }
        .searchInp{
            width: 100%;
            position: relative;
            border-radius: 4px;
            padding: 4px;
            margin-top: 4px;
            box-sizing: border-box;
            display: flex;
            column-gap: 8px;
            background: #fff;
            align-items: center;
            border: 1px solid transparent;

            &:hover{
                border: 1px solid #0071c2;
            }

            &:focus{
                outline: none;
                border: 1px solid #aeaeae;
            }


            input{
                width: 85%;
                height: 36px;
                box-sizing: border-box;
                border: 0;

                &::placeholder{
                    font-size: 1rem;
                    line-height: 24px;
                    font-weight: 500;
                    color: #262626;
                }

                &:focus{
                    outline: none;
                    border: 0;
                }
            }
        }

        .default-date{
                    width: 100%;
                    height: 46px;
                    margin-top: 4px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #fff;
                    border-radius: 4px;
                    column-gap: 12px;
                }

                .default-young{
                    width: 100%;
                    height: 46px;
                    background: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    border-radius: 4px;
                    cursor: pointer;
                }

                .selectHumans{
                    left: 0;
                }
    }

    .searchChecklist{
        width: 100%;
        height: fit-content;

        .homelist{
            width: 100%;
            display: flex;
            align-self: center;
            column-gap: 8px;

            .icon{
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;

                svg{
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    g{
                        display: flex;
                        align-self: center;
                        justify-self: center;
                    }
                }
            }

            p{
                font-size: 0.75rem;
                line-height: 20px;
                font-weight: 400;
                color: #262626;
                margin: 0;
                width: 75%;
            }

            .checker{
                width: 18px;
                height: 18px;
                border-radius: 2px;
                background: #fff;
                padding: 2px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                margin-top: 2px;
                // align-self: center;

                &.checkerActive{
                    border: 1px solid #75bcff;
                }

                span{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    
                }
            }
        }
        .worklist{
            width: 100%;
            display: flex;
            align-self: center;
            column-gap: 8px;

            .icon{
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;

                svg{
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    g{
                        display: flex;
                        align-self: center;
                        justify-self: center;
                    }
                }
            }

            p{
                font-size: 0.75rem;
                line-height: 20px;
                font-weight: 400;
                color: #262626;
                margin: 0;
                width: 75%;
            }

            .checker{
                width: 18px;
                height: 18px;
                border-radius: 2px;
                background: #fff;
                padding: 2px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                margin-top: 2px;
                // align-self: center;

                &.checkerActive{
                    border: 1px solid #75bcff;
                }

                span{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    
                }
            }
        }
    }

    button.comeBack{
        width: 100%;
        height: fit-content;
        padding: 12px;
        box-sizing: border-box;
        background: #0071c2;
        border-radius: 4px;
        color: #fff;
        font-size: 1rem;
        line-height: 20px;
        font-weight: 500;
        cursor: pointer;
        border: 0;
        transition: 0.33s ease-in-out;

        &:hover{
            background: #00487a;
        }
    }
    }
}
</style>