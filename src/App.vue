<template>
  <div id="app">
    <div class="wrapper">
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
export default {
  name: "App",
};
</script>

<style>
body {
  background-color: #24c565;
}

.wrapper {
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
</style>
