<template>
  <div class="login">
    <div class="login__body" v-if="!userWantsToConnect">
      <p>Create chats to discuss with anybody with</p>
      <h1>Vue Voxer</h1>
      <button class="button" @click="userWantsToConnect = !userWantsToConnect">
        Login to start
      </button>
    </div>
    <div class="login__body" v-else>
      <h2>Sign in Anonymously</h2>
      <button class="button" @click="auth.signInAnonymously()">Sign In</button>

      <div v-if="newUser">
        <h2>Sign Up for a New Account</h2>
        <span @click="newUser = false">Returning User?</span>
      </div>

      <div v-else>
        <h2>Sign In with Email</h2>
        <span @click="newUser = true">New user?</span>
      </div>

      <fieldset>
        <label for="email">Email</label>
        <input v-model="email" placeholder="Email" type="email" class="input" />
      </fieldset>

      <fieldset>
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="input"
        />
      </fieldset>

      <button
        class="button is-info"
        :class="{ 'is-loading': loading }"
        @click="signInOrCreateUser()"
      >
        {{ newUser ? "Sign Up" : "Login" }}
      </button>

      <p class="has-text-danger error" v-if="errorMessage">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { auth } from "../firebase";

export default {
  name: "Login",
  data() {
    return {
      userWantsToConnect: true,
      auth,
      newUser: false,
      email: "",
      password: "",
      errorMessage: "",
      loading: false,
    };
  },
  methods: {
    async signInOrCreateUser() {
      this.loading = true;
      this.errorMessage = "";
      try {
        if (this.newUser) {
          await auth.createUserWithEmailAndPassword(this.email, this.password);
        } else {
          await auth.signInWithEmailAndPassword(this.email, this.password);
        }
      } catch (error) {
        this.errorMessage = error.message;
      }
      this.loading = false;
    },
  },
};
</script>

<style scoped>

.login__body {
  margin: auto;
}

.login__body h1 {
  font-size: 38px;
  font-weight: 700;
  color: white;
  display: block;
  margin: 5px 0;
  background: -webkit-linear-gradient(#d5fd14, #07fcdb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h2 {
  color: white;
  margin: 0;
  font-size: 24px;
}

span {
  margin: 7px 0;
  display: block;
  font-size: 14px;
  cursor: pointer;
}

.error {
  font-size: 14px !important;
}
</style>
