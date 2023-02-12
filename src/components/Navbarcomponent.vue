<template>
   <nav class="navbar bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">好吃吃餅乾店</span>
    <button type="button" class="btn">購物車
      <span class="badge rounded-pill bg-danger text-white">{{ cart.length }}</span>
    </button>
  </div>
</nav>
</template>
<script>
import cartStroe from '../stores/cartStore.js';
import { mapState } from 'pinia'

export default {
  data(){
    return {
      text: '這是一段文字'
    }
  },
   computed: {
    ...mapState(cartStroe, ['cart'])
  }
}
</script>
<style lang="scss" scoped>
  
</style>