<template>
<div>
    <button class='chat-btn'>
        <img src="../assets/icons/comment.png" class="material-icon">
    </button>

    <div class='chat-popup'>

        <div class='chat-header'>
            <div class='chatbot-img'>
                <img src='${botLogoPath}' alt='Chat Bot image' class='bot-img'>
            </div>
            <h3 class='bot-title'>Covid Bot</h3>
            <button class="expand-chat-window"><img src="../assets/icons/open_fullscreen.png" class="material-icon"></button>
        </div>

        <div class='chat-area'>
            <div class='bot-msg'>
                <img class='bot-img' src='${botLogoPath}' />
                <span class='msg'>Hi, How can i help you?</span>
            </div>
        </div>

        <div class='chat-input-area'>
            <input type='text' autofocus class='chat-input' onkeypress='return givenUserInput(event)' placeholder='Type a message ...' autocomplete='off'>
            <button class='chat-submit'><i class='material-icons'>send</i></button>
        </div>
    </div>
</div>
</template>

<script>
import "../assets/demo-bot/chatbot-ui.css"



// const chatPopup = document.querySelector(".chat-popup")
// const chatBtn = document.querySelector(".chat-btn")
// const chatSubmit = document.querySelector(".chat-submit")
// const chatHeader = document.querySelector(".chat-header")
// const chatArea = document.querySelector(".chat-area")
// const chatInput = document.querySelector(".chat-input")
// const expandWindow = document.querySelector(".expand-chat-window")
// const root = document.documentElement;
// chatPopup.style.display = "none"
// var host = ""

// chatBtn.addEventListener("click", () => {

//         mobileDevice = !detectMob()
//         if (chatPopup.style.display == "none" && mobileDevice) {
//             chatPopup.style.display = "flex"
//             chatInput.focus();
//             chatBtn.innerHTML = `<img src = "./icons/close.png" class = "material-icon" >`
//         } else if (mobileDevice) {
//             chatPopup.style.display = "none"
//             chatBtn.innerHTML = `<img src = "./icons/comment.png" class = "material-icon" >`
//         } else {
//             mobileView()
//         }
//     })

//     chatSubmit.addEventListener("click", () => {
//         let userResponse = chatInput.value.trim();
//         if (userResponse !== "") {
//             // setUserResponse();
//             // send(userResponse)
//         }
//     })

//     expandWindow.addEventListener("click", () => {
//         // console.log(expandWindow.innerHTML)
//         if (expandWindow.innerHTML == '<img src="./icons/open_fullscreen.png" class="material-icon">') {
//             expandWindow.innerHTML = `<img src = "./icons/close_fullscreen.png" class = 'material-icon'>`
//             root.style.setProperty('--chat-window-height', 80 + "%");
//             root.style.setProperty('--chat-window-total-width', 85 + "%");
//             chatHeader.style.width = "100%";
//         } else if (expandWindow.innerHTML == '<img src="./icons/close.png" class="material-icon">') {
//             chatPopup.style.display = "none"
//             chatBtn.style.display = "block"
//         } else {
//             expandWindow.innerHTML = `<img src = "./icons/open_fullscreen.png" class = "material-icon" >`
//             root.style.setProperty('--chat-window-height', 500 + "px");
//             root.style.setProperty('--chat-window-total-width', 380 + "px");
//         }

//     })
// function scrollToBottomOfResults() {
//     chatArea.scrollTop = chatArea.scrollHeight;
// }

//------------------------------------ Set bot response -------------------------------------
// function setBotResponse(val) {
//     setTimeout(function() {
//         if (val.length < 1) {
//             //if there is no response from Rasa
//             // msg = 'I couldn\'t get that. Let\' try something else!';
//             msg = inactiveMessage;

//             var BotResponse = `<div class='bot-msg'><img class='bot-img' src ='${botLogoPath}' /><span class='msg'> ${msg} </span></div>`;
//             $(BotResponse).appendTo('.chat-area').hide().fadeIn(1000);
//             scrollToBottomOfResults();
//             chatInput.focus();

//         } else {
//             //if we get response from Rasa
//             for (let i = 0; i < val.length; i++) {
//                 //check if there is text message
//                 if (val[i].hasOwnProperty("text")) {
//                     var BotResponse = `<div class='bot-msg'><img class='bot-img' src ='${botLogoPath}' /><span class='msg'>${val[i].text}</span></div>`;
//                     $(BotResponse).appendTo('.chat-area').hide().fadeIn(1000);
//                 }

//                 //check if there is image
//                 if (val[i].hasOwnProperty("image")) {
//                     var BotResponse = "<div class='bot-msg'>" + "<img class='bot-img' src ='${botLogoPath}' />"
//                     '<img class="msg-image" src="' + val[i].image + '">' +
//                         '</div>'
//                     $(BotResponse).appendTo('.chat-area').hide().fadeIn(1000);
//                 }

//             }
//             scrollToBottomOfResults();
//             chatInput.focus();
//         }

//     }, 500);
// }
// function mobileView() {
//     $('.chat-popup').width($(window).width());

//     if (chatPopup.style.display == "none") {
//         chatPopup.style.display = "flex"
//             // chatInput.focus();
//         chatBtn.style.display = "none"
//         chatPopup.style.bottom = "0"
//         chatPopup.style.right = "0"
//             // chatPopup.style.transition = "none"
//         expandWindow.innerHTML = `<img src = "./icons/close.png" class = "material-icon" >`
//     }
// }

// function detectMob() {
//     return ((window.innerHeight <= 800) && (window.innerWidth <= 600));
// }
// function createChatBot(hostURL, botLogo, title, welcomeMessage, inactiveMsg, theme = "blue") {

//     host = hostURL;
//     botLogoPath = botLogo;
//     inactiveMessage = inactiveMsg;
//     init(botLogoPath)
//     const msg = document.querySelector(".msg");
//     msg.innerText = welcomeMessage;

//     const botTitle = document.querySelector(".bot-title");
//     botTitle.innerText = title;

//     chatbotTheme(theme)
// }


export default {
// mounted() {

//       let recaptchaScript = document.createElement('script')
//       recaptchaScript.setAttribute('src','../assets/demo-bot/chatbot-ui.js')
//       document.head.appendChild(recaptchaScript)

//     },

}
</script>

<style>

</style>
