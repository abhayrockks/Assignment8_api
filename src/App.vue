<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  name: "app",
  // computed: {
  //   ...mapGetters(["isLoggedIn"]),
  // },
  // mounted() {
  //   if (this.isLoggedIn) {
  //     this.$router.push("/profile");
  //   }
  // },
};
</script>