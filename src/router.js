import { Router } from 'express';
import { processData } from './form';

const router = Router();

router.post('/form', processData)


export default router;