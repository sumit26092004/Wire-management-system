import express from 'express';
import { getResources, createResource } from '../controllers/resourceController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getResources);
router.post('/', protect, adminOnly, createResource);

export default router;
