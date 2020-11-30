<template>
  <div class="hero" id="hero">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#hero"
          ><i class="fas fa-atom"></i> Chatbot <span>UI</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link text-white hover" href="#features">Features</a>
            </li>
            <li class="nav-item active">
              <a
                class="nav-link text-white font-weight-bold hover"
                href="#get-started"
                >Get Started</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link text-white hover" href="#themes-and-upgrades"
                >Themes And Upgrades</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white hover"
                target="_blank"
                href=" https://github.com/Elysian01/ChatBot-Web-Integration "
                >Repo</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <br />

    <div class="hero-content">
      <div class="hero-bot mobile">
        <img src="../assets/img/homepage-bot.png " alt="Bot Image " />
      </div>

      <div
        data-aos="fade-down-right"
        data-aos-duration="1000"
        class="hero-header"
      >
        <h1>
          Get Your Chatbot Frontend <br />
          Ready With
          <span class="primary-color"
            >Customizable<br />
            UI</span
          >
        </h1>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic velit
          aspernatur nemo omnis laudantium cum soluta accusamus placeat illo
          deleniti sit, natus necessitatibus quo ab. Exercitationem
          necessitatibus quos consectetur fugit.
        </p>
        <div class="btns">
          <a href="#get-started"
            ><button class="btn-green">Get Started</button></a
          >
          <a href="Chatbot-UI.zip" download
            ><button class="btn-green">Download</button></a
          >
        </div>
      </div>

      <div
        data-aos="fade-up-left"
        data-aos-duration="1000"
        class="hero-bot desktop"
      >
        <img src="../assets/img/homepage-bot.png " alt="Bot Image " />
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/styles.css";

export default {
  name: "Hero",
};
</script>

<style>
#hero {
  overflow-x: hidden;
}
@media (max-width: 768px) {
    body{overflow-x: hidden}
}
</style>