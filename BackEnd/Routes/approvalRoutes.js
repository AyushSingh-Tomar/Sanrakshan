import express from 'express';
import { createApproval, updateApprovalStatus, getApprovalProgress } from '../Controllers/approvalController.js';

const router = express.Router();

router.post('/', createApproval);
router.patch('/:referenceId', updateApprovalStatus);
router.get('/:referenceId', getApprovalProgress);

export default router;
