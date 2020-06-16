<template>
  <div>
    <div class="col-md-12">
      <div class="card">
          <div class="col-md-8">
            <chat-module />
          </div>
          <div class="col-md-4">
            <user-module />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ChatModule: () => import("./ChatComponent"),
    UserModule: () => import("./UserComponent")
  },
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
