<template>
  <div>
    <p class="message" v-if="message.text" :class="{ 'from-user': owner }">
      {{ message.text }}
    </p>
    <audio
      v-if="message.audioURL"
      :src="message.audioURL"
      controls
      :class="{ 'from-user-audio': owner }"
    ></audio>
    <div class="message-infos" :class="{ 'from-user-infos': owner }">
      <span class="sender">{{ getHoursAndMinutes }}</span>
      <span class="sender">from UID {{ message.sender }}</span>
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
  color: white;
  margin-bottom: 2px !important;
  border-radius: 5px;
  padding: 12px;
  display: inline-block;
  background-color: #009a3e;
  font-size: 14px;
}
.from-user {
  margin-left: auto;
  background-color: #28463f;
  text-align: right;
  display: table;
}
.sender {
  font-size: 0.5rem;
  margin-top: 5px;
  font-size: 12px;
}

.from-user + .sender {
  text-align: right;
}

.message-infos span {
  display: block;
}

.from-user-infos {
  text-align: right;
}

audio {
  width: 80%;
}

audio.from-user-audio {
  margin-left: auto;
  display: block;
}
</style>
