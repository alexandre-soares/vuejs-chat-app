<template>
  <div class="iphone">
    <div class="iphone__header">
      <div class="leftSide">
        <div class="operator">{{ time }}</div>
      </div>
      <div class="rightSide">
        <div class="data">5G</div>
        <div class="battery">
          <div class="mid"></div>
        </div>
      </div>
    </div>
    <div class="iphone__body">
      <p>Create chats to discuss with anybody with</p>
      <h1>Vue Voxer</h1>
      <hr />
      <h2>What did I learn?</h2>
      <ul>
        <li>User authentication with Firebase (Anonymous, Email/Password)</li>
        <li>Usage of the Vuefire Package</li>
        <li>Vue Composition API on a Vue 2 project</li>
        <li>Collection Creation</li>
        <li>Chat Features in Firestore</li>
      </ul>
      <p>
        Github is available
        <a
          href="https://github.com/alexandre-soares/vuejs-chat-app"
          target="_blank"
          class="button"
          >Here</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VuePresentation",
  computed: {
    time() {
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes();
      return time;
    },
  },
};
</script>

<style scoped>
.iphone {
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

.iphone__header {
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
.iphone__body {
  margin: auto;
}

.iphone__body h1 {
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

a {
  background: -webkit-linear-gradient(#d5fd14, #07fcdb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
