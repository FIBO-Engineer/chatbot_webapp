function startChatbot() {
    document.querySelector('.greeting-container').style.display = 'none';
    document.querySelector('.chatbot-container').style.display = 'flex';
    document.querySelector('footer').style.display = 'flex';
}

function goBack() {
    document.querySelector('.chatbot-container').style.display = 'none';
    document.querySelector('.greeting-container').style.display = 'flex';
    document.querySelector('footer').style.display = 'none';
}

let isListening = false;

function toggleListening() {
    const micButton = document.querySelector('.footer-button.mic-button ion-icon');
    const micButtonContainer = document.querySelector('.footer-button.mic-button');
    if (isListening) {
        micButton.setAttribute('name', 'mic');
        micButtonContainer.style.animation = ''; 
        console.log('Stopped listening');
    } else {
        micButton.setAttribute('name', 'mic-sharp');
        micButtonContainer.style.animation = 'pulse 1.5s infinite'; 
        console.log('Listening...');
    }
    isListening = !isListening;
}
