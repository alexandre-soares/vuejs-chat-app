<template>
  <div>
    <h1>Congrats!</h1>
    <p>You're logged in!</p>
    <p>Here is your User Unique ID:</p>
    <span>{{ user.uid }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["user"],
};
</script>

<style scoped>
h1 {
  margin-top: 10px;
  font-size: 38px;
  font-weight: 700;
  color: white;
  display: block;
  background: -webkit-linear-gradient(#d5fd14, #07fcdb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

span {
  display: block;
  padding: 15px;
  text-align: center;
  font-size: 14px;
  margin: 10px 0;
  background: rgb(213, 253, 20);
  background: linear-gradient(
    135deg,
    rgba(213, 253, 20, 1) 0%,
    rgba(105, 249, 121, 1) 46%,
    rgba(0, 212, 255, 1) 100%
  );
  border: 0;
  border-radius: 10px;
  color: black;
  font-weight: 600;
}
</style>
