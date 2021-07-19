

// class GoodsItem {
//     constructor(title, price) {
//         this.title = title;
//         this.price = price;
//     }

//     // getPrice(){
//     //     return this.price
//     // }

//     render() {
//         return `<div class="goods-item"><img src="http://unsplash.it/150/200?random&amp;gravity=center" alt=""></img><h3>${this.title}</h3><p>${this.price}</p></div>`
//     }
// }

// class GoodsList {
//     constructor() {
//         this.goods = [];
//     }

//     fetchGoods() {
//         this.goods = [
//           { title: 'Shirt', price: 150 },
//           { title: 'Socks', price: 50 },
//           { title: 'Jacket', price: 350 },
//           { title: 'Shoes', price: 250 },
//         ]
//     }

//     render() {
//         let listHtml = '';
//         this.goods.forEach(good => {
//             const goodItem = new GoodsItem(good.title, good.price);
//             listHtml += goodItem.render();
//         });
//         document.querySelector('.goods-list').innerHTML = listHtml;
//         console.log(list)
//     }

//     getTotalSum() {
//       //   let sum = 0;
//       //   this.goods.forEach(el => {
//       //       el.price += sum;
//       //       console.log(sum)
//       //   })
//       let totalSum = this.goods.reduce((acc, item) => acc + item.price, 0);
//       console.log(totalSum)
//     }
// }

// const list = new GoodsList();
// list.fetchGoods();
// list.render();
// list.getTotalSum()



// =========================


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
        this.goodsListContainer = container
    }

    add(good) {
        this.goods.push(good)
    }

    renderGoodsList() {
        let goodsList = this.goods.map(
                item => item.render()
            ).join(' ');
    
        this.goodsListContainer.insertAdjacentHTML('beforeend', goodsList);
    }
}

const list = new GoodList(document.querySelector('.goods-list') )

// function makeGETRequest ('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/addToBasket.json') {
    const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/addToBasket.json'

    fetch(API)
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







// ===================


// const goods = [
//     { title: 'Shirt', price: 150 },
//     { title: 'Socks', price: 50 },
//     { title: 'Jacket', price: 350 },
//     { title: 'Shoes', price: 250 },
//   ];
  
//   const renderGoodsItem = (title, price) => {
//     return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
//   };
  
//   const renderGoodsList = (list) => {
//     let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
//     document.querySelector('.goods-list').innerHTML = goodsList.join(' ');
//   }
  
//   renderGoodsList(goods);

// -------------------------



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
