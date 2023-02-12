import { defineStore } from 'pinia'

export default defineStore('productsStroe', {
  state: () => ({
    products: [
      {
        id:1,
        title:'好吃的餅乾01',
        imgUrl:'https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80',
        price: 120,
      },
      {
        id:2,
        title:'好吃的餅乾02',
        imgUrl:'https://images.unsplash.com/photo-1597895139322-0a1ef77b3c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        price: 360,
      },
      {
        id:3,
        title:'好吃的餅乾03',
        imgUrl:'https://images.unsplash.com/photo-1618923850107-d1a234d7a73a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
        price: 600,
      },
      {
        id:4,
        title:'好吃的餅乾04',
        imgUrl:'https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
        price: 960,
      },
      {
        id:5,
        title:'好吃的餅乾05',
        imgUrl:'https://images.unsplash.com/photo-1548848221-0c2e497ed557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        price: 1200,
      },
  ]
  }),
  getters: {
    sortProducts: ({ products }) => {
      return products.sort((a,b)=>a.price - b.price);
    }
  }
})
