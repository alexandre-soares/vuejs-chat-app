<template>
  <div class="chat-room">
    <h2>Welcome to ChatRoom.vue <br />{{ chatId }}</h2>

    <router-link to="/">Back</router-link>

    <p>
      Open this link in another browser window to chat <br />
      <a target="_blank" :href="`https://your-url.com/#/chats/${chatId}`">
        <code>https://your-url.com/#/chats/{{ chatId }}</code></a
      >
    </p>

    <User>
      <template #user="{ user }">
        <div v-if="user" id="message-wrapper">
          <ul v-if="messages.length != 0">
            <li v-for="message of messages" :key="message.id">
              <ChatMessage
                :message="message"
                :owner="user.uid === message.sender"
              />
            </li>
          </ul>

          <div v-else>
            <p class="text-info">There is no message for now</p>
          </div>

          <hr />

          <audio v-if="newAudio" :src="newAudioURL" controls></audio>

          <p id="audio-in-progress" v-if="recordInProgress">
            Audio in progress... Please click on the mute icon to stop the
            record
          </p>

          <div class="send-form">
            <input v-model="newMessageText" class="input" />
            <div class="input-actions">
              <button
                v-if="!recorder"
                @click="record(), (recordInProgress = true)"
              >
                <img class="icon" src="@/assets/mic.png" alt="mic" />
              </button>

              <button v-else @click="stop(), (recordInProgress = false)">
                <img
                  class="icon"
                  src="@/assets/mute-microphone.png"
                  alt="mute"
                />
              </button>
              <button
                :disabled="(!newMessageText && !newAudio) || loading"
                @click="addMessage(user.uid)"
              >
                <img class="icon" src="@/assets/send.png" alt="send" />
              </button>
            </div>
          </div>
        </div>

        <Login v-else />
      </template>
    </User>
  </div>
</template>

<script>
import User from "./User.vue";
import ChatMessage from "./ChatMessage.vue";
import Login from "./Login.vue";
import { db, storage } from "../firebase";
export default {
  components: {
    User,
    Login,
    ChatMessage,
  },
  data() {
    return {
      newMessageText: "",
      loading: false,
      messages: [],
      newAudio: null,
      recorder: null,
      recordInProgress: false,
    };
  },
  mounted() {
    setTimeout(function () {
      let element = document.getElementById("message-wrapper");
      element.scrollIntoView(false);
    }, 2000);
  },
  computed: {
    chatId() {
      return this.$route.params.id;
    },
    messagesCollection() {
      return db.doc(`chats/${this.chatId}`).collection("messages");
    },
    newAudioURL() {
      return URL.createObjectURL(this.newAudio);
    },
  },
  firestore() {
    return {
      messages: this.messagesCollection.orderBy("createdAt").limitToLast(10),
    };
  },
  methods: {
    async addMessage(uid) {
      this.loading = true;
      let audioURL = null;
      const { id: messageId } = this.messagesCollection.doc();
      if (this.newAudio) {
        const storageRef = storage
          .ref("chats")
          .child(this.chatId)
          .child(`${messageId}.wav`);
        await storageRef.put(this.newAudio);
        audioURL = await storageRef.getDownloadURL();
      }
      await this.messagesCollection.doc(messageId).set({
        text: this.newMessageText,
        sender: uid,
        createdAt: Date.now(),
        audioURL,
      });
      this.loading = false;
      this.newMessageText = "";
      this.newAudio = null;
      this.scrollToBottom();
    },
    scrollToBottom() {
      let element = document.getElementById("message-wrapper");
      element.scrollIntoView(false);
    },
    async record() {
      setTimeout(function () {
        let element = document.getElementById("message-wrapper");
        element.scrollIntoView(false);
      }, 1000);

      this.newAudio = null;
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      const options = { mimeType: "audio/webm" };
      const recordedChunks = [];
      this.recorder = new MediaRecorder(stream, options);
      this.recorder.addEventListener("dataavailable", (e) => {
        if (e.data.size > 0) {
          recordedChunks.push(e.data);
        }
      });
      this.recorder.addEventListener("stop", () => {
        this.newAudio = new Blob(recordedChunks);
        console.log(this.newAudio);
      });
      this.recorder.start();
    },
    async stop() {
      setTimeout(function () {
        let element = document.getElementById("message-wrapper");
        element.scrollIntoView(false);
      }, 1000);

      this.recorder.stop();
      this.recorder = null;
    },
  },
};
</script>

<style scoped>
.chat-room {
  width: 100%;
  position: relative;
  height: 80%;
  margin-bottom: auto !important;
  margin-top: 10px;
}

h2 {
  color: white;
  margin-top: 10px;
  font-size: 20px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  border-radius: 0;
}
.text-info {
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  color: black;
}

code {
  font-size: 9px;
  cursor: pointer;
}

input {
  padding-right: 80px;
}

img {
  height: 25px;
  width: 25px;
}

button {
  background: none;
  margin: 0;
  margin-top: 2px;
}

.send-form {
  position: fixed;
  bottom: 90px;
  width: 277px;
}

.send-form .input-actions {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
}
</style>
