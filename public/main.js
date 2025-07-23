function message(){
    fetch('http://52.186.84.191:3000/api/message') //calls the backend route
    .then(response => response.json())
    .then(data => {
        document.getElementById('serverMessage').textContent = data.message;
    })
}
function openSettings(){
const settingsContainer = document.getElementById('settingsContainer');
settingsContainer.style.display = "block";
}
function closeSettings(){
const settingsContainer = document.getElementById('settingsContainer');
settingsContainer.style.display = "none";
}
function openSettingsOverlay(){
    const settingsOverlay = document.getElementById('settingsOverlay');
    settingsOverlay.style.display = "block";
}
function closeSettingsOverlay(){
    const settingsOverlay = document.getElementById('settingsOverlay');
    settingsOverlay.style.display = "none";
}
function openRadio(){
    const radio = document.getElementById('radio');
    radio.style.display = "flex";
}
function closeRadio(){
    const radio = document.getElementById('radio');
    radio.style.display = "none";
}
function playOpenSound(){
    const openSound = new Audio('open.mp3');
    openSound.play();
}
function playCloseSound(){
    const closeSound = new Audio('close.mp3');
    closeSound.play();
}