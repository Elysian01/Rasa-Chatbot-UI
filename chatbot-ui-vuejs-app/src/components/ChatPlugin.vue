<template>
    <div id="rasa-chat-widget" :data-websocket-url="connUrl" :data-avatar-url="avatarUrl"></div>
</template>

<script>
export default{
    name: 'ChatPlugin',
    data:()=>({
        connUrl: "http://localhost:5005",
        avatarUrl: "https://st3.depositphotos.com/8950810/17657/v/600/depositphotos_176577870-stock-illustration-cute-smiling-funny-robot-chat.jpg",
    }),
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://unpkg.com/@rasahq/rasa-chat')
      document.head.appendChild(recaptchaScript)
    },
}
</script>