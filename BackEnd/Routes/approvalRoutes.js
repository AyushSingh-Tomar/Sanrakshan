const express = require('express');
const router = express.Router();
const approvalController = require('../Controllers/approvalController');
const roleAuth = require('../middleware/roleAuth');

// TA Admin route
router.post('/approve/taadmin/:mainReferenceId', roleAuth(['taadmin']), approvalController.taadminApprove);

// SFO Admin route
router.post('/approve/sfoadmin/:mainReferenceId', roleAuth(['sfoadmin']), approvalController.sfoadminApprove);

// SFA Admin route
router.post('/approve/sfaadmin/:mainReferenceId', roleAuth(['sfaadmin']), approvalController.sfaadminApprove);

// FSI Admin route
router.post('/approve/fsiadmin/:mainReferenceId', roleAuth(['fsiadmin']), approvalController.fsiadminApprove);

// DFO route
router.post('/approve/dfo/:mainReferenceId', roleAuth(['dfo']), approvalController.dfoApprove);

// DCFO route
router.post('/approve/dcfo/:mainReferenceId', roleAuth(['dcfo']), approvalController.dcfoApprove);

// CFO route
router.post('/approve/cfo/:mainReferenceId', roleAuth(['cfo']), approvalController.cfoApprove);

// ADFO route
router.post('/approve/adfo/:mainReferenceId', roleAuth(['adfo']), approvalController.adfoApprove);

module.exports = router;
