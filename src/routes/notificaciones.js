const express = require("express");
const Notificaciones = require("../models/notificacionesSchema");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const notificaciones = await Notificaciones.find();
        res.json(notificaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:_id", async (req, res) => {
    try {
        const notificacion = await Notificaciones.findById({_id: req.params._id});
        if (notificacion){
            res.json(notificacion);
        } else {
            res.status(404).json({ message: "Notificacion no encontrada" });
        }
    } catch (error){
        res.status(500).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const notificacion = new Notificaciones(req.body);
        await notificacion.save();
        res.status(201).json({ message: "Notificacion creada exitosamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put("/:_id", async (req, res) => {
    try {
        const result = await Notificaciones.findByIdAndUpdate(req.params._id, req.body, {new: true});
        if(result){
            res.json(result);
        } else{
            res.status(404).json({ message: "Notificacion no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete("/:_id", async (req, res) => {
    try {
        const result = await Notificaciones.findByIdAndDelete(req.params._id);
        if(result){
            res.json({ message: "Notificacion eliminada exitosamente" });
        } else{
            res.status(404).json({ message: "Notificacion no encontrada" });
        }     
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;