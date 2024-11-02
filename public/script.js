let token = "";

// Inscription
async function register() {
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;

  const response = await fetch('/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  document.getElementById('register-message').textContent = data.message || 'Inscription réussie !';
}

// Connexion
async function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  if (data.token) {
    token = data.token;
    document.getElementById('login-message').textContent = 'Connexion réussie !';
    document.getElementById('file-section').style.display = 'block';
    document.getElementById('share-section').style.display = 'block';
  } else {
    document.getElementById('login-message').textContent = data.message || 'Erreur de connexion';
  }
}

// Upload de fichier
async function uploadFile() {
  const fileInput = document.getElementById('file-input').files[0];
  const formData = new FormData();
  formData.append('file', fileInput);

  const response = await fetch('/files/upload', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` },
    body: formData,
  });

  const data = await response.json();
  document.getElementById('upload-message').textContent = data.message || 'Fichier uploadé avec succès';
}

// Création de lien de partage
async function createShareLink() {
  const fileId = document.getElementById('file-id').value;
  const expiresInHours = document.getElementById('expires-in').value;

  const response = await fetch('/share/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ fileId, expiresInHours }),
  });

  const data = await response.json();
  document.getElementById('share-message').textContent = data.link ? `Lien: ${data.link}` : 'Erreur lors de la création du lien';
}
