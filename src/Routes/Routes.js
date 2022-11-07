const { Router } = require('express');
const HomeController = require('../Pages/Controller/HomeController');
const CapController = require('../Pages/Controller/CapController');
const CoatController = require('../Pages/Controller/CoatController');
const MugController = require('../Pages/Controller/MugController');
const ShirtController = require('../Pages/Controller/ShirtController');
const SockController = require('../Pages/Controller/SockController');

const router = Router();

router.get('/', HomeController.index);
router.get('/bone', CapController.index);
router.get('/moletom', CoatController.index);
router.get('/caneca', MugController.index);
router.get('/camisa', ShirtController.index);
router.get('/meia', SockController.index);

module.exports = router;
