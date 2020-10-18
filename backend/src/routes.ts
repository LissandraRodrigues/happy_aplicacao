import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

// Rota de criar um orfanato.
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

// Rota de listagem de orfanatos.
routes.get('/orphanages', OrphanagesController.index);

// Rota de busca de um orfanato específico.
routes.get('/orphanages/:id', OrphanagesController.show);

export default routes;