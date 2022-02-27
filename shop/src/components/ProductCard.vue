<template>
  <div class="card_li">
    <a href="#" class="card_a">
      <img class="content_img" :src="data.img" alt="card_product" />
      <div class="card_txt">
        <p class="card_title">{{ data.title }}</p>
        <p class="card_text">
          {{ data.desc }}
        </p>
        <p class="card_price">${{ data.price }}.00</p>
      </div>
    </a>
    <button class="add_box" @click="onBuy">
      <div class="add">
        <img class="add_cart" src="img/basket.svg" alt="basket" />
        <p>Add to Cart</p>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["data"],
  methods: {
    onBuy() {
      this.$store.dispatch("addToCart", this.data);
    },
  },
};
</script>

<style>
</style>