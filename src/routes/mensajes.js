const express = require("express");
const Mensajes = require("../models/mensajesSchema");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const mensajes = await Mensajes.find();
        res.json(mensajes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:_id", async (req, res) => {
    try {
        const mensaje = await Mensajes.findById({_id: req.params._id});
        if (mensaje){
            res.json(mensaje);
        } else {
            res.status(404).json({ message: "Mensaje no encontrado" });
        }
    } catch (error){
        res.status(500).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const mensaje = new Mensajes(req.body);
        await mensaje.save();
        res.status(201).json({ message: "Mensaje creado exitosamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put("/:_id", async (req, res) => {
    try {
        const result = await Mensajes.findByIdAndUpdate(req.params._id, req.body, {new: true});
        if(result){
            res.json(result);
        } else{
            res.status(404).json({ message: "Mensaje no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete("/:_id", async (req, res) => {
    try {
        const result = await Mensajes.findByIdAndDelete(req.params._id);
        if(result){
            res.json({ message: "Mensaje eliminado exitosamente" });
        } else{
            res.status(404).json({ message: "Mensaje no encontrado" });
        }     
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;