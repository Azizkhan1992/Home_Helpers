<template>
    <div class="bookingContainer">
        <div class="defBookingWr" v-if="isBook == false" :class="isPosition ? 'fixActive' : ''">
        <button class="mainBtn">Я бронирую</button>
        <ul>
            <li class="descP">Моментальное подтверждение</li>
            <li class="descP">Отсутствие сборов за бронирование и использование кредитной карты!</li>
        </ul>
        </div>

        <div class="selectedBookingWr" v-else :class="isPosition ? 'fixActive' : ''">
            <div class="selectedBookingWrapper">
                <div class="selectedTitle">
                    <span class="descP">{{ selectedNomer.nomer }} <i class="fontN" v-if="selectedNomer.nomer == 1">номер за</i> <i class="fontN" v-else>номера за</i></span>
                <p class="commonP">{{ selectedNomer.currency }} {{ selectedNomer.price }}</p>
                <span class="descP">+ налоги и сборы (UZS 1 447 107)</span>
                </div>
                <div class="booking">
                    <button class="mainBtn">Я бронирую</button>
                    <p class="descP">Вы перейдете к следующему шагу</p>
                    <ul class="listS">
                    <li class="descP">Моментальное подтверждение</li>
                    <li class="descP">Отсутствие сборов за бронирование и использование кредитной карты!</li>
                </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'booking-home',
    props:{
        isBook: {
            type: Boolean,
            default: false
        },
        isPosition: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Object,
            default: () => {}
        }
    },
    data(){
        return{
            selectedNomer: {}
        }
    },
    watch: {
        'selected': function(val){
            this.selectedNomer = val
        }
    }
}
</script>
<style lang="scss">
.bookingContainer{
    width: 100%;

    .defBookingWr{
        width: 100%;
        padding: 6px 12px;
        box-sizing: border-box;

        &.fixActive{
            width: 150px;
            position: fixed;
            top: 180px;
        }

        ul{
            padding: 0;
            list-style-position: inside;
            display: flex;
            flex-direction: column;
            row-gap: 12px;
        }
    }
    .selectedBookingWr{
        width: 100%;
        background: #e4f4ff;
        

        .selectedBookingWrapper{
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 12px;
            padding: 6px 12px;
            box-sizing: border-box;
        }

        &.fixActive{
            width: 170px;
            position: fixed;
            top: 165px;
        }
    }
}

</style>