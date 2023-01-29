<template>
    <div class="nomerSelect">
        <div class="selectwr">
            <div class="selected" @click="isActive = !isActive">
                <p class="commonP">{{ selectedNom.nomer }}</p>
                <Icons icon="arrDown" size="middle" :class="isActive ? 'active' : 'deactive'"/>
            </div>
            <div class="unSelected" :class="isActive ? 'active' : 'deactive'">
                <div class="selectItems" v-for="item, idx in options" :key="idx" @click="selectNomer(item)">
                <p class="descB num">{{ item.nomer }}</p>
                <p class="descB" v-show="item.currency.length>0">({{ item.currency }})</p>
                <p class="descB">{{ item.price }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Icons from '@/components/icons.vue'
export default{
    name: 'nomer-select',
    components: {Icons},
    props:{
        options: {
            type: Array,
            default: () => []
        },
        option: {
            type: Object,
            default: () => {}
        }
    },
    data(){
        return{
            selectedNom: {},
            isActive: false
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        init(){
            this.selectedNom = this.option
        },
        selectNomer(nomer){
            this.selectedNom = nomer
            this.isActive = false
            this.$store.commit('selectNomer', nomer)
            // this.$emit('selected', nomer)
        }
    }
}
</script>
<style lang="scss">
.nomerSelect{
    width: 100%;

    .selectwr{
        width: 100%;
        position: relative;

        .selected{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 4px 8px;
            box-sizing: border-box;
            cursor: pointer;
            border: 1px solid #262626;
            border-radius: 4px;

            .icon{

                &.deactive{
                    
                    svg{
                        transform: rotate(0);
                        transition: 0.24s ease-in-out;
                    }
                }

                &.active{

                    svg{
                        transform: rotate(180deg);
                        transition: 0.24s ease-in-out;
                    }
                }
            }

            p{
                margin: 0;
            }
        }
        .unSelected{
            width: 180px;
            position: absolute;
            height: fit-content;
            top: 42px;
            border: 1px solid #262626;
            border-radius: 4px;
            z-index: 19;
            background: #fff;
            transform-origin: top;
            overflow: hidden;
            transition: 0.24s ease-in-out;

            &.active{
                transform: scaleY(1);
            }

            &.deactive{
                transform: scaleY(0);
            }

            .selectItems{
                width: 100%;
                height: fit-content;
                padding: 4px 8px;
                box-sizing: border-box;
                display: flex;
                cursor: pointer;
                column-gap: 12px;

                &:hover{
                    background-color: #5bbaff;
                }

                p{

                    &.num{
                        width: 20%;
                    }
                }
            }
        }
    }
}
</style>