const express = require('express');
const employeeController = require('../controllers/employeeController');

const router = express.Router();

router.get('/employees', employeeController.getAllEmployees);
router.post('/employees', employeeController.createEmployee);

module.exports = router;
