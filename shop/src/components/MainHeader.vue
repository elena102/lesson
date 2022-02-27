<template>
  <header class="header">
    <div class="header_info container">
      <div class="header_left">
        <ul class="header_left_ul">
          <li>
            <router-link class="logo_a" to="/">
              <img class="logo" src="img/logo.png" alt="logo" />
            </router-link>
          </li>
        </ul>
        <form id="demo-b">
          <input placeholder="Поиск" type="search" />
        </form>
      </div>
      <div class="header_right">
        <nav class="menu">
          <img class="burger_menu" src="img/burger-menu.svg" alt="menu" />
          <div class="menu_box">
            <h3 class="menu_h3">MENU</h3>
            <a class="menu_a" href="#">
              <h2 class="menu_h2">MAN</h2>
            </a>
            <a class="menu_a" href="#">Accessories</a>
            <a class="menu_a" href="#">Bags</a>
            <a class="menu_a" href="#">Denim</a>
            <a class="menu_a" href="#">T-Shirts</a>
            <a class="menu_a" href="#">
              <h2 class="menu_h2">WOMAN</h2>
            </a>
            <a class="menu_a" href="#">Accessories</a>
            <a class="menu_a" href="#">Jackets & Coats</a>
            <a class="menu_a" href="#">Polos</a>
            <a class="menu_a" href="#">T-Shirts</a>
            <a class="menu_a" href="#">Shirts</a>
            <a class="menu_a" href="#">
              <h2 class="menu_h2">KIDS</h2>
            </a>
            <a class="menu_a" href="#">Accessories</a>
            <a class="menu_a" href="#">Jackets & Coats</a>
            <a class="menu_a" href="#">Polos</a>
            <a class="menu_a" href="#">T-Shirts</a>
            <a class="menu_a" href="#">Shirts</a>
            <a class="menu_a" href="#">Bags</a>
          </div>
        </nav>
        <ul class="header_right_ul">
          <li>
            <a href="#">
              <img class="user_logo" src="img/user_logo.svg" alt="logo" />
            </a>
          </li>
        </ul>
        <router-link to="cart">
          <img class="backet_logo" src="img/basket.svg" alt="backet" />
        </router-link>
        <span class="header-col-right__count-product">{{ cartCount }}</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  computed: {
    cartCount() {
      return this.$store.getters.getCartCount;
    },
  },
};
</script>

<style>
</style>