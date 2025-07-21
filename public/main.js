function message(){
    fetch('http://52.186.84.191:3000/api/message') //calls the backend route
    .then(response => response.json())
    .then(data => {
        document.getElementById('serverMessage').textContent = data.message;
    })
}
function openSettings{
const settingsContainer = document.getElementById('settingsContainer');
settingsContainer.style.display = block;
}
function closeSettings{
    document.getElementById('settingsContainer').style.display = 'none';
}