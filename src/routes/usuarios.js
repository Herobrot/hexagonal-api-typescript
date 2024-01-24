const express = require("express");
const Usuarios = require("../models/usuariosSchema");
const jwt = require('jsonwebtoken');
const jwtSecretKey = process.env.SECRET_JWT;
const bcrypt = require('bcrypt');
const signale = require('signale');
const router = express.Router();

function createToken(user) {
    const payload = {userId: user._id};

    const expiration = '1h';

    return jwt.sign(payload, jwtSecretKey, { expiresIn: expiration });
}

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
    
    jwt.verify(token, jwtSecretKey, (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Token is not valid' });
      }
      req.user = user;
      next();
    });
}

router.get("/", async (req, res) => {
    try {
        const usuarios = await Usuarios.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:_id", authenticateToken, async (req, res) => {
    try {
        const usuario = await Usuarios.findById({_id: req.params._id});
        if (usuario){
            res.json(usuario);
        } else {
            res.status(404).json({ message: "Usuario no encontrado" });
        }
    } catch (error){
        res.status(500).json({ error: error.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { numeroPlaca, password } = req.body;
        const userFound = await Usuarios.findOne({numeroPlaca: numeroPlaca});

        if (!userFound) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        const isCorrectPass = bcrypt.compareSync(password, userFound.password);

        if (!isCorrectPass) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        const token = createToken(userFound);

        res.json({ token, userFound });

    } catch (error) {
        signale.fatal(new Error('Error al iniciar sesión: ' + error));
        res.status(500).json({ error: error.message });
    }
})

router.post("/registroUser", async (req, res) => {
    try {
        const newItemData = {
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            numeroPlaca: req.body.numeroPlaca,
            password: bcrypt.hashSync(req.body.password, parseInt(process.env.SALT_ROUNDS_BCRYPT)),
            rango: req.body.rango
        };

        const existingItem = await Usuarios.findOne({numeroPlaca: newItemData.numeroPlaca});

        if (existingItem) {
            return res.status(400).json({ message: "Ya existe un usuario con ese numero de placa" });
        }

        const newItem = new Usuarios(newItemData);
        const result = await newItem.save();
        
        if (result) {
            const token = createToken(result);
            res.status(201).json({ token, result });
        } else {
          res.status(500).json({ error: 'Error en la inserción de datos' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

router.put("/:_id", async (req, res) => {
    try {
        const item = {
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            numeroPlaca: req.body.numeroPlaca,
            password: bcrypt.hashSync(req.body.password, process.env.SALT_ROUNDS_BCRYPT),
            rango: req.body.rango
        }

        const result = await Usuarios.findByIdAndUpdate(req.params._id, item, {new: true});
        if(result){
            res.json(result);
        } else{
            res.status(404).json({ message: "Usuario no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete("/:_id", async (req, res) => {
    try {
        const result = await Usuarios.findByIdAndDelete(req.params._id);
        if(result){
            res.json({ message: "Usuario eliminado exitosamente" });
        } else{
            res.status(404).json({ message: "Usuario no encontrado" });
        }     
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;