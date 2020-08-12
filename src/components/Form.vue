<template>
  <div id="submitForm">
    <section>
      <b-field label="Username">
        eve.holt@reqres.in
        <b-input required v-model="username" maxlength="30"></b-input>
      </b-field>

      <b-field label="Password">
        cityslicka
        <b-input type="password" v-model="password"></b-input>
      </b-field>
      <button
        @click="loginClick"
        :class="{ 'button': true, 'is-full' : true, 'is-loading' : login_progress}"
      >Login</button>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Form",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    async loginClick() {
      const response = await this.login({
        username: this.username,
        password: this.password,
      });
      if (response) {
        this.$router.push("profile");
      } else {
        alert(this.api_error);
      }
    },
  },
  computed: {
    ...mapGetters({
      api_error: "api_error",
    }),
    login_progress() {
      return this.$store.state.login.login_progress;
    },
  },
};
</script>

<style>
</style>