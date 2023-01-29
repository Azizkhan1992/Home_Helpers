import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        checker: false,
        checkTitle: false,
        selectedNomer: {},
        selectedInnerImg: {},
        checkInnerImgs: false,

        hotels: [
            {
                name: 'Panarams Tashkent Hotel, a member of Radisson Individuals',
                desc: 'Отель Panarams Tashkent, a member of Radisson Individuals, расположен в Ташкенте, в 2,8 км от железнодорожной станции Салар.',
                grade: 5,
                distanceCenter: 5.3,
                price: 200,
                img: 'panarams.webp',
                place: 'Ташкент',
                address: 'Boykurgon Str 2, Yashnabad district, 10114 Ташкент, Узбекистан'
            },
            {
                name: 'Garnet Hotel Tashkent',
                desc: 'Situated in Tashkent, Garnet Hotel Tashkent offers 3-star accommodation with a terrace, a restaurant and a bar. With free WiFi, this 3-star hotel offers room service and a 24-hour front desk.',
                grade: 5,
                distanceCenter: 5.3,
                price: 240,
                img: 'garnet.webp',
                place: 'Ташкент',
                address: '65 Anorzor, 100053 Ташкент, Узбекистан'
            },
            {
                name: 'Manifa Hotel',
                desc: 'Отель Manifa расположен в Ташкенте, в 1,7 км от Яккасарайского района.',
                grade: 4,
                distanceCenter: 3.4,
                price: 150,
                img: 'manifa.webp',
                place: 'Ташкент',
                address: 'Улмас Умарбеков 20, 100070 Ташкент, Узбекистан'
            },
            {
                name: 'Hilton Tashkent City',
                desc: 'Отель Hilton Tashkent City с баром и террасой расположен в Ташкенте. К услугам гостей ресторан, крытый бассейн и ресторан Pan-Asian на крыше с видом на город.',
                grade: 5,
                distanceCenter: 300,
                price: 300,
                img: 'hilton.webp',
                place: 'Ташкент',
                address: 'улица Ислама Каримова 2, блок 5, 100027 Ташкент, Узбекистан'
            },
            {
                name: 'Asli Makon Hotel',
                desc: 'Отель Asli Makon расположен в Ташкенте, в 3 км от железнодорожной станции «Салар». К услугам гостей ресторан, бесплатная частная парковка и бар.',
                grade: 4,
                distanceCenter: 8.2,
                price: 150,
                img: 'makon.webp',
                place: 'Ташкент',
                address: 'Мирзо-Улугбекский район, Tashkent, Uzbekistan 160Б Mirzo Ulugbek tumani, Buyuk ipak yoli 160B, 100207 Ташкент, Узбекистан'
            },
            {
                name: 'Roadside by Khorrot',
                desc: 'Отель Roadside by Khorrot расположен в Ташкенте, в 800 метрах от железнодорожной станции Луначарский Бекати. К услугам гостей ресторан, бесплатная частная парковка, фитнес-центр и бар.',
                grade: 4,
                distanceCenter: 5.6,
                price: 150,
                img: 'khorrot.webp',
                place: 'Ташкент',
                address: 'Боғишамол кўчаси 95 А, 220913 Ташкент, Узбекистан'
            },
            {
                name: 'Rayyan Hotel & SPA Tashkent',
                desc: 'Спа-отель Rayyan Tashkent с открытым бассейном, бесплатной частной парковкой, фитнес-центром и садом расположен в Ташкенте, в 700 метрах от массива Ялангоч.',
                grade: 3,
                distanceCenter: 9.2,
                price: 100,
                img: "rayyan.webp",
                place: 'Ташкент',
                address: '35, Zulfiya street, Navruz mahallaya, Kibray district, Tashkent region, 111215 Ташкент, Узбекистан'
            },
            {
                name: 'Wyndham Tashkent',
                desc: 'Пятизвездочный отель «Wyndham Ташкент» расположен в центре Ташкента.',
                grade: 4,
                distanceCenter: 2.5,
                price: 120,
                img: 'wyndham.webp',
                place: 'Ташкент',
                address: 'Улица Амир Тимур С4, 7/8, 100000 Ташкент, Узбекистан'
            }
        ],
        searchByType: [
            {
                id: 1,
                name: 'Отели',
                summ: '929 714 отелей',
                img: '1.jpeg'
            },
            {
                id: 2,
                name: 'Апартаменты/квартиры',
                summ: '904 381 апартаменты/квартира',
                img: '2.jpeg'
            },
            {
                id: 3,
                name: 'Курортные отели',
                summ: '18 426 курортных отелей',
                img: '3.jpeg'
            },
            {
                id: 4,
                name: 'Виллы',
                summ: '493 681 вилла',
                img: '4.jpeg'
            },
            {
                id: 5,
                name: 'Коттеджи',
                summ: '539 376 коттеджей',
                img: '5.jpeg'
            },
            {
                id: 6,
                name: 'Дома для отпуска',
                summ: '493 681 дом для отдыха',
                img: '6.jpeg'
            },
            {
                id: 7,
                name: 'Гостевые дома',
                summ: '95 594 гостевых  дома',
                img: '7.jpeg'
            },
            {
                id: 8,
                name: 'Хостелы',
                summ: '16 510 хостелов',
                img: '8.jpeg'
            },
            {
                id: 9,
                name: 'Мотели',
                summ: '12 966 мотелей',
                img: '9.jpeg'
            },
            {
                id: 10,
                name: 'Комплексы для отдыха',
                summ: '5 257 парк-отелей',
                img: '10.jpeg'
            },
            {
                id: 11,
                name: 'Проживание в семье',
                summ: '131 566 вариантов проживания в семье',
                img: '11.jpeg'
            },
            {
                id: 12,
                name: 'Кемпинги',
                summ: '8 518 кемпингов',
                img: '12.jpeg'
            },
            {
                id: 13,
                name: 'Загородные дома',
                summ: '11 094 загородных дома',
                img: '13.jpeg'
            },
            {
                id: 14,
                name: 'Миниатюрные дома',
                summ: '755 миниатюрных домов',
                img: '14.jpeg'
            }
        ],
        allPlaces: [
            {
                id: 1,
                name: 'Ташкент',
                title: 'Hilton Tashkent City',
                imgs: [
                    {
                        id: 1,
                        img: 'tashkent/1.jpg'
                    },
                    {
                        id: 2,
                        img: 'tashkent/2.jpg'
                    },
                    {
                        id: 3,
                        img: 'tashkent/3.jpg'
                    }, 
                    {
                        id: 4,
                        img: 'tashkent/4.jpg'
                    },
                    {
                        id: 5,
                        img: 'tashkent/5.jpg'
                    },
                    {
                        id: 6,
                        img: 'tashkent/6.jpg'
                    },
                    {
                        id: 7,
                        img: 'tashkent/7.jpg'
                    },
                    {
                        id: 8,
                        img: 'tashkent/8.jpg'
                    }
                ]
            },
            {
                id: 2,
                name: 'Бухара',
                title: 'Nodirabegim Hotel',
                imgs: [
                    {
                        id: 1,
                        img: 'bukhara/1.jpg'
                    },
                    {
                        id: 2,
                        img: 'bukhara/2.jpg'
                    },
                    {
                        id: 3,
                        img: 'bukhara/3.jpg'
                    },
                    {
                        id: 4,
                        img: 'bukhara/4.jpg'
                    },
                    {
                        id: 5,
                        img: 'bukhara/5.jpg'
                    },
                    {
                        id: 6,
                        img: 'bukhara/6.jpg'
                    },
                    {
                        id: 7,
                        img: 'bukhara/7.jpg'
                    }
                ]
            },
            {
                id: 3,
                name: 'Самарканд',
                title: 'Wellness Park Hotel Bactria',
                imgs: [
                    {
                        id: 1,
                        img: 'samarkand/1.jpg'
                    },
                    {
                        id: 2,
                        img: 'samarkand/2.jpg'
                    },
                    {
                        id: 3,
                        img: 'samarkand/3.jpg'
                    },
                    {
                        id: 4,
                        img: 'samarkand/4.jpg'
                    },
                    {
                        id: 5,
                        img: 'samarkand/5.jpg'
                    },
                    {
                        id: 6,
                        img: 'samarkand/6.jpg'
                    },
                    {
                        id: 7,
                        img: 'samarkand/7.jpg'
                    },
                    {
                        id: 8,
                        img: 'samarkand/8.jpg'
                    },
                    {
                        id: 9,
                        img: 'samarkand/9.jpg'
                    }
                ]
            },
            {
                id: 4,
                name: 'Хива',
                title: 'Hotel Khiva Palace',
                imgs: [
                    {
                        id: 1,
                        img: 'khiva/1.jpg'
                    },
                    {
                        id: 2,
                        img: 'khiva/2.jpg'
                    },
                    {
                        id: 3,
                        img: 'khiva/3.jpg'
                    },
                    {
                        id: 4,
                        img: 'khiva/4.jpg'
                    },
                    {
                        id: 5,
                        img: 'khiva/5.jpg'
                    },
                    {
                        id: 6,
                        img: 'khiva/6.jpg'
                    },
                    {
                        id: 7,
                        img: 'khiva/7.jpg'
                    },
                    {
                        id: 8,
                        img: 'khiva/8.jpg'
                    },
                    {
                        id: 9,
                        img: 'khiva/9.jpg'
                    },
                    {
                        id: 10,
                        img: 'khiva/10.jpg'
                    },
                    {
                        id: 11,
                        img: 'khiva/11.jpg'
                    }
                ]
            },
            {
                id: 5,
                name: 'Ташкент',
                title: 'Roadside by Khorrot',
                imgs: [
                    {
                        id: 1,
                        img: 'tashkent/9.jpg'
                    },
                    {
                        id: 2,
                        img: 'tashkent/10.jpg'
                    },
                    {
                        id: 3,
                        img: 'tashkent/11.jpg'
                    },
                    {
                        id: 4,
                        img: 'tashkent/12.jpg'
                    },
                    {
                        id: 5,
                        img: 'tashkent/13.jpg'
                    },
                    {
                        id: 6,
                        img: 'tashkent/14.jpg'
                    },
                    {
                        id: 7,
                        img: 'tashkent/15.jpg'
                    },
                    {
                        id: 8,
                        img: 'tashkent/16.jpg'
                    },
                    {
                        id: 9,
                        img: 'tashkent/17.jpg'
                    },
                    {
                        id: 10,
                        img: 'tashkent/18.jpg'
                    },
                    {
                        id: 11,
                        img: 'tashkent/19.jpg'
                    },
                    {
                        id: 12,
                        img: 'tashkent/20.jpg'
                    }
                ]
            },
            {
                id: 6,
                name: 'Фергана',
                title: 'Deluxe Ferghana Hotel',
                imgs: [
                    {
                        id: 1,
                        img: 'ferghana/1.jpg'
                    },
                    {
                        id: 2,
                        img: 'ferghana/2.jpg'
                    },
                    {
                        id: 3,
                        img: 'ferghana/3.jpg'
                    },
                    {
                        id: 4,
                        img: 'ferghana/4.jpg'
                    },
                    {
                        id: 5,
                        img: 'ferghana/5.jpg'
                    },
                    {
                        id: 6,
                        img: 'ferghana/6.jpg'
                    },
                    {
                        id: 7,
                        img: 'ferghana/7.jpg'
                    },
                    {
                        id: 8,
                        img: 'ferghana/8.jpg'
                    },
                    {
                        id: 9,
                        img: 'ferghana/9.jpg'
                    },
                    {
                        id: 10,
                        img: 'ferghana/10.jpg'
                    }
                ]
            },
            {
                id: 7,
                name: 'Бухара',
                title: 'Dera Hotel',
                imgs: [
                    {
                        id: 1,
                        img: 'bukhara/8.jpg'
                    },
                    {
                        id: 2,
                        img: 'bukhara/9.jpg'
                    },
                    {
                        id: 3,
                        img: 'bukhara/10.jpg'
                    },
                    {
                        id: 4,
                        img: 'bukhara/11.jpg'
                    },
                    {
                        id: 5,
                        img: 'bukhara/12.jpg'
                    },
                    {
                        id: 6,
                        img: 'bukhara/13.jpg'
                    },
                    {
                        id: 7,
                        img: 'bukhara/14.jpg'
                    },
                    {
                        id: 8,
                        img: 'bukhara/15.jpg'
                    },
                    {
                        id: 9,
                        img: 'bukhara/16.jpg'
                    },
                    {
                        id: 10,
                        img: 'bukhara/17.jpg'
                    },
                    {
                        id: 11,
                        img: 'bukhara/18.jpg'
                    }
                ]
            },
            {
                id: 8,
                name: 'Чимган',
                title: 'B&B Lake House Hotel',
                imgs: [
                    {
                        id: 1,
                        img: 'chimgan/1.jpg'
                    },
                    {
                        id: 2,
                        img: 'chimgan/2.jpg'
                    },
                    {
                        id: 3,
                        img: 'chimgan/3.jpg'
                    },
                    {
                        id: 4,
                        img: 'chimgan/4.jpg'
                    },
                    {
                        id: 5,
                        img: 'chimgan/5.jpg'
                    },
                    {
                        id: 6,
                        img: 'chimgan/6.jpg'
                    },
                    {
                        id: 7,
                        img: 'chimgan/7.jpg'
                    },
                    {
                        id: 8,
                        img: 'chimgan/8.jpg'
                    },
                    {
                        id: 9,
                        img: 'chimgan/9.jpg'
                    }, 
                    {
                        id: 10,
                        img: 'chimgan/10.jpg'
                    }
                ]
            },
            {
                id: 9,
                name: 'Самарканд',
                title: 'Hilton Garden Inn Samarkand',
                imgs: [
                    {
                        id: 1,
                        img: 'samarkand/10.jpg'
                    },
                    {
                        id: 2,
                        img: 'samarkand/11.jpg'
                    },
                    {
                        id: 3,
                        img: 'samarkand/12.jpg'
                    },
                    {
                        id: 4,
                        img: 'samarkand/13.jpg'
                    },
                    {
                        id: 5,
                        img: 'samarkand/14.jpg'
                    },
                    {
                        id: 6,
                        img: 'samarkand/15.jpg'
                    },
                    {
                        id: 7,
                        img: 'samarkand/16.jpg'
                    }
                ]
            },
            {
                id: 10,
                name: 'Ташкент',
                title: 'Wyndham Tashkent',
                imgs: [
                    {
                        id: 1,
                        img: 'tashkent/21.jpg'
                    },
                    {
                        id: 2,
                        img: 'tashkent/22.jpg'
                    },
                    {
                        id: 3,
                        img: 'tashkent/23.jpg'
                    },
                    {
                        id: 4,
                        img: 'tashkent/24.jpg'
                    },
                    {
                        id: 5,
                        img: 'tashkent/25.jpg'
                    },
                    {
                        id: 6,
                        img: 'tashkent/26.jpg'
                    },
                    {
                        id: 7,
                        img: 'tashkent/27.jpg'
                    },
                    {
                        id: 8,
                        img: 'tashkent/28.jpg'
                    },
                    {
                        id: 9,
                        img: 'tashkent/29.jpg'
                    },
                    {
                        id: 10,
                        img: 'tashkent/30.jpg'
                    },
                    {
                        id: 11,
                        img: 'tashkent/31.jpg'
                    }
                ]
            }
        ],

        footer: [
            {
                id: 1,
                block: [
                    {
                        id: 1,
                        title: "Страны"
                    },
                    {
                        id: 2,
                        title: 'Регионы'
                    },
                    {
                        id: 3,
                        title: 'Города'
                    },
                    {
                        id: 4,
                        title: 'Районы'
                    },
                    {
                        id: 5,
                        title: 'Аэропорты'
                    },
                    {
                        id: 6,
                        title: 'Отели'
                    },
                    {
                        id: 7,
                        title: 'Ориентиры'
                    }
                ]
            },
            {
                id: 2,
                block: [
                    {
                        id: 1,
                        title: 'Дома и апартаменты'
                    },
                    {
                        id: 2,
                        title: 'Апартаменты/квартиры'
                    },
                    {
                        id: 3,
                        title: 'Курортные отели'
                    },
                    {
                        id: 4,
                        title: 'Виллы'
                    },
                    {
                        id: 5,
                        title: 'Хостелы'
                    },
                    {
                        id: 6,
                        title: 'Гостевые дома'
                    }
                ]
            },
            {
                id: 3,
                block: [
                    {
                        id: 1,
                        title: 'Уникальное жилье'
                    },
                    {
                        id: 2,
                        title: 'Все направления'
                    },
                    {
                        id: 3,
                        title: 'Авиабилеты: все направления'
                    },
                    {
                        id: 4,
                        title: 'Идеи для поездки'
                    },
                    {
                        id: 5,
                        title: 'Отзывы'
                    },
                    {
                        id: 6,
                        title: 'Статьи'
                    },
                    {
                        id: 7,
                        title: 'Сообщество путешественников'
                    }
                ]
            },
            {
                id: 4,
                block: [
                    {
                        id: 1,
                        title: 'Прокат автомобилей'
                    },
                    {
                        id: 2,
                        title: 'Поиск авиабилетов'
                    },
                    {
                        id: 3,
                        title: 'Заказ столиков в ресторанах'
                    },
                    {
                        id: 4,
                        title: 'Homehelpers для турагентов'
                    }
                ]
            },
            {
                id: 5,
                block: [
                    {
                        id: 1,
                        title: 'О HomeHelpers'
                    },
                    {
                        id: 2,
                        title: 'Служба поддержки'
                    },
                    {
                        id: 3,
                        title: 'Центр помощи партнерам'
                    },
                    {
                        id: 4,
                        title: 'Careers'
                    },
                    {
                        id: 5,
                        title: 'Устойчивое развитие'
                    },
                    {
                        id: 6,
                        prestitles: 'Пресс-центр'
                    },
                    {
                        id: 7,
                        title: 'Центр знаний по безопасности'
                    },
                    {
                        id: 8,
                        title: 'Для инвесторов'
                    },
                    {
                        id: 9,
                        title: 'Правила и условия'
                    },
                    {
                        id: 10,
                        title: 'Как мы работаем'
                    },
                    {
                        id: 11,
                        title: 'Положение о конфиденциальности и cookie'
                    },
                    {
                        id: 12,
                        title: 'Корпоративные контакты'
                    }
                ]
            }
        ]
    },

    actions: {},

    mutations: {
        changeChecker(state, params){
            state.checker = params
            // console.log(state.checker)
        },
        titleChecker(state, params){
            state.checkTitle = params
        },
        selectNomer(state, params){
            state.selectedNomer = params
        },
        changeInnerImg(state, params){
            state.selectedInnerImg.id = params.id
            state.selectedInnerImg.img = params.img
            if(state.selectedInnerImg !== undefined){
                state.checkInnerImgs = true
            }else state.checkInnerImgs = false
            console.log(state.checkInnerImgs)
        }
    },

    getters: {}
});

export default store;