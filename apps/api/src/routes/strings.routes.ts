/* eslint-disable @typescript-eslint/no-var-requires */
import express, { Router } from 'express';
const strings_controller = require('../controllers/strings.controller');

const router: Router = express.Router();

router.get('/', strings_controller.index);

module.exports = router;
