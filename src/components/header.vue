<template>
    <div class="header-container">
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
        <div class="header-title">
            <h1 class="title">Найдите жилье для новой поездки</h1>
            <p>Ищите спецпредложения на отели, дома и другие варианты.</p>
        </div>

        
        </div>
    </div>
</template>
<script>
import Icons from './icons.vue';

export default{
    name: 'home-header',
    components: {Icons},
    data(){
        return{
        }
    },
    methods: {
        goHome(){
            if(this.$route.path !== '/'){
                this.$router.push({path: '/'})
            }
        }
    },
}
</script>

<style lang="scss">

$white: #fff;
$primT: #0071c2;
$bcolor: #aeaeae;
$primB: #0071c2;
$primH: #00487a;

.header-container{
        width: 100%;
        height: fit-content;
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

        .header-title{
            width: 100%;
            height: 230px;
            margin-bottom: 24px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1.title{
                font-size: 3rem;
                line-height: 62px;
                font-weight: 700;
                color: $white;
                margin: 0;
            }
            p{
                font-size: 1.5rem;
                line-height: 32px;
                font-weight: 400;
                color: $white;
            }
        }

        
    }

    @media screen and (max-width: 899px) {
        .header-container{

            .header-wr{
                height: 500px;

                .header-top{
                    flex-direction: column;

                    .top-items{
                        width: 100%;
                        flex-wrap: wrap;
                        row-gap: 24px;

                        .auth{
                            width: 100%;
                        }
                    }
                }

                .header-title{
                    margin-top: 100px;

                    h1.title{
                        font-size: 1.5rem;
                        line-height: 32px;
                    }
                    p{
                        font-size: 1rem;
                        line-height: 24px;
                    }
                }
            }
        }
    }
</style>