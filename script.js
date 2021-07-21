

class Good {
    constructor({id_product:id, product_name:title, price}) {
        this.id = id;
        this.title = title;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    render() {
        return `<div class="goods-item"><img src="http://unsplash.it/150/200?random&amp;gravity=center" alt=""></img><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodInCart extends Good {
    constructor(title, price, quantity = 1) {
        super(title, price);

        this.quantity = quantity;
    }

    getPrice() {
        return this.price * this.quantity;
    }

    render() {
        return `<div class="goods-item"><img src="http://unsplash.it/150/200?random&amp;gravity=center" alt=""></img><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}


class GoodList {
    constructor (container) {
        this.goods = [];
        // -----Добавили фильр для регулярных выражений
        this.filteredGoods = [];
        // -------------
        this.goodsListContainer = container
    }

    add(good) {
        this.goods.push(good)
        this.filteredGoods.push(good)//Чтобы копировал в фильр гудс
    }


    // Метод, который отвечает за фильтрацию,
    // будет принимать строку, то что ввел пользователь
    filter(queryString) {  //На основе этой строки надо созд. регулярное выражение
        const regex = new RegExp(queryString);
        this.filteredGoods = this.goods.filter((good) => regex.test(good.title))// Принимаем гуд у регул.выр. вызываем метод тест и передаем строку, строка это название нашего товара, проверяем
        // что заголовок товара который мы перебираем соответсвует регул.выраж Метод тест возвращает либо тру, либо фолс, если возвр. тру тогда он попадает в новый отфильтрованный массив
        this.renderGoodsList()
    }



    renderGoodsList() {  
        this.goodsListContainer.textContent = ''//Очистим контейнер, что бы отчистить вывод
      // Выводить теперь будем не из this.goods.map а из filteredGoods 
        let goodsList = this.filteredGoods.map(
                item => item.render()
            ).join(' ');
    
        this.goodsListContainer.insertAdjacentHTML('beforeend', goodsList);
    }
}

const list = new GoodList(document.querySelector('.goods-list') )

// function makeGETRequest ('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/addToBasket.json') {
    // const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/addToBasket.json'

    fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json')
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            response.forEach(newGood => {
                list.add(new Good(newGood));
            });

            list.renderGoodsList()
        })
        .catch((err) => {
            console.log(err)
        })

    // }

// const list = new GoodList([
//     new Good('Bread', 15),
//     new Good('Eggs', 20),
//     new Good('Beer', 45),
//     new Good('Fish', 98),
// ], document.querySelector('.goods-list'))

const cart = new GoodList([
    new GoodInCart('Bread', 15),
    new GoodInCart('Eggs', 20),
],  document.querySelector('.cart'))



const searchEl = document.querySelector('.goods-search');
const searchBtnEl = document.querySelector('.search-button');

searchBtnEl.addEventListener('click', () => {
    list.filter(searchEl.value)//У нас есть searchEl и мы от сюда достанем, что ввел пользователь
})


const str = "Lorem ipsum 'dolor sit amet consectetur' adipisicing elit.";
const regexp1 = str.replace(/'/gi, '"'); // Ищет все вхождения ' и заменяет на "
console.log(regexp1)






// class GoodsItem {
//     constructor(title, price) {
//       this.title = title;
//       this.price = price;
//     }
//     render() {
//       return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
//     }
//   }
  
//   class GoodsList {
//     constructor() {
//       this.goods = [];
//     }
//     fetchGoods() {
//       this.goods = [
//         { title: 'Shirt', price: 150 },
//         { title: 'Socks', price: 50 },
//         { title: 'Jacket', price: 350 },
//         { title: 'Shoes', price: 250 },
//       ];
//     }
//     render() {
//       let listHtml = '';
//       this.goods.forEach(good => {
//         const goodItem = new GoodsItem(good.title, good.price);
//         listHtml += goodItem.render();
//       });
//       document.querySelector('.goods-list').innerHTML = listHtml;
//     }
//   }

  
//   const list = new GoodsList();
// list.fetchGoods();
// list.render();
