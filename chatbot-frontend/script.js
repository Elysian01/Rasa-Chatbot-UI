/*
Makes backend API call to rasa chatbot and display output to chatbot frontend
*/



(function() {

    //---------------------------- Including Jquery ------------------------------

    var script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);

    //--------------------------- Chatbot Frontend -------------------------------
    const chatContainer = document.getElementById("chat-container");

    template = ` <button class='chat-btn'><img src = "./icons/comment.png" class = "icon" ></button>

	<div class='chat-popup'>

		<div class='chat-header'>
			<div class='chatBot-img'>
				<img src='https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png' alt='Chat Bot image' class='bot-img'> 
			</div>
			<h3 class='bot-title'>Covid Bot</h3>
			<button class = "expand-chat-window" ><img src="./icons/open_fullscreen.png" class="icon" ></button>
		</div>

		<div class='chat-area'>
			<div class='bot-msg'>
				<span class='msg'>Hi, How can i help you?</span>
			</div>

			<!-- <div class='bot-msg'>
				<img class='msg-image' src = "https://i.imgur.com/nGF1K8f.jpg" />
			</div> -->

			<!-- <div class='user-msg'>
				<span class='msg'>Hi, How can i help you?</span>
			</div> -->
			

		</div>


		<div class='chat-input-area'>
			<input type='text' autofocus class='chat-input' onkeypress='return givenUserInput(event)' placeholder='Type a message ...' autocomplete='off'>
			<button class='chat-submit'><i class='material-icons'>send</i></button>
		</div>

	</div>`

    chatContainer.innerHTML = template;

})()

const chatPopup = document.querySelector(".chat-popup")
const chatBtn = document.querySelector(".chat-btn")
const chatSubmit = document.querySelector(".chat-submit")
const chatArea = document.querySelector(".chat-area")
const chatInput = document.querySelector(".chat-input")
const expandWindow = document.querySelector(".expand-chat-window")
chatPopup.style.display = "none"
var host = ""

//------------------------ ChatBot Toggler -------------------------

chatBtn.addEventListener("click", () => {
    // chatPopup.classList.toggle("show");
    // chatInput.focus();
    if (chatPopup.style.display == "none") {
        chatPopup.style.display = "flex"
        chatInput.focus();
        chatBtn.innerHTML = `<img src = "./icons/close.png" class = "icon" >`
    } else {
        chatPopup.style.display = "none"
        chatBtn.innerHTML = `<img src = "./icons/comment.png" class = "icon" >`
    }
})

// to submit user input when he presses enter
function givenUserInput(e) {
    if (e.keyCode == 13) {
        let userResponse = chatInput.value;
        setUserResponse()
        send(userResponse)
    }
}

// to display user message on UI
function setUserResponse() {
    let userInput = chatInput.value;
    let temp = `<div class="user-msg"><span class = "msg">${userInput}</span></div>`
    chatArea.innerHTML += temp;
    chatInput.value = ""
    scrollToBottomOfResults();
}

chatSubmit.addEventListener("click", () => {
    let userResponse = chatInput.value;
    setUserResponse();
    send(userResponse)
})

function scrollToBottomOfResults() {
    chatArea.scrollTop = chatArea.scrollHeight;
}

/***************************************************************
Frontend Part Completed
****************************************************************/

// host = 'http://localhost:5005/webhooks/rest/webhook'
function send(message) {
    console.log("User Message:", message)
    $.ajax({
        url: host,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            "message": message,
            "sender": "User"
        }),
        success: function(data, textStatus) {
            if (data != null) {
                setBotResponse(data);
            }
            console.log("Rasa Response: ", data, "\n Status:", textStatus)
        },
        error: function(errorMessage) {
            setBotResponse("");
            console.log('Error' + errorMessage);

        }
    });
}


//------------------------------------ Set bot response -------------------------------------
function setBotResponse(val) {
    setTimeout(function() {
        if (val.length < 1) {
            //if there is no response from Rasa
            msg = 'I couldn\'t get that. Let\' try something else!';

            var BotResponse = `<div class='bot-msg'><span class='msg'> ${msg} </span></div>`;
            $(BotResponse).appendTo('.chat-area').hide().fadeIn(1000);

        } else {
            //if we get response from Rasa
            for (i = 0; i < val.length; i++) {
                //check if there is text message
                if (val[i].hasOwnProperty("text")) {
                    var BotResponse = `<div class='bot-msg'><span class='msg'>${val[i].text}</span></div>`;
                    $(BotResponse).appendTo('.chat-area').hide().fadeIn(1000);
                }

                //check if there is image
                if (val[i].hasOwnProperty("image")) {
                    var BotResponse = "<div class='bot-msg'>" +
                        '<img class="msg-image" src="' + val[i].image + '">' +
                        '</div>'
                    $(BotResponse).appendTo('.chat-area').hide().fadeIn(1000);
                }

            }
            scrollToBottomOfResults();
        }

    }, 500);
}

expandWindow.addEventListener("click", (e) => {
    let root = document.documentElement;
    console.log(expandWindow.innerHTML)
    if (expandWindow.innerHTML == '<img src="./icons/open_fullscreen.png" class="icon">') {
        expandWindow.innerHTML = `<img src = "./icons/close_fullscreen.png" class = 'icon'>`
        root.style.setProperty('--chat-window-height', 80 + "%");
        root.style.setProperty('--chat-window-width', 85 + "%");
    } else {
        expandWindow.innerHTML = `<img src = "./icons/open_fullscreen.png" class = "icon" >`
        root.style.setProperty('--chat-window-height', 550 + "px");
        root.style.setProperty('--chat-window-width', 400 + "px");
    }

})



function createChatBot(hostURL, title, welcomeMessage) {

    const msg = document.querySelector(".msg");
    msg.innerText = welcomeMessage;

    const botTitle = document.querySelector(".bot-title");
    botTitle.innerText = title;

    host = hostURL;
}