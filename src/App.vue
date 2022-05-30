<template>
  <div id="app">
    <div class="wrapper">
      <div class="main">
        <div class="main__header">
          <div class="circle circle--red"></div>
          <div class="circle circle--yellow"></div>
          <div class="circle circle--green"></div>
        </div>
        <router-view class="main__body"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    time() {
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes();
      return time;
    },
  },
};
</script>

<style>
body {
  background-color: #24c565;
  font-family: "Montserrat", sans-serif;
}

.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
}

.main {
  width: 80vw;
  height: 70vh;
  background-color: #011a1b;
  border-radius: 1rem;
  position: relative;
  padding: 25px 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main__header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

.main__header .circle {
  height: 12px;
  width: 12px;
  border-radius: 50%;
}

.circle--red {
  background-color: #FF5F57;
}

.circle--yellow {
  background-color: #FEBC2E;
}

.circle--green {
  background-color: #27C840;
}

.main__body {
  margin: auto;
  width: 80%;
}

/* hide scrollbar but allow scrolling */
.main__body {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
}

.main__body::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

fieldset {
  margin: 20px 0;
}

label {
  margin-bottom: 14px;
  display: inline-block;
}

button {
  margin: 20px 0;
  background: rgb(213, 253, 20);
  background: linear-gradient(
    135deg,
    rgba(213, 253, 20, 1) 0%,
    rgba(105, 249, 121, 1) 46%,
    rgba(0, 212, 255, 1) 100%
  );
  border: none !important;
  border-radius: 10px;
  color: black;
  font-weight: 600;
  transition: all 1s ease-in-out;
}

.icon {
  width: 40px;
  height: 40px;
  cursor: pointer;
}

audio {
  width: 100%;
}
</style>
