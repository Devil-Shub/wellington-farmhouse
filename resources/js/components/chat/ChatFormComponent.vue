<template>
  <form class="form">
    <textarea id="body" cols="28" rows="5" class="form-input" @keydown="typing" v-model="body"></textarea>
    <span class="notice">Hit Return to send a message</span>
  </form>
</template>

<script>
import { router } from "../../_helpers/router";
import { jobService } from "../../_services/job.service";
import { environment } from "../../config/test.env";
import { PlusCircleIcon } from "vue-feather-icons";
import Event from "../../event.js";
export default {
  data() {
    return {
      body: null,
      message: {
          body: ''
      }
    };
  },
  methods: {
    typing(e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    },
    sendMessage() {
      if (!this.body || this.body.trim() === "") {
        return;
      }
      let messageObj = this.buildMessage();
      Event.$emit("added_message", messageObj);
      //store message
      this.message.body = this.body; 
      jobService.storeMessage(this.message).then(response => {
        //handle response
        // if (response.status) {
        //   this.messages = response.data;
        // } else {
        // }
      });
    this.body = null;
    },
    buildMessage() {
      return {
        id: Date.now(),
        body: this.body,
        selfMessage: true,
        user: {
          name: "Shubham"
        }
      };
    }
  }
};
</script>

<style>
.form {
  padding: 8px;
}
.form-input {
  width: 100%;
  border: 1px solid #d3e0e9;
  padding: 5px 10px;
  outline: none;
}
.notice {
  color: #aaa;
}
</style>