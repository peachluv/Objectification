document.getElementById('objection').onclick = function playSound() {
    var myAudio = new Audio(); 
    myAudio.src = chrome.extension.getURL("phoenix-objection.mp3");
    myAudio.play();

};