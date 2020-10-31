"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const qrcode_1 = __importDefault(require("../models/qrcode"));
qrcode_1.default.sync();
const db = new sequelize_1.Sequelize('postgres://josholloqui:postgres@localhost:5432/postgres', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
exports.default = db;
//# sourceMappingURL=database.js.map