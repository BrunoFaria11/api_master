"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const { getPages } = require('../controllers/pages.controller');
router.get('/pages', getPages);
module.exports = router;
//# sourceMappingURL=index.js.map