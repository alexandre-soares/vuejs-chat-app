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
      <hr />
      <h2>What did I learn?</h2>
      <ul>
        <li>User authentication with Firebase (Anonymous, Email/Password)</li>
        <li>Usage of the Vuefire Package</li>
        <li>Chat Features in Firestore</li>
        <li>Record audio on the web</li>
        <li>Upload files to Firebase Storage</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "VuePresentation",
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

.main__body {
  margin: auto;
}
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
