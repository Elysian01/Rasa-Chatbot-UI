<template>
<div class="hero" id="hero">

    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="#hero"><i class="fas fa-atom"></i> Chatbot <span>UI</span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link text-white hover" href="#features">Features</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link text-white font-weight-bold hover" href="#get-started">Get Started</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white hover" href="#themes-and-upgrades">Themes And Upgrades</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white hover" target="_blank" href=" https://github.com/Elysian01/ChatBot-Web-Integration ">Repo</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <br />

    <div class="hero-content">
        <div class="hero-bot mobile">
            <img src="../assets/img/homepage-bot.png " alt="Bot Image" />
        </div>

        <div data-aos="fade-down-right" data-aos-duration="1000" class="hero-header">
            <h1>Get your hands on our<br><span class="primary-color"> Ready-to-use UI Designs</span><br> for your Rasa bots!</h1>

            <br />
            <p>
                Looking for UI Designs for your rasa chatbot with alluring colours and responsive features? Look no further!
                Explore our available designs in different colour schemes and ensure smooth traversal across all devices.
                Don't like the available designs? Don't you worry! Customize themes and colours according to your liking
                very quickly and easily.
            </p>

            <br>
            <h3><span class="primary-color cachy-line">Embed. Customize. Repeat.</span></h3>

            <div class="btns">
                <a href="#get-started"><button class="btn-green">Get Started</button></a>
                <button @click="downloadFile" class="btn-green">Download</button>
            </div>
        </div>

        <div data-aos="fade-up-left" data-aos-duration="1000" class="hero-bot desktop">
            <img src="../assets/img/homepage-bot.png " alt="Bot Image" />
        </div>
    </div>
    <br>

</div>
</template>

<script>
import "../assets/css/styles.css";

import axios from "axios"

export default {
    name: "Hero",

    methods: {
        downloadFile() {
            axios({
                url: "http://localhost:8081/Chatbot-UI.zip",
                method: 'GET',
                responseType: 'blob'
            }).then((response) => {
                var fileUrl = window.URL.createObjectURL(new Blob([response.data]))
                var fileLink = document.createElement('a')
                fileLink.href = fileUrl

                fileLink.setAttribute("download", "Chatbot-UI.zip")
                document.body.appendChild(fileLink)
                fileLink.click()
            })

        }
    },
};
</script>

<style>
#hero {
    overflow-x: hidden;
}

@media (max-width: 768px) {
    body {
        overflow-x: hidden
    }
}
</style>
