<template>
  <div>
    <h3>Welcome to ChatRoom {{ chatId }}</h3>

    <User>
      <template #user="{ user }">
        <ul>
          <li v-for="message of messages" :key="message.id">
            <ChatMessage
              :message="message"
              :owner="user.uid === message.sender"
            />
          </li>
        </ul>

        <input type="text" v-model="newMessageText" class="input" />

        <button
          :disabled="!newMessageText || loading"
          classs="button is-success"
          type="text"
          @click="addMessage(user.uid)"
        >
          Send
        </button>
      </template>
    </User>
  </div>
</template>

<script>
import User from "./User.vue";
import { db } from "../firebase";
import ChatMessage from "./ChatMessage.vue";
export default {
  name: "ChatRoom",
  components: {
    User,
    ChatMessage,
  },
  data() {
    return {
      newMessageText: "",
      loading: false,
      messages: [],
    };
  },
  computed: {
    chatId() {
      return this.$route.params.id;
    },
    messagesCollection() {
      return db.doc(`chats/${this.chatID}`).collection("messages");
    },
  },
  firestore() {
    return {
      messages: this.messagesCollection.orderBy("createdAt"),
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
      this.newMessageText = "";
      this.loading = false;
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-width: 500px;
  background: #efefef;
  padding: 10px;
  border-radius: 0;
}

li {
  display: flex;
}
</style>
