    // Fetch the username from the backend
    fetch('/api/user')
      .then(res => res.json())
      .then(data => {
        if (data.username) {
          document.getElementById('welcome-msg').textContent = `Welcome, ${data.username}!`;
        } else {
          document.getElementById('welcome-msg').textContent = 'Welcome!';
        }
      })
      .catch(err => {
        document.getElementById('welcome-msg').textContent = 'Welcome!';
        console.error('Error fetching user:', err);
      });