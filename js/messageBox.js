
const phone = document.querySelector('.phone');
const time = document.querySelector('.times');
const boxchat = document.querySelector('.box-chat');
const container = document.querySelector('.container');

phone.addEventListener('click', e => {
  e.preventDefault();
  showChat();
})
time.addEventListener('click', e => {
  e.preventDefault();
  closeChat();
})

function showChat() {
  boxchat.style.display = 'block';
  container.style.display ='block';
}

function closeChat() {
  boxchat.style.display = 'none';
  container.style.display = 'none';
}

const nextButton = document.getElementById('chatNext');
const prevButton = document.getElementById('chatPrev');
const rightButton = document.getElementById('chatRight');
const exitButton = document.getElementById('chatExit');
const alignButton = document.getElementById('chatAlign');
const userTen = document.getElementById('userTen');
const userSdt = document.getElementById('userSdt');


nextButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

rightButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
})

prevButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

alignButton.addEventListener('click', () => {
  if(userTen.value.length > 0 && userSdt.value.length > 0){
	container.classList.add("left-panel-active");
  inputMess();
  }
});

exitButton.addEventListener('click', () => {
	container.classList.remove("left-panel-active");
	container.classList.remove("right-panel-active");
});

const inputMess = () => {
    let userTen =  document.getElementById('userTen').value;
    let userSdt = document.getElementById('userSdt').value;
    let userHtml = `<p><span>Tên : ${userTen}</span></p>
                    <p><span>Điện thoại : ${userSdt}</span></p>`;             
    document.querySelector('.chat-you').innerHTML = userHtml;        
}


