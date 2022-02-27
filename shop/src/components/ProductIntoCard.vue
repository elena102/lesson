<template>
  <div class="shoping_card_li shoping_li">
    <a href="#" class="shoping_card_a shoping">
      <img class="shoping_content_img" :src="data.img" alt="card_product" />
    </a>
    <div class="shoping_card_txt">
      <p class="shoping_card_title shoping_txt">
        {{ data.title }}
        <span class="shoping_cross" @click="onDelete">&#10006;</span><br />
        T-SHIRT
      </p>
      <p class="shoping_card_text">
        Price: <span class="card_price">${{ data.price * data.quantity }}</span>
      </p>
      <p class="shoping_card_text">Color: Red</p>
      <p class="shoping_card_text">Size: Xl</p>
      <p class="shoping_card_text quanty">Quantity:</p>
      <input
        class="shoping_bdr"
        required
        autocomplete="off"
        type="number"
        min="1"
        max="100"
        v-model="quantity"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductIntoCard",
  props: ["data"],
  computed: {
    quantity: {
      get() {
        return this.data.quantity;
      },
      set(value) {
        this.$store.dispatch("setQuantity", {
          id: this.data.id,
          quantity: value,
        });
      },
    },
  },
  methods: {
    onDelete() {
      this.$store.dispatch("removeFromCart", this.data.id);
    },
  },
};
</script>

<style>
</style>