<template>
    <div class="checker-wr">
                <div class="checker" :class="isCheck ? 'checkerActive' : ''" @click="isCheck = !isCheck">
                    <span v-if="isCheck">
                        <img src="@/assets/Images/SearchPage/done.png" alt="">
                    </span>
                </div>

                <p>{{ text }}</p>

                <span :class="filteredNum == 'none' ? 'non' : ''">{{ filteredNum }}</span>
    </div>
</template>
<script>
export default{
    name: 'checker-items',
    props:{
        text: {
            type: String,
            default: 'фильтр'
        },
        filteredNum: {
            type: [Number, String],
            default: 1
        },
        isChecked: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            isCheck: false
        }
    },
    mounted(){
        // console.log(this.text)
        this.getChecker()
    },

    methods: {
        getChecker(){
            this.isCheck = this.isChecked
        }
    }
}
</script>
<style lang="scss">
.checker-wr{
            width: 100%;
            display: flex;
            align-self: center;
            column-gap: 8px;
            padding: 6px 16px;
            box-sizing: border-box;

            span{
                font-size: 0.75rem;
                line-height: 18px;
                font-weight: 400;
                color: #262626;

                &.non{
                    display: none;
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
                border: 1px solid #949494;
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
</style>