<template>
  <div class="message-area">
      <!-- {{messages}} -->
    <message-module v-for="message in messages" :key="message.id" :message="message"></message-module>
  </div>
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
      messages: []
    };
  },
  components: {
    MessageModule: () => import("./MessageComponent")
  },
  mounted() {
    this.getChat();
    //listen event
    Event.$on("added_message", message => {
      this.messages.unshift(message);
      if (message.selfMessage) {
        // this.$refs.message.scrollTop = 0;
      }
    });
  },
  methods: {
    getChat() {
      jobService.chatList().then(response => {
        //handle response
        // if (response.status) {
          this.messages = response;
        // } else {
        // }
      });
    }
  }
};
</script>
<style>
.message-area {
  height: 400px;
  max-height: 400px;
  overflow-y: scroll;
  padding: 15px;
  border-bottom: 1px solid #eee;
}
</style>