<template>
<div id="get-started" class="dark-bg">
    <br />
    <h1 class="text-center text-white">
        Getting <span class="primary-color">Started</span>
    </h1>
    <br />
    <br />

    <div class="container">
        <h3 data-aos="fade-right" data-aos-duration="500" class="text-white text-center">
            Copy-paste the stylesheet
            <span class="primary-color">&lt;link&gt;</span> into your
            <span class="primary-color">&lt;head&gt;</span> before all other
            stylesheets to load our CSS.
        </h3>
        <br />

        <pre class="language-javascript">
            <div class="copy">Copy</div>
            <code class="language-js language-markup">     
                &lt;link rel="stylesheet" href="https://drive.google.com/uc?id=1x2TCnJdXTQFErgZhxjMUWKIIfIfSbIy-">
            </code>
        </pre>

        <br />

        <h3 data-aos="fade-right" data-aos-duration="500" class="text-white text-center">
            Copy-paste the folowing code into your
            <span class="primary-color">&lt;body&gt;</span>, and update the function
            parameters to your need.
        </h3>

        <br />

        <pre class="language-javascript">

            <div class="copy">Copy</div>

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

                <li data-aos="fade-right" :data-aos-duration="obj.duration" class="list-group-item list-group-item-left" v-for="(obj, key) in left_cards" :key="key">
                        <b class="arrow">>></b>
                        <span class="title">{{obj.title}}: </span>{{obj.description}}
                    </li>
                   
                </ul>
            </div>

            <div class="col">
                <ul class="list-group list-group-right">
                <li data-aos="fade-left" :data-aos-duration="obj.duration" class="list-group-item list-group-item-left" v-for="(obj, key) in right_cards" :key="key">
                        <b class="arrow">>></b>
                        <span class="title">{{obj.title}}: </span>{{obj.description}}
                    </li>
                   
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Prism from 'prismjs'
import Clipboard from 'clipboard'
// import 'prismjs/themes/prism-okaidia.css'
import '../assets/css/prism.css'

import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-markup-templating'

// create clipboard for every copy element
const clipboard = new Clipboard('.copy', {
  target: (trigger) => {
    return trigger.nextElementSibling;
  }
});


// do stuff when copy is clicked
clipboard.on('success', (event) => {
  event.trigger.textContent = 'Copied!';
  setTimeout(() => {
    event.clearSelection();
    event.trigger.textContent = 'Copy';
  }, 1000);
});



export default {
    name: "Getting_Started",

    data: () => ({
        left_cards : [
            {
                duration:"500",
                title:"createChatbot",
                description:"To initailize & set various aspects of chatbot"
            },
            {
                duration:"700",
                title:"host",
                description:"The URL of hosted chatbot"
            },
            {
                duration:"850",
                title:"botLogo",
                description:"Logo Of the Bot"
            },
            {
                duration:"1000",
                title:"title",
                description:"The title which will appear on the header of chatbot"
            },
        ],

        right_cards : [
            {
                duration:"600",
                title:"welcomeMessage",
                description:"Starting Message shown to the user, can be any greeting or information"
            },
            {
                duration:"750",
                title:"inactiveMsg",
                description:"When bot server is down or unreachable this message will be shown"
            },
            {
                duration:"900",
                title:"theme",
                description:"Color of header, bot message and overall layout, there are two inbuilt theme for bot, blue and purple"
            },
            
        ]
    }),

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
    body {
        overflow-x: hidden
    }
}
</style>
