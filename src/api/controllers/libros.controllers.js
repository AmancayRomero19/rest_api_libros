import { pool } from '../../db/database.js';

export default class LibrosController {
    async getAllLibros(req, res, next) {
        try {
            const libros = await pool.query('SELECT * FROM libros');
            res.status(200).json(libros);
        } catch (err) {
            console.error(err);
        }
    };

    async getLibro(req, res, next) {
        try {
            const { id } = req.params;
            const libro = await pool.query('SELECT * FROM libros WHERE id = ?', [id]);
            libro ? res.status(200).json(libro) : res.status(404).json({ message: 'Libro no encontrado' });
        } catch (err) {
            console.error(err);
        };
    };
};

