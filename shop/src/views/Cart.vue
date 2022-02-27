<template>
  <div>
    <catalog-in-header-shop></catalog-in-header-shop>
    <div class="shoping_content container_boot">
      <div class="card_box">
        <product-into-card
          v-for="product of cart"
          :key="product.id"
          :data="product"
        ></product-into-card>
        <cart-controls-buttons></cart-controls-buttons>
      </div>
      <order-form></order-form>
    </div>
  </div>
</template>

<script>
import CartControlsButtons from "../components/CartControlsButtons.vue";
import CatalogInHeaderShop from "../components/CatalogInHeaderShop.vue";
import OrderForm from "../components/OrderForm.vue";
import ProductIntoCard from "../components/ProductIntoCard.vue";
export default {
  components: {
    ProductIntoCard,
    CartControlsButtons,
    OrderForm,
    CatalogInHeaderShop,
  },
  name: "Cart",
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
  },
};
</script>

    
<style>
</style>