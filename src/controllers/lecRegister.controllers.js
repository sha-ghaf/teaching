import { Router } from 'express'
import joiMiddleware from '../helper/middleWares/joiMiddleware.js';
import lecRegisterSchema from '../helper/schema/lecRegisterSchema.js';
import * as lecService from '../services/lecRegister/index.js';
const router = Router();

router.post('/', lecService.register, joiMiddleware(lecRegisterSchema));

export default router;