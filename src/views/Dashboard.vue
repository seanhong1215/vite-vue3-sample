<template>
  <div class="container">
    <navbar-component></navbar-component>
    <cart-component></cart-component>
    <products-component></products-component>
  </div>


  <!-- <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view/>
  </div> -->
</template>
<script>

// import ToastMessages from '@/components/ToastMessages.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
import CartComponent from '@/components/CartComponent.vue';
import ProductsComponent from '@/components/ProductsComponent.vue';

export default {
  components: { CartComponent, NavbarComponent, ProductsComponent },
};
</script>
<style lang="scss" scoped>

</style>