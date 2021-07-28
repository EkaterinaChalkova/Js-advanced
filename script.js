

































// Vue.component('header-component', { //Этот метод принимает 2 параметра, 1 параметром передается название, 2 парам передаем template: и сюда кладем весь header из html
//     template: `<header class="header">
//     <a class="header-icon">eShop Component</a>
//     <div class="search">
//       <input type="text" class="goods-search" />
//       <button class="search-button" type="button">Искать</button>
//     </div>
//     <button class="header-button" type="button">Корзина</button>
//   </header>`
// })

// Vue.component('card-component', {
//     template: `<div class="card">
//         <h2>{{ goog_props.title }}</h2>
//         <p>{{ good_props.price }}</p>
//     </div>`,
//     props: ['good_props']

// })

// Vue.component('list-component', {
//     template: `<div class="goods-list">
//         <card-component v-for="good of list_props" v-bind:good_props='good'></card-component> 
//     </div>`,
//     props: ['list_props'] //Чтобы передать из дочернего эл-та в родительский, используем механизм props-(массив)входные параметры к нашим данным
// })




// const vue = new Vue({ // Создаем константу вью и вызывает конструктор вью
//     el: '#app', //Здесь указываем настройки для вью, id записывает через решетку, наше приложение будет работать внутри этого эл-та
//     // data(){
//     //     return {
//     //         list:[
//     //             {title:'good1', peice: 20},
//     //             {title:'good2', peice: 30},
//     //             {title:'good3', peice: 40},
//     //             {title:'good4', peice: 50}
//     //         ]
//     //     }
//     // },

//     data: { //Данные нашего приложения.В нем хванятся объект.В этом объекте мы перечисляем переменные, которые будут храниться в памяти нашего приложения
//         name: 'Admin',
//         isModified: false,
//         cart: [],
//         newTitle: '',
//         newPrice: 0,
//         rectangle: {
//             x: 10,
//             y: 15
//         }, //cвойство которое будет переводить из $ в рубли
//         background: {
//             r: 0,
//             g: 0,
//             b: 0
//         },
//         isLoaded: false // переменная загрузки, если фолс будет текст или анимашка, если тру,то выведет разметку

//     },
//     computed: { //Вычисляемое св-во, должны обязательно привязать числа к переменной
//         squre() {
//             return this.rectangle.x * this.rectangle.y
//         },
//         backgroundColor() {
//             return `rgb(${this.background.r}, ${this.background.g}, ${this.background.b})`
//         }
//     },
//     methods: { // Здесь мы перечисляем функции, которые работают внутри нашего прилож.
//         changeName() { //Здесь мы будем менять значение переменной
//             //КО ВСЕМ ПЕРЕМЕННЫМ И КО ВСЕМ ФУНКЦИЯМ МЫ ОБРАЩАЕМСЯ ЧЕРЕЗ THIS
//             this.name = 'John'
//         },
//         modify() { //Эта функция будет менять тру на фолс и наоборот
//             this.isModified = !this.isModified
//         },
//         add() {
//             this.cart.push({
//                 title: this.newTitle,
//                 price: this.newPrice
//             });
//             this.newPrice = 0; // После того, как мы добавили новые эл-ты,нужно обнулить прайс и тайтл, чтоб старый ввод не сохранялся
//             this.newTitle = '';
//         }
//     },
//     mounted() { // Фун-ция которая срабатыет при подключении вью js, при его создании вызывается ф-ция mounted
//         fetch('/catalogData.json')
//             .then((response) => response.json())
//             .then((data) => setTimeout(() => {
//                 this.cart = data
//                 this.isLoaded = true
//             }, 5000))
//     }
// })
















// class Good {
//     constructor({
//         id_product: id,
//         product_name: title,
//         price
//     }) {
//         this.id = id;
//         this.title = title;
//         this.price = price;
//     }

//     getPrice() {
//         return this.price;
//     }

//     render() {
//         return `<div class="goods-item"><img src="http://unsplash.it/150/200?random&amp;gravity=center" alt=""></img><h3>${this.title}</h3><p>${this.price}</p></div>`;
//     }
// }

// class GoodInCart extends Good {
//     constructor(title, price, quantity = 1) {
//         super(title, price);

//         this.quantity = quantity;
//     }

//     getPrice() {
//         return this.price * this.quantity;
//     }

//     render() {
//         return `<div class="goods-item"><img src="http://unsplash.it/150/200?random&amp;gravity=center" alt=""></img><h3>${this.title}</h3><p>${this.price}</p></div>`;
//     }
// }


// class GoodList {
//     constructor(container) {
//         this.goods = [];
//         // -----Добавили фильр для регулярных выражений
//         this.filteredGoods = [];
//         // -------------
//         this.goodsListContainer = container
//     }

//     add(good) {
//         this.goods.push(good)
//         this.filteredGoods.push(good) //Чтобы копировал в фильр гудс
//     }


//     // Метод, который отвечает за фильтрацию,
//     // будет принимать строку, то что ввел пользователь
//     filter(queryString) { //На основе этой строки надо созд. регулярное выражение
//         const regex = new RegExp(queryString);
//         this.filteredGoods = this.goods.filter((good) => regex.test(good.title)) // Принимаем гуд у регул.выр. вызываем метод тест и передаем строку, строка это название нашего товара, проверяем
//         // что заголовок товара который мы перебираем соответсвует регул.выраж Метод тест возвращает либо тру, либо фолс, если возвр. тру тогда он попадает в новый отфильтрованный массив
//         this.renderGoodsList()
//     }



//     renderGoodsList() {
//         this.goodsListContainer.textContent = '' //Очистим контейнер, что бы отчистить вывод
//         // Выводить теперь будем не из this.goods.map а из filteredGoods 
//         let goodsList = this.filteredGoods.map(
//             item => item.render()
//         ).join(' ');

//         this.goodsListContainer.insertAdjacentHTML('beforeend', goodsList);
//     }
// }

// const list = new GoodList(document.querySelector('.goods-list'))


// fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json')
//     .then((response) => {
//         return response.json()
//     })
//     .then((response) => {
//         response.forEach(newGood => {
//             list.add(new Good(newGood));
//         });

//         list.renderGoodsList()
//     })
//     .catch((err) => {
//         console.log(err)
//     })




// const cart = new GoodList([
//     new GoodInCart('Bread', 15),
//     new GoodInCart('Eggs', 20),
// ], document.querySelector('.cart'))



// const searchEl = document.querySelector('.goods-search');
// const searchBtnEl = document.querySelector('.search-button');

// searchBtnEl.addEventListener('click', () => {
//     list.filter(searchEl.value) //У нас есть searchEl и мы от сюда достанем, что ввел пользователь
// })


// const str = "Lorem ipsum 'dolor sit amet consectetur' adipisicing elit.";
// const regexp1 = str.replace(/'/gi, '"'); // Ищет все вхождения ' и заменяет на "
// console.log(regexp1)