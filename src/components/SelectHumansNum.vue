<template>
    <div class="selectHumans">
        <div class="humans-wr">
            <div class="adults sel">
                <p>Взрослых</p>
                <div class="selectNum">
                    <button @click="changeHSub" :class="humansNum == 1 ? 'notSub' : ''">-</button>
                    <span>{{ humansNum }}</span>
                    <button @click="changeHAdd">+</button>
                </div>
            </div>
            <div class="childs sel">
                <p>Детей</p>
                <div class="selectNum">
                    <button @click="changeChSub" :class="childsNum == 0 ? 'notSub' : ''">-</button>
                    <span>{{ childsNum }}</span>
                    <button @click="changeChAdd">+</button>
                </div>
            </div>
            <div class="nomers sel">
                <p>Номера</p>
                <div class="selectNum">
                    <button @click="changeNSub" :class="numersLen == 1 ? 'notSub' : ''">-</button>
                    <span>{{ numersLen }}</span>
                    <button @click="changeNAdd">+</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'select-humans',
    props:{
        humans: {
            type: [Number, String],
            default: 2
        },
        numers: {
            type: [Number, String],
            default: 1
        },
        childs: {
            type: [Number, String],
            default: 0
        }
    },
    data(){
        return{
            humansNum: '',
            numersLen: '',
            childsNum: ''
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        init(){
            this.humansNum = this.humans
            this.numersLen = this.numers
            this.childsNum = this.childs
        },
        changeHSub(){
            if(this.humansNum>1){
                this.humansNum--
                this.$emit('humansSub', this.humansNum)
            }
        },
        changeHAdd(){
            this.humansNum++
            this.$emit('humansSub', this.humansNum)
        },
        changeNSub(){
            if(this.numersLen>1){
                this.numersLen--
                this.$emit('numersSub', this.numersLen)
            }
        },
        changeNAdd(){
            this.numersLen++
            this.$emit('numersSub', this.numersLen)
        },
        changeChSub(){
            if(this.childsNum>0){
                this.childsNum--
                this.$emit('childsSub', this.childsNum)
            }
        },
        changeChAdd(){
            this.childsNum++
            this.$emit('childsSub', this.childsNum)
        }
    }
}
</script>
<style lang="scss">
.selectHumans{
    width: 370px;
    height: fit-content;
    position: absolute;
    top: 55px;
    right: 0;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 16px rgb(0, 0, 0/15%);
    padding: 12px 24px;
    box-sizing: border-box;

    .humans-wr{
        width: 100%;

        .sel{
            width: 100%;
            height: fit-content;
            display: flex;
            align-items: center;
            justify-content: space-between;
            

            p{
                width: 35%;
                font-size: 1rem;
                line-height: 20px;
                font-weight: 500;
            }

            .selectNum{
                width: 45%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                column-gap: 12px;

                button{
                    width: 40px;
                    height: 40px;
                    font-size: 1.25rem;
                    color: #0071c2;
                    background: #fff;
                    border-radius: 4px;
                    border: 1px solid #0071c2;
                    cursor: pointer;
                    position: relative;
                    z-index: 10;

                    &::before{
                        content: "";
                        z-index: -1;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                        background: #fff;
                        border-radius: 4px;
                    }

                    &:hover{
                        background: #0071c2;
                    }

                    &.notSub{
                        cursor: not-allowed;
                    }
                }
            }
        }
    }
}
</style>