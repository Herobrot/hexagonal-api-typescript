const express = require("express");
const Avisos = require("../models/avisosSchema");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const avisos = await Avisos.find();
        res.json(avisos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:_id", async (req, res) => {
    try {
        const aviso = await Avisos.findById({_id: req.params._id});
        if (aviso){
            res.json(aviso);
        } else {
            res.status(404).json({ message: "Aviso no encontrado" });
        }
    } catch (error){
        res.status(500).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const aviso = new Avisos(req.body);
        await aviso.save();
        res.status(201).json({ message: "Aviso creado exitosamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put("/:_id", async (req, res) => {
    try {
        const result = await Avisos.findByIdAndUpdate(req.params._id, req.body, {new: true});
        if(result){
            res.json(result);
        } else{
            res.status(404).json({ message: "Aviso no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete("/:_id", async (req, res) => {
    try {
        const result = await Avisos.findByIdAndDelete(req.params._id);
        if(result){
            res.json({ message: "Aviso eliminado exitosamente" });
        } else{
            res.status(404).json({ message: "Aviso no encontrado" });
        }     
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;