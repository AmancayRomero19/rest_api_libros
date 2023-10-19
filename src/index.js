import express from 'express';
import morgan from 'morgan';
import router from './api/routes/libros.routes.js';

const app = express();
const port = 8002;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});