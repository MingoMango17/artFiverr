<template>
    <div class="flex flex-col h-full">
      <div class="flex-1 overflow-y-auto">
        <div v-for="(message, index) in messages" :key="index" :class="{ 'self-end': message.isMine }" class="p-2 mb-2 rounded-lg bg-green-200">
          {{ message.text }}
        </div>
      </div>
      <div class="flex p-2 border-t">
        <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type your message..." class="flex-1 p-2 border border-gray-300 rounded-lg mr-2">
        <button @click="sendMessage" class="px-4 py-2 bg-blue-500 text-white rounded-lg">Send</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        messages: [],
        newMessage: ''
      };
    },
    methods: {
      sendMessage() {
        if (this.newMessage.trim() !== '') {
          this.messages.push({ text: this.newMessage, isMine: true });
          this.newMessage = '';
          // Simulate receiving a response after a short delay
          setTimeout(() => {
            this.messages.push({ text: 'This is a response from the other user.', isMine: false });
          }, 500);
        }
      }
    }
  };
  </script>
  