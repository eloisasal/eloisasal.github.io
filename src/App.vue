<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <HeaderComponent></HeaderComponent>
    <div class="clearfix"></div>
    <router-view id="content"></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import About from "./components/About.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    About
    // HelloWorld,
    // CustomError,
  },
};
</script>

<style>
@import url("./assets/css/styles.css");
</style>
