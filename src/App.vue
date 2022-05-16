<template>
  <div id="app">
    <div class="wrapper">
      <VuePresentation />
      <div class="main">
        <div class="main__header">
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
        <router-view class="main__body"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import VuePresentation from "./components/VuePresentation.vue";
export default {
  name: "App",
  components: { VuePresentation },
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

.main__header {
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
