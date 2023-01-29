<template>
    <div class="header-container search-header">
        <div class="header-wr">
            <div class="header-top">
            <div class="home-logo" @click="goHome">
                <h1>Homehelpers.com</h1>
            </div>
            <div class="top-items">
                <div class="currency-wr">
                    <h1 class="currency">UZS</h1>
                </div>

                <div class="language">
                    <img src="@/assets/Images/header/uzb.png" alt="">
            </div>
            <div class="faq">
                <Icons icon="faq" color="#fff" stroke="#fff"/>
            </div>
            <div class="auth">
                <button class="head-sign-up">Зарегистрировать свой объект</button>
                <button class="head-sign-in">Зарегистрироваться</button>
                <button class="head-account">Войти в аккаунт</button>
            </div>
            </div>
            
        </div>

        
        </div>
    </div>
</template>
<script>
import Icons from '../icons.vue';
export default{
    name: 'search-page-header',
    components: {Icons},

    methods:{
        goHome(){
            this.$router.push({path: '/'})
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
.search-header{
    width: 100%;
    background: #003580;
    z-index: 99;


    .header-wr{
            height: 100%;
            margin: 0 auto; 
            position: relative;

            .header-top{
                width: 100%;
                height: 120px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .home-logo{
                    width: fit-content;

                    h1{
                        font-size: 1.5rem;
                        font-weight: 700;
                        line-height: 160%;
                        letter-spacing: 0.004em;
                        color: $white;
                        cursor: pointer;
                    }
                }

                .top-items{
                    width: 70%;
                    height: fit-content;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .currency-wr{
                        padding: 12px;
                        box-sizing: border-box;
                        cursor: pointer;

                        &:hover{
                            background-color: hsla(0, 0%, 100%, 0.12);
                        }

                        h1.currency{
                            margin: 0;
                            color: $white;
                            font-size: 1rem;
                            font-weight: 500;
                        }
                    }

                    .language{
                        padding: 12px;
                        box-sizing: border-box;
                        width: 48px;
                        height: 48px;
                        cursor: pointer;

                        &:hover{
                            background-color: hsla(0, 0%, 100%, 0.12);
                        }

                        img{
                            width: 100%;
                            border-radius: 20px;
                        }
                    }
                    .faq{
                        width: 48px;
                        height: 48px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 8px;
                        box-sizing: border-box;
                        cursor: pointer;

                        &:hover{
                            background-color: hsla(0, 0%, 100%, 0.12);
                        }

                        .icon{

                            svg{
                                display: flex;
                                align-items: center;
                                justify-content: center;
                            }
                        }
                    }

                    .auth{
                        width: 75%;
                        display: flex;
                        justify-content: space-between;

                        button{
                            padding: 8px;
                            box-sizing: border-box;
                            border-radius: 4px;
                                font-size: 0.85rem;
                                line-height: 20px;
                                font-weight: 600;
                                // letter-spacing: 0.007em;
                                cursor: pointer;

                            &.head-sign-up{
                                width: calc(45% - 8px);
                                background: transparent;
                                border: 1px solid $white;
                                color: $white;

                                &:hover{
                                    background-color: hsla(0, 0%, 100%, 0.12);
                                }
                            }

                            &.head-sign-in{
                                width: calc(30% - 8px);
                                background: $white;
                                color: $primT;
                                border: 0;

                                &:hover{
                                    background-color: hsla(0, 0%, 100%, 0.9);
                                }
                            }

                            &.head-account{
                                width: calc(25% - 8px);
                                background: $white;
                                border: 0;
                                color: $primT;

                                &:hover{
                                    background-color: hsla(0, 0%, 100%, 0.9);
                                }
                            }
                        }
                    }
                }
            }
        }
}
</style>