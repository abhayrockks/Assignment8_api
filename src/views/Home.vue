<template>
  <div id="home">
    <Header />
    <div class="container has-text-centered">
      <img src="./../assets/logo.png" />
      <h1 class="title">HOME PAGE</h1>
    </div>
  </div>
</template>

<script>
import Header from "./../components/Header";
export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>

<style>
</style>