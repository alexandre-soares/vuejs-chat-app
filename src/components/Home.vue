<template>
  <div class="home">
    <h1>Home</h1>
    <User>
      <template v-slot:user="{ user }">
        <div v-if="user">
          <UserProfile :user="user" />
        </div>

        <Login v-else />
      </template>
    </User>
  </div>
</template>

<script>
import Login from "./Login.vue";
import User from "./User.vue";
import UserProfile from "./UserProfile.vue";
export default { name: "Home", components: { Login, User, UserProfile } };
</script>

<style scoped></style>
