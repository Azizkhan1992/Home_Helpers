<template>
    <div class="paginator mt-12">
        <div class="paginatorWr">
            <div class="pagContainer">
                <button class="pBtn left">
                    <Icons icon="arrLeft" />
                </button>

                <div class="pageNums">
                    <span class="commonP active">1</span>
                    <span class="commonP">2</span>
                    <span class="commonP">3</span>
                    <span class="commonP">4</span>
                    <span class="commonP dots">...</span>
                    <span class="commonP">17</span>
                </div>

                <button class="pBtn right">
                    <Icons icon="arrRight"/>
                </button>
            </div>

            <div class="paginatorTitle">
                <p class="commonP">
                    Показаны 1–25
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import Icons from '../icons.vue';

export default{
    name: "app-pagination",
    components: { Icons }
}
</script>
<style lang="scss">
.paginator{
    width: 100%;
    display: flex;
    align-self: flex-end;
    justify-self: flex-end;

    .paginatorWr{
        width: 100%;
        height: fit-content;
        padding: 8px 12px;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        border: 1px solid #e7e7e7;
        border-radius: 4px;

        .paginatorTitle{
            min-width: calc(20% - 24px);
        }

        .pagContainer{
            width: calc(60% - 24px);
            display: flex;
            align-items: center;
            column-gap: 12px;

            .pageNums{
                width: fit-content;
                display: flex;
                column-gap: 12px;
                align-items: center;

                span{
                    display: flex;
                    padding: 4px 8px;
                    box-sizing: border-box;
                    cursor: pointer;
                    color: #0071c2;
                    border-radius: 4px;

                    &.dots{
                        
                        &:hover{
                            background: transparent;
                            cursor: text;
                        }
                    }

                    &:hover{
                        background: #e4f4ff;
                    }

                    &.active{
                        border: 1px solid #949494;
                        border-radius: 4px;
                        cursor: default;
                        color: #262626;

                        &:hover{
                            background: transparent;
                        }
                    }
                }
            }

            button.pBtn{
                width: fit-content;
                border: 0;
                padding: 8px 4px 4px;
                box-sizing: border-box;
                background: #fff;
                cursor: pointer;
                transition: 0.24s ease-in-out;

                &.left{
                    &:hover{
                        cursor: not-allowed;
                    }
                }

                &.right{
                    &:hover{
                        background: #e4f4ff;
                    }
                }
            }
        }
    }
}
</style>