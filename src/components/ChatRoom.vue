<template>
  <div>
    <h3>Welcome to ChatRoom {{ chatId }}</h3>

    <User>
      <template #user="{ user }">
        <ul>
          <li v-for="message of messages" :key="message.id">
            {{ message.text }}
          </li>
        </ul>

        <input type="text" v-model="newMessageText" class="input" />

        <button
          :disabled="!newMessageText || loading"
          classs="button is-success"
          type="text"
          @click="addMessage(user.uid)"
        >Send</button>
      </template>
    </User>
  </div>
</template>

<script>
import User from "./User.vue";
import { db } from "../firebase";
export default {
  name: "ChatRoom",
  components: {
    User,
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

<style lang="scss" scoped></style>
