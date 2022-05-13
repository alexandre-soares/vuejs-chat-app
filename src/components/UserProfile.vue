<template>
  <div>
    Logged in as {{ user.uid }}

    <button @click="auth.signOut()">Sign Out</button>
  </div>
</template>

<script>
import { auth } from "../firebase";
export default {
  name: "UserProfile",
  data() {
    return {
      auth,
    };
  },
  props: ["user"],
};
</script>

<style lang="scss" scoped></style>
