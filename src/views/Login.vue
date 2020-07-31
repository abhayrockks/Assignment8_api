<template>
  <div id="login">
    <Header />
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Login Page</h1>
        </div>
      </div>
    </section>
    <section>
      <div class="columns">
        <div class="column"></div>
        <div class="column">
          <Form />
        </div>
        <div class="column"></div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "./../components/Header";
import Form from "./../components/Form";
export default {
  name: "Login",
  components: {
    Header,
    Form,
  },
};
</script>