import express from 'express';
import { formularioLogin, formularioRegistro, formularioOlvidateContraseña } from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/login', formularioLogin);
router.get('/registro', formularioRegistro);
router.get('/olvide-password', formularioOlvidateContraseña);

export default router;