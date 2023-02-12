<template>
  <div class="bg-light my-4 p-4">
    <div v-if="!cartList.carts.length">購物車沒有任何品項</div> <!-- v-if   -->
      <!-- v-else   -->
      <table class="table align-middle" v-else>
        <tbody>
          <tr v-for="item in cartList.carts" :key="item.id">
            <td>
              <a href="#" class="text-dark" @click.prevent="removeCartItem(item.id)">x</a>
            </td>
            <td width="100">
              <img :src="item.product.imgUrl" class="table-images" alt="">
            </td>
            <td>{{item.product.title}}</td>
            <td>
              <select name="" id="" class="form-select" :value="item.qty" 
                @change="(evt) => selectCartQty(item.id, evt)">
                <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
                <!-- <option value="2">Two</option> -->
                <!-- <option value="3">Three</option> -->
              </select>
            </td>
            <td class="text-end">
              ${{item.subtotal}}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5" class="text-end">
              總金額 NT$ {{cartList.total}}
            </td>
          </tr>
        </tfoot>
      </table>
  </div>
  </template>
  <script>
  import cartStroe from '../stores/cartStore.js';
  import { mapState, mapActions } from 'pinia'

  export default {
   data(){
     return {
       text: '這是一段文字'
     }
   },
   methods : {
    ...mapActions(cartStroe, ['removeCartItem', 'selectCartQty'])
  },
   computed: {
    ...mapState(cartStroe, ['cartList'])
  }
  }
  </script>
  <style lang="scss" scoped>
   .table-images {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  </style>
  


