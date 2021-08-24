"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('postgres://postgres:codeside@0.0.0.0:5432/postgres');
exports.sequelize = sequelize;
//# sourceMappingURL=sequelize.js.map