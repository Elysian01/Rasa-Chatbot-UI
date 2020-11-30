<template>
  <div id="themes-and-upgrades">
    <h1 class="section-title">
      Themes And <span class="primary-color">Upgrades</span>
    </h1>
    <br />
    <div class="container">
      <h3 class="text-center">
        There are currently two themes present,
        <span style="color: blue">BLUE</span> and
        <span style="color: purple">PURPLE</span>, You can choose anyone by
        setting the theme parameter in the function call.
      </h3>
      <br />

      <div class="theme-examples">
        <img
          data-aos="fade-right"
          data-aos-duration="700"
          src="../assets/img/blue-theme.png "
          alt="Blue Theme Image "
        />
        <img
          data-aos="fade-left"
          data-aos-duration="700"
          src="../assets/img/purple-theme.png "
          alt="Purple Theme Image "
        />
      </div>
      <br /><br />

      <div class="dark-card">
        You can customize or built your own theme, layout design, or any other
        functionalities by taking this as a base project, click below to
        download the source files.
      </div>
      <br />

      <div class="text-center">
      
        <button @click = "downloadFile" type="button" class="btn btn-dark btn-lg mx-auto btn-margin">
            <i class="fas fa-download"> </i>
            Download Package
          </button>
        <a
          href="https://github.com/Elysian01/ChatBot-Web-Integration"
          target="_blank"
          ><button type="button" class="btn btn-dark btn-lg mx-auto">
            <i class="fab fa-github"> </i>
            OPEN SOURCE PROJECT ON GITHUB
          </button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/styles.css";
import axios from "axios"

export default {
  name: "Themes",
   methods: {
    downloadFile(){
      axios({
        url:"http://localhost:8081/Chatbot-UI.zip",
        method:'GET',
        responseType:'blob'
      }).then((response)=> {
        var fileUrl = window.URL.createObjectURL(new Blob([response.data]))
        var fileLink = document.createElement('a')
        fileLink.href = fileUrl

        fileLink.setAttribute("download","Chatbot-UI.zip")
        document.body.appendChild(fileLink)
        fileLink.click()
      })
      
    }
  },
};
</script>

<style>
#themes-and-upgrades {
  overflow-x: hidden;
}
@media (max-width: 768px) {
    body{overflow-x: hidden}
}
</style>