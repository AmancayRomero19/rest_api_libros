import { Router } from 'express';
import LibrosController from '../controllers/libros.controllers.js';

const librosController = new LibrosController();
const router = Router();

router.get('/libros', librosController.getAllLibros);
router.get('/libro/:id', librosController.getLibro);

export default router;