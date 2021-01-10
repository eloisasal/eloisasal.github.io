<template>
  <div id="header">
    <div class="clearfix"></div>
    <ul id="navBar">
      <li @click="redirectHome()">Home</li>
      <li @click="redirectContact()">Contact</li>
      <li @click="redirectAbout()">
        <div id="containerLogo">
          
          <img
            src="../assets/images/logoLosami.jpg"
            alt="logoEloi"
            id="logoEloi"
            height="75"
          />

        </div>
      </li>
      <li @click="redirectProjects()">Projects</li>
      <li @click="redirectMore()">More</li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "HeaderComponent",
  methods: {
    redirectHome() {
      this.$router.push("/");
    },
    redirectContact() {
      this.$router.push("/Contact");
    },
    redirectAbout() {
      this.$router.push("/About");
    },
    redirectProjects() {
      this.$router.push("/Projects");
    },
    redirectMore() {
      this.$router.push("/More");
    },
  },
};
</script>