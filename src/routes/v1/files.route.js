import { Router } from 'express';
import { getFilesData, getFilesList } from '../../controllers/files.controller.js';

const router = Router();

router
  .route('/data')
  .get(getFilesData)

  router
  .route('/list')
  .get(getFilesList)


export default router;
