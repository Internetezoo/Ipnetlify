fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('ip').innerText = data.ip;
  })
  .catch(error => {
    document.getElementById('ip').innerText = 'Hiba a lekérés során';
  });
