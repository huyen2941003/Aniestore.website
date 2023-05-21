
const chatBot = document.querySelector('.chatBot-container');
const chatInput = document.querySelector('#textInput');
const chatYou = document.querySelector('.chat-you');
const chatBar = document.querySelector('.chat-bar')
function firstBotMess(){
   const firstMess = "Chào bạn,bạn cần shop hỗ trợ gì ạ ?";
   document.getElementById("botStartMessage").innerHTML = `<span>${firstMess}</span>`;    
}

firstBotMess();

function getBotMessage(userText) {
   let botResponse = setBotMessage(userText);
   let botHtml = `<div class="chat-shop-you"><img src="https://tawk.link/6389ad54b0d6371309d23fb5/var/trigger-images/c0035ba16c93e1e9ec9e1cbfa2a3c39c2ec22bbb.jpg"><p id="botStartMessage" class="botText"><span>${botResponse}</span></p></div>`;
   $(".shop-chat").append(botHtml);
   document.getElementById("chat-bar").scrollIntoView(true);
}

function sendMessage() {
   const message = chatInput.value;
   if (message.trim() !== '') {
      chatInput.value = '';
      const chatMessage = document.createElement('p');
      chatMessage.textContent = message;
      chatMessage.classList.add('chat-you-message');
      chatBar.appendChild(chatMessage);
      chatBot.scrollTop = chatBot.scrollHeight;
   }
}
function buttonSendText(sampleText) {
   let userHtml = `<p class="userText"><span>${sampleText}</span></p>`;

   $("#textInput").val("");
   $(".shop-chat").append(userHtml);
   document.getElementById("chat-bar").scrollIntoView(true);

   setTimeout(() => {
      getBotMessage(sampleText);
   }, 1000)
}

function sendButton() {
      if($("#textInput").val().length > 0)
      sendMessage();
}

function heartButton() {
   buttonSendText("Tôi rất hài lòng với tư vấn và chia sẻ của shop!")
}


chatInput.addEventListener('keydown', (event) => {
   if (event.keyCode === 13) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của trình duyệt
      sendMessage();
   }
});


function setBotMessage(input) {
   if (input == "hello") {
      return "Hello there!";
   } 
   else if (input == "goodbye") {
      return "Talk to you later!";
   }
   else if (input == "Tôi rất hài lòng với tư vấn và chia sẻ của shop!"){
      return "Cảm ơn bạn đã quan tâm và ủng hộ AnieStore"
   }
   else {
      return "Cảm ơn bạn vì đã truy cập vòa trang web";
   }
}
