<template>
  <div class="home">
    <h1>Home</h1>
    <User v-slot:user="{ user }">
      <div v-if="user">Logged In as {{ user.uid }}</div>
      <Login v-else />
    </User>
  </div>
</template>

<script>
import Login from "./Login.vue";
import User from "./User.vue";
export default { name: "Home", components: { Login, User } };
</script>

<style scoped></style>
