import { Sequelize } from 'sequelize'
import QrCode from '../models/qrcode';
import QrCodes from '../models/qrcode';

QrCode.sync();

const db = new Sequelize('postgres://josholloqui:postgres@localhost:5432/postgres', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

export default db;
