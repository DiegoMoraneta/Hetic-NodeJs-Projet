require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');

// Import des routes
const authRoutes = require('./routes/auth');
const fileRoutes = require('./routes/files');
const shareRoutes = require('./routes/share');

const app = express();

// Connexion à la base de données
connectDB();

// Middleware pour le parsing JSON
app.use(express.json());

// Servir les fichiers statiques du dossier 'public'
app.use(express.static('public'));

// Utilisation des routes
app.use('/auth', authRoutes);
app.use('/files', fileRoutes);
app.use('/share', shareRoutes);

// Gestion des erreurs 404
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
