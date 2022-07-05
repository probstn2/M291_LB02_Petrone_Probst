<template>
  <div id="shop">
    <h1>Shop</h1>
    <b-container fluid>
      <div/>
      <div id="products"></div><Products />
      <div style="margin-top: 2rem"/>
      <div id="cart"><Cart /></div>
      <div style="margin-top: 2rem"/>
      <div id="checkout"><Checkout /></div>
    </b-container>
  </div>
</template>
<script>
import Products from './Products.vue'
import Cart from './Cart.vue'
import Checkout from './Checkout.vue'
export default {
  name: 'app',
  components: {
    Products, Cart, Checkout
  }
}
</script>
