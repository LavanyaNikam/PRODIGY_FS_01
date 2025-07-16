import express from 'express';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, (req, res) => {
  res.json({
    message: `Welcome, authenticated user with ID: ${req.user.id}`,
  });
});

export default router;
