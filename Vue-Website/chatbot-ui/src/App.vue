<template>
  <div>
    <Hero />
    <Features />

    <br /><br />
    <Getting_Started />
    <br />

    <Themes />
    <br /><br />

    <Footer />
    <Chatbot />
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import Features from "./components/Features.vue";
import Getting_Started from "./components/Getting_Started.vue";
import Themes from "./components/Themes.vue";
import Chatbot from "./components/Chatbot.vue";
import Footer from "./components/Footer.vue";

import "./assets/css/styles.css";

export default {
  name: "App",
  components: {
    Hero,
    Features,
    Getting_Started,
    Themes,
    Chatbot,
    Footer,
  },
};
</script>

<style>

@media (max-width: 768px) {
.hideOverflowOnMobile {
overflow: hidden;
}
}
</style>
