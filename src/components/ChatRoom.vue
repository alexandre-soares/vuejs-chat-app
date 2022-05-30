<template>
  <div class="chat-room">
    <h2>Welcome to ChatRoom.vue {{ chatId }}</h2>
    <router-link to="/">Back</router-link>

    <p>
      Open this link in another browser window to chat
      <a target="_blank" :href="`https://your-url.com/#/chats/${chatId}`">
        <code>https://your-url.com/#/chats/{{ chatId }}</code></a
      >
    </p>

    <User>
      <template #user="{ user }">
        <div v-if="user" id="message-wrapper" class="message-wrapper">
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

          <div>
            <form class="send-form" @submit.prevent="addMessage(user.uid)">
              <input v-model="newMessageText" class="input" />
              <div class="input-actions">
                <button :disabled="!newMessageText || loading" type="submit">
                  <img class="icon" src="@/assets/send.png" alt="send" />
                </button>
              </div>
            </form>
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
import { db } from "../firebase";
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
  },
  firestore() {
    return {
      messages: this.messagesCollection.orderBy("createdAt").limitToLast(10),
    };
  },
  methods: {
    async addMessage(uid) {
      this.loading = true;
      const { id: messageId } = this.messagesCollection.doc();

      await this.messagesCollection.doc(messageId).set({
        text: this.newMessageText,
        sender: uid,
        createdAt: Date.now(),
      });
      this.loading = false;
      this.newMessageText = "";
      this.scrollToBottom();
    },
    scrollToBottom() {
      let element = document.getElementById("message-wrapper");
      element.scrollIntoView(false);
    },
  },
};
</script>

<style scoped>
.chat-room {
  width: 100%;
  position: relative;
  height: 90%;
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
  font-size: 12px;
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

.message-wrapper {
  position: relative;
}

.send-form {
  position: relative;
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
