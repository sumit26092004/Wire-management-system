import express from 'express';
import { submitContactEnquiry, getContactEnquiries } from '../controllers/contactController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', submitContactEnquiry);
router.get('/', protect, adminOnly, getContactEnquiries);

export default router;
