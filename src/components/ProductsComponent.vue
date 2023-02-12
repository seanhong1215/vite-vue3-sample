<template>
  <div class="row row-cols-3 my-4 g-4">
  <div class="col" v-for="product in sortProducts" :key="product.id">
    <div class="card">
      <img :src="product.imgUrl" class="card-img-top" alt="">
      <div class="card-body">
    <h6 class="card-title">{{product.title}}
      <span class="float-end">${{product.price}}</span>
    </h6>
    <a href="#" class="btn btn-outline-primary w-100" @click.prevent="addToCart(product.id)">加入購物車</a>
  </div>
    </div>
  </div>
</div>
</template>
<script>
import productsStroe from '../stores/productsStore.js'
import cartStroe from '../stores/cartStore.js'
import { mapState, mapActions } from 'pinia'

export default {
  data(){
    return {
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
    }
  },
  methods : {
    ...mapActions(cartStroe, ['addToCart'])
  },
  computed: {
    ...mapState(productsStroe, ['sortProducts'])
  }
}
</script>
<style lang="scss" scoped>
    .card-img-top {
    height: 200px;
    object-fit: cover;
  }
</style>