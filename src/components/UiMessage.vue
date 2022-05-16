<template>
  <div class="login">
    <div class="login__header">
      <div class="leftSide">
        <div class="operator">11:34</div>
      </div>
      <div class="rightSide">
        <div class="data">5G</div>
        <div class="battery">
          <div class="mid"></div>
        </div>
      </div>
    </div>
    <div class="login__body">
      <p>Create chats to discuss with anybody with</p>
      <h1>Vue Voxer</h1>
      <button class="button">Login to start</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UiMessage",
};
</script>

<style scoped>
.login {
  height: 622.08px;
  width: 317px;
  background-color: #011a1b;
  border-radius: 3em;
  position: relative;
  padding: 25px 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.login__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  flex: 0 0 5%;
}

.rightSide {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7px;
}

.battery {
  border: 1px solid white;
  width: 24px;
  height: 13px;
  border-radius: 5px;
  padding: 1px;
}

.battery .mid {
  height: 100%;
  width: 70%;
  background-color: white;
  border-radius: 3px;
}

.login__body {
  margin: auto;
}

.login__body p {
  color: white;
  width: 90%;
  font-size: 22px;
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

.login__body button {
  margin: 20px 0;
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
  transition: all 1s ease-in-out;
}
</style>
