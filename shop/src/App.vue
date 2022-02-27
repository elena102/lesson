<template>
  <div>
    <body>
      <main-header></main-header>
      <router-view></router-view>
      <main-footer></main-footer>
    </body>
  </div>
</template>
<script>
import style from "./assets/scss/style.scss";
import MainFooter from "./components/MainFooter.vue";
import MainHeader from "./components/MainHeader.vue";
export default {
  components: { MainHeader, MainFooter },
  mounted() {
    this.$store.dispatch("loadCatalog");
    this.$store.dispatch("loadCart");
  },
};
</script>
<style lang="scss">
</style>
