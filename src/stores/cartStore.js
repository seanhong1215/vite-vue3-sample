import { defineStore } from 'pinia'
import productsStore from './productsStore.js'

export default defineStore('cart', {
  state: () => ({
    cart: []
  }),
  actions: {
    addToCart( productId, qty = 1 ) {
      // 1. 取得已經有加入購物車品項
      // 2. 進行判斷，如果購物車有該項目則 +1 ，沒有就新增一個購物車項目
      const currentCart = this.cart.find((item) => item.productId === productId);
      if(currentCart) {
        currentCart.qty += qty;
      } else {
        this.cart.push({
          id: new Date().getTime(),
          productId, 
          qty
        })
      }
      console.log(this.cart)
    },
    removeCartItem(id) {
      const index = this.cart.findIndex((item) => item.id === id);
      this.cart.splice(index, 1);
    },
    selectCartQty(id, event){
      // console.log(id,event)
      const currentCart = this.cart.find((item) => item.id === id);
      currentCart.qty = event.target.value * 1;
    }
  },
  getters: {
    cartList: ({ cart }) => {
      // 1.購物車的品項資訊，需要整合產品資訊
      // 2.必須計算小計的金額
      // 3. 必須提供總金額
      const { products } = productsStore();
      // console.log(products);
      // console.log(cart);
      const carts = cart.map(item => {
        // console.log(item)
        // 單一產品取出
        const product = products.find((product) => product.id === item.productId);
        // console.log('相同id的產品', product);
        return {
          ...item,
          product,
          subtotal: product.price * item.qty,
        }
      });
      const total = carts.reduce((a, b) => a + b.subtotal, 0)

      return {
        carts, //列表
        total
      }
    }
  }
})
