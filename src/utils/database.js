const { Sequelize } = require("sequelize");
require("dotenv").config();
// crear una instancia con parametros de configuración de nuestra base de datos
// un objeto de configuración --> credenciales de mi base de datos
const db = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER, // postgres para ustedes
  host: process.env.DB_HOST, // 127.0.0.1
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD, // pones tu contraseña
  dialect: "postgres", // la base de datos que estamos usando
  logging: false, // Protip para no ver todo el codigo SQL que usamos gracias a Sequelize
  dialectOptions: {ssl: {require: true, rejectUnauthorized: false}},
});

module.exports = db;
