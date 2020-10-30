"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('postgres://josholloqui:postgres@localhost:5432/postgres');
exports.default = db;
//# sourceMappingURL=database.js.map