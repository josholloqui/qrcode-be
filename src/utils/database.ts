import { Sequelize } from 'sequelize'

const db = new Sequelize('postgres://josholloqui:postgres@localhost:5432/postgres')

export default db;
