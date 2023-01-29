<template>
    <div class="footer-container">
        <div class="footerTop backBB">
            <h1 class="commonT">Сэкономьте время и деньги!</h1>
            <p class="commonP">Подпишитесь, и мы вышлем вам лучшие предложения</p>

            <div class="fEmail mt-12">
                <input type="text" placeholder="Ваш электронный адрес">
                <button class="mainBtn">Подписаться</button>
            </div>
        </div>

        <div class="footerItems">
            <div class="footerBlocks" v-for="block in fLinks" :key="block.id">
                
                <div class="footerItem" v-for="item in block.block" :key="item.id">
                <p class="descP">{{ item.title }}</p>
                </div>


            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'home-footer',
    data(){
        return{
            fLinks: this.$store.state.footer
        }
    },
}
</script>
<style lang="scss">
.footer-container{
    width: 100%;
    position: absolute;
    top: 100%;

    .footerItems{
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(5, calc(20% - 12px));
        grid-template-rows: auto;
        grid-column-gap: 12px;
        padding-bottom: 12px;
        box-sizing: border-box;

        .footerBlocks{
            width: 100%;

            .footerItem{

                p.descP{
                    color: #0071c2;
                    cursor: pointer;

                    &:hover{
                        color: #bc5b01;
                    }
                }
            }
        }
    }

    .footerTop{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 24px 0;
        box-sizing: border-box;

        h1{
            text-align: center;
            color: #fff;
        }

        p{
            text-align: center;
            color: #fff;
        }

        .fEmail{
            width: calc(50% - 12px);
            align-self: center;
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 12px;
            height: 36px;

            input{
                width: calc(80% - 12px);
                height: 100%;
                padding: 8px 12px;
                box-sizing: border-box;
            }
        }
    }
}


@media screen and (min-width: 1440px) {
    .footer-container{

        .footerItems{
            width: 1400px;
        }
    }
}

@media screen and (max-width: 1439px) and (min-width: 1100px) {
    .footer-container{

        .footerItems{
            width: 1040px;
        }
    }
}

@media screen and (max-width: 899px) {
    .footer-container{

        .footerItems{
            width: 300px;
            display: flex;
            flex-direction: row-reverse;
            flex-wrap: wrap;
            row-gap: 24px;

            .footerBlocks{
                width: calc(50% - 12px);
            }
        }
    }
}
</style>