<template>
  <aside class="section">
    <h3>Sign In Anonymously</h3>
    <button class="button" @click="auth.signInAnonymously()">Sign In</button>
  </aside>
</template>

<script>
import { auth } from "../firebase";
export default {
  name: "Login",
  data() {
    return {
      auth,
    };
  },
};
</script>

<style lang="scss" scoped></style>
