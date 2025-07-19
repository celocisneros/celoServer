function message(){
    fetch('/api/message') //calls the backend route
    .then(response => response.json())
    .then(data => {
        document.getElementById('serverBox').textContent = data.message;
    })
 .catch(err => {
      document.getElementById('output').textContent = 'Error getting message.';
      console.error('Fetch error:', err);
    });
}