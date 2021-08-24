import { Router } from 'express';
const router = Router();

 const { getPages } = require('../controllers/pages.controller')


router.get('/pages', getPages);

module.exports = router;