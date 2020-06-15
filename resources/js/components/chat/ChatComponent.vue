<template>
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">Chats</div>
            <div class="card-body">
                <chat-message />
                <chat-form />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ChatMessage: () => import("./ChatMessagesComponent"),
            ChatForm: () => import("./ChatFormComponent")
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>