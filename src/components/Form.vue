<template>
  <div id="submitForm">
    <section>
      <b-field label="Username">
        <b-input required v-model="username" maxlength="30"></b-input>
      </b-field>

      <b-field label="Password">
        <b-input type="password" v-model="password"></b-input>
      </b-field>
      <button @click="loginClick" :class="{ 'button': true, 'is-full' : true}">Login</button>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
    loginClick() {
      if (this.username !== "Abhay") {
        return alert("Username is Abhay");
      } else if (this.password !== "123") {
        return alert("Password is 123");
      } else {
        this.login({
          username: this.username,
          password: this.password,
        });
        this.$router.push("profile");
      }
    },
  },
};
</script>

<style>
</style>