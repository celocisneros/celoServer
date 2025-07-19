function message(){
    fetch('/api/message') //calls the backend route
    .then(response => response.json())
    .then(data => {
        document.getElementById('serverBox').textContent = data.message;
    })
}