import { Router } from 'express';
import * as UsersService from '../services/user/index.js';
const router = Router();

router.get('/', UsersService.getUsers);
router.get('/:id', UsersService.getUserId);

export default router;