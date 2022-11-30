import { Router } from 'express';
import filesRoutes from './files.route.js';

const router = Router();

router.use('/files', filesRoutes);

export default router;
