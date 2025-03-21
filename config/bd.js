import { Sequelize } from "sequelize";

const db = new Sequelize('fincas', 'root', 'Scor.0011', {
    host: 'localhost',
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
})

export default db;