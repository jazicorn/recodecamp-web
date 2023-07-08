/* eslint-disable @typescript-eslint/no-var-requires */
import express, { Router } from 'express';
const home_controller = require('../controllers/index.controller');

const router: Router = express.Router();

router.get('/', home_controller.index);

module.exports = router;
