<template>
  <div class="message" :class="{ 'from-user': owner }">
    <div class="text-wrapper" v-if="message.text">
      <p>
        {{ message.text }}
      </p>
      <img class="icon" src="@/assets/user.png" alt="user" />
    </div>
    <div class="audio-wrapper" v-if="message.audioURL">
      <audio :src="message.audioURL" controls></audio>
      <img class="icon" src="@/assets/user.png" alt="user" />
    </div>
    <div class="infos-message">
      <div class="message-infos">
        <span class="sender">{{ getHoursAndMinutes }}</span>
        <!-- <span class="sender">from UID {{ message.sender }}</span> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message", "owner"],
  computed: {
    getHoursAndMinutes() {
      const now = new Date(this.message.createdAt);
      // 👇️ With PM / AM
      const withPmAm = now.toLocaleTimeString("en-US", {
        // en-US can be set to 'default' to use user's browser settings
        hour: "2-digit",
        minute: "2-digit",
      });

      return withPmAm; // 👉️ 01:27 PM
    },
  },
};
</script>

<style>
.message {
  position: relative;
  background-color: transparent;
}

.message.from-user .text-wrapper,
.message.from-user .audio-wrapper {
  justify-content: end;
}

.message.from-user .infos-message {
  text-align: right;
}

.text-wrapper,
.audio-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.text-wrapper p {
  background-color: #009a3e;
  margin-bottom: 2px !important;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  order: 1;
}

.message.from-user p {
  background-color: #28463f;
}

.message.from-user img {
  order: 12;
}


.message .sender {
  font-size: 12px;
  display: block;
  margin: 2px 0;
}

</style>
