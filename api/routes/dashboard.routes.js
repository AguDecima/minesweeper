let express = require('express');
let router = express.Router();
let dashboardController = require('../controllers/dashboard.controller');

router.get('/dashboard' , dashboardController.getAll);
router.post('/dashboard' , dashboardController.saveRegister);

module.exports = router;