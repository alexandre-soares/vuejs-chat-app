<template>
  <div>
    <div v-if="chats.length != 0">
      <p>Here is the list of your created chats:</p>
      <ul>
        <li v-for="chat of chats" :key="chat.id">
          <router-link :to="{ name: 'chat', params: { id: chat.id } }">{{
            chat.chatName
          }}</router-link>
        </li>
      </ul>
    </div>
    <div v-else><p>You didn't create a chat room</p></div>

    <h2>Create a chat</h2>

    <form>
      <fieldset>
        <label for="name">Please enter a chat name</label>
        <input
          v-model="chatName"
          type="text"
          placeholder="Enter a chat name*"
          class="input"
          required
        />
      </fieldset>
      <button @click="createChatRoom()" class="button">Create</button>
    </form>

    <button @click="auth.signOut()" class="button is-block is-fullwidth">
      Sign Out
    </button>
  </div>
</template>

<script>
import { db } from "../firebase";
import { auth } from "../firebase";

export default {
  data() {
    return {
      chatName: "",
      chats: [],
      auth,
    };
  },
  firestore() {
    return {
      chats: db.collection("chats").where("owner", "==", this.uid),
    };
  },
  methods: {
    async createChatRoom() {
      const newChat = await db.collection("chats").add({
        chatName: this.chatName,
        createdAt: Date.now(),
        owner: this.uid,
        members: [this.uid],
      });
      console.log(newChat);
      this.chatName = "";
    },
  },
  props: ["uid"],
};
</script>

<style scoped>
h2 {
  color: white;
  margin-top: 10px;
  font-size: 24px;
}

button {
  background: rgb(213, 253, 20);
  background: linear-gradient(
    135deg,
    rgba(213, 253, 20, 1) 0%,
    rgba(105, 249, 121, 1) 46%,
    rgba(0, 212, 255, 1) 100%
  );
  border: 0;
  border-radius: 10px;
  color: black;
  font-weight: 600;
  margin: 10px auto;
  display: inline-block;
}

li a {
  color: white;
  cursor: pointer;
  transition: all .5s ease-in;
}

li a:hover {
  color: rgb(213, 253, 20);
}
</style>
