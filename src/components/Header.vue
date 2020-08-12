<template>
  <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
    <div class="navbar-item">
      <a>
        <router-link to="/">Home</router-link>
      </a>
      <p v-if="user">{{user}}</p>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <a v-if="!user" @click="login" class="button is-white">Login</a>
          <a v-if="user" @click="logout" class="button is-white">Logout</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState({
      user: state => state.user.username
    }),
  },
  methods: {
    ...mapActions({
      dologout: "logout",
    }),
    login() {
      if (this.$route.name !== "Login") {
        this.$router.push("login");
      }
    },
    logout() {
      this.dologout();
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>