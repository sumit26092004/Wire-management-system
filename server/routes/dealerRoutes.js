import express from 'express';
import { submitDealerApplication, getDealerApplications, updateDealerStatus } from '../controllers/dealerController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/apply', submitDealerApplication);
router.get('/', protect, adminOnly, getDealerApplications);
router.put('/:id', protect, adminOnly, updateDealerStatus);

export default router;
