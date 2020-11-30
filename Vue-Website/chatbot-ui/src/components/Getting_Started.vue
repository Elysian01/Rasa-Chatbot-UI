<template>
  <div id="get-started" class="dark-bg">
    <br />
    <h1 class="text-center text-white">
      Getting <span class="primary-color">Started</span>
    </h1>
    <br />
    <br />

    <div class="container">
      <h3
        data-aos="fade-right"
        data-aos-duration="500"
        class="text-white text-center"
      >
        Copy-paste the stylesheet
        <span class="primary-color">&lt;link&gt;</span> into your
        <span class="primary-color">&lt;head&gt;</span> before all other
        stylesheets to load our CSS.
      </h3>
      <br />

      <pre> 
                <code class="language-js language-markup">     
                &lt;link rel="stylesheet " href="https://drive.google.com/uc?id=1x2TCnJdXTQFErgZhxjMUWKIIfIfSbIy-">
                </code>
            </pre> 
         
     

      <br />

      <h3
        data-aos="fade-right"
        data-aos-duration="500"
        class="text-white text-center"
      >
        Copy-paste the folowing code into your
        <span class="primary-color">&lt;body&gt;</span>, and update the function
        parameters to your need.
      </h3>

      <br />
      <pre>

                <code class="language-js language-markup">     
  
                &lt;div id="chat-container">&lt;/div>

                &lt;script src="https://drive.google.com/uc?id=1QslZLwqbJl471otp1Ph1y8MLHSzKqCPl">&lt;/script>  

                &lt;script>
                    createChatBot(host = 'http://localhost:5005/webhooks/rest/webhook', 
                    botLogo = "./imgs/bot-logo2.png ",
                    title = "Covid BOT ", welcomeMessage = "Hey, i am Covid Bot ", 
                    inactiveMsg = "Server is down, Please contact the developer to activate it ",
                    theme="blue ")
                &lt;/script>    
            </code>

            </pre>

      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <ul class="list-group list-group-left">
            <li
              data-aos="fade-right"
              data-aos-duration="500"
              class="list-group-item list-group-item-left"
            >
              <b class="arrow">>></b>
              <span class="title">createChatbot: </span>To initailize & set
              various aspects of chatbot
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="700"
              class="list-group-item list-group-item-left"
            >
              <b class="arrow">>></b> <span class="title">host: </span> The URL
              of hosted chatbot
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="850"
              class="list-group-item list-group-item-left"
            >
              <b class="arrow">>></b> <span class="title">botLogo: </span> Logo
              Of the Bot
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="1000"
              class="list-group-item list-group-item-left"
            >
              <b class="arrow">>></b> <span class="title">title: </span>The
              title which will appear on the header of chatbot
            </li>
          </ul>
        </div>

        <div class="col">
          <ul class="list-group list-group-right">
            <li
              data-aos="fade-left"
              data-aos-duration="600"
              class="list-group-item list-group-item-left"
            >
              <b class="arrow">>></b>
              <span class="title">welcomeMessage: </span>Starting Message shown
              to the user, can be any greeting or information
            </li>
            <li
              data-aos="fade-left"
              data-aos-duration="750"
              class="list-group-item list-group-item-left"
            >
              <b class="arrow">>></b>
              <span class="title">inactiveMsg: </span>When bot server is down or
              unreachable this message will be shown
            </li>
            <li
              data-aos="fade-left"
              data-aos-duration="900"
              class="list-group-item list-group-item-left"
            >
              <b class="arrow">>></b> <span class="title">theme: </span>Color of
              header, bot message and overall layout, there are two inbuilt
              theme for bot, blue and purple
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'
// import 'prismjs/themes/prism-okaidia.css'
import '../assets/css/prism.css'

import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-markup-templating'



export default {
  name: "Getting_Started",
  mounted() {
  Prism.highlightAll()
}
 
 
  
};
</script>

<style>
#get-started {
  overflow-x: hidden;
}
@media (max-width: 768px) {
    body{overflow-x: hidden}
}
</style>
