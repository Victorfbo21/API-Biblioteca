import express from 'express';
import AutorController from '../Controller/autoresController.js';


const router = express.Router();

router
    .get("/autores", AutorController.listarAutor)
    .get("/autores/:id", AutorController.listarAutorid)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualizarAutor)
    .delete("/autores/:id", AutorController.removerAutor)

export default router;    