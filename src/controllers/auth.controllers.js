import { Router } from 'express';
import joiMiddleware from '../helper/middleWares/joiMiddleware.js';
import registerSchema from '../helper/schema/registerSchema.js';
import loginSchema from '../helper/schema/loginSchema.js';
import * as AuthService from '../services/auth/index.js';
const router = Router();

router.post('/register', AuthService.register, joiMiddleware(registerSchema));
router.post('/login', AuthService.login, joiMiddleware(loginSchema));

export default router;