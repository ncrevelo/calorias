const jwt = require('jsonwebtoken');
const { response, request } = require('express');
const { Encrypt, Decrypt } = require('./validate');

// Función para crear un JWT basado en los datos del usuario
const CreateJWT = (data) => {
    const { id, email } = data;
    const token = jwt.sign({
        id,
        email
    }, process.env.AUTH_JW_SECRET_KEY, {
        expiresIn: '24h' 
    });
    return token;
};

const validateJWT = (req = request, res = response, next) => {
    let token = Decrypt(req.header('authorization'));

    if (!token) {
        return res.status(401).json({
            msn: 'Token inválido o ausente'
        });
    }

    try {
        token = token.replace('Bearer ', '');
        const { id, email } = jwt.verify(token, process.env.AUTH_JW_SECRET_KEY);
        req.user = { id, email }; 
    } catch (error) {
        return res.status(401).json({
            msn: 'Token inválido o expirado'
        });
    }

    next(); 
};

module.exports = {
    CreateJWT,
    validateJWT
};
