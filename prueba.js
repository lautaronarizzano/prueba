const express = require(‘express’);

const jwt = require(‘jsonwebtoken’);

const app = express();

// Middleware para validar el token de acceso

const authenticateToken = (req, res, next) => {

const authHeader = req.headers[‘authorization’];

const token = authHeader && authHeader.split(’ ‘)[1];

if (token == null) {

return res.sendStatus(401);

}

jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {

if (err) {

return res.sendStatus(403);

}

req.user = user;

next();

});

}

// Middleware para delimitar el acceso a endpoints según el rol del usuario

const authorizeRole = (role) => (req, res, next) => {

if (req.user && req.user.scope === role) {

next();

} else {

res.sendStatus(403);

}

}

// Endpoint para crear un producto (solo para el administrador)

app.post(’/productos’, authenticateToken, authorizeRole(‘admin’), (req, res) => {

// Código para crear un producto

});

// Endpoint para actualizar un producto (solo para el administrador)

app.put(‘/productos/:id’, authenticateToken, authorizeRole(‘admin’), (req, res) => {

// Código para actualizar un producto

});

// Endpoint para eliminar un producto (solo para el administrador)

app.delete(‘/productos/:id’, authenticateToken, authorizeRole(‘admin’), (req, res) => {

// Código para eliminar un producto

});

// Endpoint para enviar un mensaje al chat (solo para el usuario)

app.post(‘/chat’, authenticateToken, authorizeRole(‘user’), (req, res) => {

// Código para enviar un mensaje al chat

});

// Endpoint para agregar un producto al carrito (solo para el usuario)

app.post(‘/carrito’, authenticateToken, authorizeRole(‘user’), (req, res) => {

// Código para agregar un producto al carrito

});