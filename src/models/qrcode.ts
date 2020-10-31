import * as Sequelize from 'sequelize';
import db from '../utils/database';

const QrCode = db.define('qrcodes', {
  title: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  url: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  qr_image: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

QrCode.sync().then(() => {
  console.log('table created');
})

export default QrCode;
