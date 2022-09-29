import { Router } from 'express';
import * as LecturesService from '../services/lectures/index.js';
const router = Router();

router.get('/', LecturesService.getLectures);
router.get('/:id', LecturesService.getLecturesId);

export default router;