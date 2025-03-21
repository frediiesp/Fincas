import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config({path: '.env'});

const db = new Sequelize(
    process.env.db_name,
    process.env.db_user,
    process.env.db_pass ?? '', {
        host: process.env.db_host,
        port: 3306,
        dialect:'mysql',
        // logging: false,
        define: {
            timestamps: true
        },
        // Reutilizar las conexiones
        pool: {
            max: 5, // Maximo de conexiones abiertas
            min: 0, // Minimo de conexiones
            acquire: 30000, // 30 segundos intentar crear una conexion antes de marcar error
            idle: 10000 // 10 segundos para finalizar una conexion si no hay movimientos
        },
        operatorsAliases: false
    });

export default db;