<template>
    <div class="dropContent" :class="isCurrency ? 'currencyWr': ''">
        <div class="dropWr">
            <div class="dropMain" @click="changeDrop">
                <p class="descP">{{ activeItem.name }}</p>
            </div>
            <div class="dropSec" :class="isDrop ? 'secActive' : 'secDeactive'">
            <div class="dropItems" :class="item.id == activeItem.id ? 'active' : ''" v-for="item, idx in options" :key="idx" @click="getActive(item)">
            <p class="descP">{{ item.name }}</p>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'drop-down',
    props: {
        options: {
            type: Array,
            default: () => []
        },
        activeOption: {
            type: Object,
            default: () => {}
        },
        isCurrency: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            activeItem: {},
            isDrop: false
        }
    },
    mounted(){
        this.init()
        // console.log(this.activeOption)
    },
    methods: {
        init(){
            this.activeItem = this.activeOption
        },
        getActive(val){
            this.activeItem = val
            // console.log(val)
        },
        changeDrop(){
            this.isDrop = !this.isDrop
        }
    }
}
</script>
<style lang="scss">
.dropContent{
    width: 100%;
    height: 100%;
    position: relative;

    &.currencyWr{
        width: calc(5% - 4px);
    }

    .dropWr{
        width: 100%;
        height: 100%;

        .dropMain{
            width: 100%;
            height: 100%;
            background: #fff;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            p{
                margin: 0;
            }
        }

        .dropSec{
            width: 100%;
            height: fit-content;
            position: absolute;
            top: 52px;
            background: #0071c2;
            border-radius: 4px;
            padding: 4px;
            box-sizing: border-box;
            overflow: hidden;
            transition: 0.33s ease-in-out;
            transform-origin: top;

            &.secDeactive{
                transform: scaleY(0);
            }

            &.secActive{
                transform: scaleY(1);
            }

            .dropItems{
                width: 100%;
                height: fit-content;

                &.active{
                    p{
                        color: #c00;
                        font-weight: 800;
                        cursor: text;
                    }
                }


                p{
                    color: #fff;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>